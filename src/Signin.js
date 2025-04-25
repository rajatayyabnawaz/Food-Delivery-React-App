import React from 'react';
import './signin.css';

const Signin = () => {
  return (
    <div className='bdy'>
      <div className='main'>
        <div className='form-container'>
          <h1>Login</h1>
          <input className='input' type='email' placeholder='Email' />
          <input className='input' type='password' placeholder='Password' />

          <div className='checkbox-container'>
            <input type='checkbox' id='agree' />
            <label htmlFor='agree'>
              I agree to the <span className="highlight">terms of rules</span> and <span className="highlight">privacy</span>
            </label>
          </div>

          <button className='loginbtn'>Continue</button>

          <p className='create-account'>
            Don't have an account? <a href='/Signup'>Click here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
