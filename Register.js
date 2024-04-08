import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';

const Register = () => {
  return (
    <>
    <Navbar/>
        <div className="login-page">
          <div className="form">
            <h2>SIGN UP</h2>
            <form className="signup-form">
              <input type="text" placeholder="username" />
              <input type="email" placeholder="email address" />
              <input type="password" placeholder="password" />
              <button>Sign up</button>
              <p className="message">Already have an account? <Link to="/login">Log In</Link></p>
            </form>
          </div>
        </div>
        </>
      );
}

export default Register
