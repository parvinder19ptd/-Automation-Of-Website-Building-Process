import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Login = () => {
  return (
    <>
    <Navbar/>
      <div class="login-page">     
  <div class="form ">
  <h2>LOGIN</h2>
    <form class="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p class="message">Not registered? <Link to="/register">Create an account</Link></p>
    </form>
  </div>
</div>
</>
  )
}

export default Login
