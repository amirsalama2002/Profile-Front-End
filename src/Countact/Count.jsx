import React from 'react';
import './Count.css';

const Count = () => {
    const users = [
        { id: 1, name: 'The Address' , jop : 'Abu Kibir Al Sharqiya' },
        { id: 2, name: 'The Address', jop : 'Cairo Shorouk'},
        { id: 3,name: 'The Address' , jop : 'Giza Cairo' },
      ];
    return (
        <div className='car'>
        {users.map(user => (
          <div key={user.id} className="card">
          <div className="card-body">
          <i class="fa-solid fa-location-dot"/>
            <h5 className="card-title">{user.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{user.jop}</h6>
          </div>
        </div>
        ))}
      </div>

    );
}

export default Count;
