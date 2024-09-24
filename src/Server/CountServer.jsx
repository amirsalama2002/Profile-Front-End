import React from 'react';
import './CountServer.css';

const CountServer = () => {
    const users = [
        { id: 1, name: 'Web Developer' , jop : 'Front End Developer' },
        { id: 2, name: 'Web Developer', jop : 'Back End Developer'},
        { id: 3,name: 'Web Developer' , jop : 'Full Stack Developer' },
      ];
    return (
        <div className='cardd'>
        {users.map(user => (
          <div key={user.id} className="card">
          <div className="card-body">
            <i class="fa-solid fa-code"/>
            <h5 className="card-title">{user.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{user.jop}</h6>
          </div>
        </div>
        ))}
      </div>

    );
}

export default CountServer;
