// Login.jsx
import React from 'react';
import './Login.css'; // Import Login styles if needed
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'


const Login = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Login</div>
        <div className='underline'></div>
      </div>

      <div className="inputs">
        <div className='input'>
        <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id' />
        </div>

        <div className='input'>
        <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' />
        </div>
      </div>

      <div className='submit-container'>
        <div className='submit'>Login</div>
      </div>
    </div>
  );
}

export default Login;
