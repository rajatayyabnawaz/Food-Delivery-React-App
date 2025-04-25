import React from 'react';
import './signup.css';

const Signup = () => {
  return (
    <div className='bdy'>
      <div className='main'>
        <div className='form-container'>
          <h1>Sign Up</h1>
          
          <input className='input' type='text' placeholder='Username' />
          <input className='input' type='email' placeholder='Email' />
          <input className='input' type='password' placeholder='Password' />
          
          <div className='checkbox-container'>
            <input type='checkbox' id='agree' />
            <label htmlFor='agree'>
              I agree to the <span className="highlight">terms of rules</span> and <span className="highlight">privacy</span>
            </label>
          </div>

          <button className='loginbtn'>Create Account</button>

          <p className='create-account'>
            Already have an account? <a href='/signin'>Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
