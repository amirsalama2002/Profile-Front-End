import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {
  const [cards, setCards] = useState([]);
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    email: '',
    title: '',
    specialization: '',
    phone: ''
  });

  // جلب البيانات عند تحميل الصفحة
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/index')
      .then(response => setCards(response.data))
      .catch(error => console.error(error));
  }, []);

  // التعامل مع التغيير في الحقول (نصوص وصورة)
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    // إذا كان الحقل هو صورة
    if (name === "image" && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0],  // تعيين الملف المختار
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,  // تعيين القيمة الأخرى
      });
    }
  };

  // إرسال البيانات إلى الخادم
  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من أن جميع الحقول تم تعبئتها
    for (const key in formData) {
      if (!formData[key] && key !== 'image') {
        alert(`Field ${key} is required!`);
        return;
      }
    }

    // التحقق من وجود صورة
    if (!formData.image || !(formData.image instanceof File)) {
      alert("Image is required and must be a valid file!");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    axios.post("http://127.0.0.1:8000/api/store", data)
      .then((response) => {
        setFormData({ image: "", name: "", email: "", title: "", specialization: "", phone: "" });
        setCards([...cards, response.data]);  // إضافة البطاقة الجديدة للقائمة
      })
      .catch((error) => {
        console.error("Error details:", error.response?.data || error.message);
      });
  };

  // حذف البطاقة
  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/delete/${id}`)
      .then(() => setCards(cards.filter(card => card.id !== id)))
      .catch(error => console.error(error));
  };

  // تحديث البطاقة
  const handleUpdate = (id) => {
    if (!formData.name || !formData.email || !formData.phone || !formData.image || !formData.title
        || !formData.specialization
    ) {
      alert("All fields are required!");
      return;
    }

    const data = new FormData();
    // التأكد من إضافة الصورة إذا كانت موجودة
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    axios.put(`http://127.0.0.1:8000/api/update/${id}`, data)
      .then((response) => {
        setCards(cards.map((card) =>
          card.id === id ? { ...card, ...response.data } : card
        ));
      })
      .catch((error) => {
        console.error("Error details:", error.response?.data || error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="image"
          accept="image/*" // السماح فقط بملفات الصور
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={formData.specialization}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        {cards.map(card => (
          <div key={card.id} className="card">
            <img style={{ width: '200px', height: '200px' }} src={`http://127.0.0.1:8000/storage/${card.image}`} alt={card.name} />
            <h3>{card.name}</h3>
            <h3>{card.email}</h3>
            <p>{card.title}</p>
            <p>{card.phone}</p>
            <p>{card.specialization}</p>
            <button onClick={() => handleDelete(card.id)}>Delete</button>
            {/* <button onClick={() => handleUpdate(card.id)}>Update</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
