import React, { useState } from 'react';
import '../../../../styles/components/auth/signUp/signUp.css'
// import Images from '../../../../assets/images/svg/index.js'
import openEye from '../../../../assets/images/svg/openEye.svg'
import eyeClosed from '../../../../assets/images/svg/eyeClosed.svg'
import googleLogo from '../../../../assets/images/svg/googleLogo.svg'
import linkedinLogo from '../../../../assets/images/svg/linkedinLogo.svg'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profession, setProfession] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/signUp', {firstName, lastName, profession, email, password, confirmPassword})
    .then(result => {console.log(result)
    navigate('/codeConfirmation')    
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="main-container">
      <div className="grid-container">
        <div className="bg-container">
          <div className="bg-text">
            <h1>CHATTER</h1>
            <p>Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
          </div>
        </div>
        <div className="form-container">
          <div className="regis-log-container">
            <span className="reg">
              <p>REGISTER</p>
            </span>
            <Link to="/login" className="log">
              <p>LOGIN</p>
            </Link>            
          </div>
          <div className="form-header">
            <h2>Register as a Writer/Reader</h2>
          </div>
          <form onSubmit={handleSubmit} action="">
            <div className="first-last-name">           
              <div className="firstName">
              <div>
                <label htmlFor="firstName">First name</label>
              </div>
              <div className='half-box'>
                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" name="" id="first_name" placeholder='John'/>
              </div>
              </div>
              <div className="lastName">
                <div><label htmlFor="lastName">Last name</label></div>
                <div className='half-box'>
                  <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" name="" id="last_name" placeholder='Doe'/>
                  </div>
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="profession" className='profession'>You are joining as?</label>
              <div className="profession-options">
                <select onChange={(e) => setProfession(e.target.value)} 
                // value={profession}
                name="profession" 
                id="profession">
                <option value="writer">Writer</option>
                <option value="doctor">Doctor</option>
                <option value="lawyer">Lawyer</option>
                <option value="Software Engineer">Software Engineer</option>
              </select>
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
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
            <div className="input-box">
              <label htmlFor="confirmPassword">Password</label>
              <div className="confirm-password-input">
                <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="confirmPassword" name="confirmPassword" id="confirmPassword" placeholder='***********'/>
                <img src={eyeClosed} alt="closed eye" />
              </div>
            </div>
            <div className="create-acc-btn">
              <Link to="/codeConfirmation" className="link-code-confirm">
                <button className='my-btn'>Create account</button>
              </Link>
            </div>
          </form>
            <div className="google-sign-up-btn">
              <Link to="https://mail.google.com/?" target='blank' className="link-google">
                <img src={googleLogo} alt="google logo" />
              <button className='my-btn'>Sign up with google</button>
              </Link>
            </div>
            <div className="linkedin-sign-up-btn">
              <Link to="https://www.linkedin.com/login" target='blank' className="link-linkedIn">
                <img src={linkedinLogo} alt="linkedIn logo" />
              <button className='my-btn'>Sign up with Linkedin</button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp