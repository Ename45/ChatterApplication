import React, { useState } from 'react';
import '../../../../styles/components/auth/login/login.css'
// import Images from '../../../../assets/images/svg/index.js'
import openEye from '../../../../assets/images/svg/openEye.svg'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import AuthPages from '../../reuseables/AuthPages';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => {console.log(result)
    navigate('/landingPage')    
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="login-main-container">
      <AuthPages/>
        <div className="form-container">
          <div className="reg-log-container">
            <Link  to="/signUp" className="reg">
              <p>REGISTER</p>
            </Link>
            <span className="log">
              <p>LOGIN</p>
            </span>            
          </div>
          <div className="form-header">
            <h2>Welcome back</h2>
          </div>
          <form onSubmit={handleSubmit} action="">
            <div className="input-box">
              <label htmlFor="email">Email address</label>
              <div className="email-input-box">
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email" placeholder='johndoe@gmail.com'/>
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <div className="password-input-box">
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" id="password" placeholder='***********'/>
                <img src={openEye} alt="open eye" />
              </div>
            </div>
            <div className="create-acc-btn">
              <Link to="/feedScreen" className="link-feedsPage">
                <button className='my-btn'>Log in</button>
              </Link>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Login