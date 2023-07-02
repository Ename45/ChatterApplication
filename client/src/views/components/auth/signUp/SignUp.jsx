import React, { useState } from 'react';
import '../../../../styles/components/auth/signUp/signUp.css'
import openEye from '../../../../assets/images/svg/openEye.svg'
import eyeClosed from '../../../../assets/images/svg/eyeClosed.svg'
import googleLogo from '../../../../assets/images/svg/googleLogo.svg'
import linkedinLogo from '../../../../assets/images/svg/linkedinLogo.svg'
import axios from 'axios';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profession, setProfession] = useState('Writer')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const navigate = useNavigate()



  // const handleSubmit = (e)=>{
  //   e.preventDefault()
  //   axios.post('http://localhost:5173/signUp', {firstName, lastName, profession, email, password})
  //   .then(result => {console.log(result)
  //   navigate('/codeConfirmation')    
  //   })
  //   .catch(err => console.log(err))
  // }

  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/signUp', {firstName, lastName, profession, email, password})
    .then(result => {console.log(result)})
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
            <div className="log">
              <p>LOGIN</p>
            </div>            
          </div>
          <div className="form-header">
            <h2>Register as a Writer/Reader</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="first-last-name">           
              <div className="firstName">
              <div>
                <label htmlFor="firstName">First name</label>
              </div>
              <div className='half-box'>
                <input 
                type="text" 
                name="first" 
                id="firstName" 
                placeholder='John'
                autoComplete='on'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              </div>
              <div className="lastName">
                <div><label htmlFor="lastName">Last name</label></div>
                <div className='half-box'>
                  <input 
                  type="text" 
                  name="lastName "
                  id="lastName" 
                  placeholder='Doe' 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete='on'
                  />
                  </div>
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="profession" className='profession'>You are joining as?</label>
              <div className="profession-options">
                <select 
                name="profession" 
                id="profession"
                autoComplete='on'
                value={profession}
                onChange={(e) =>{
                  setProfession(e.target.value)
                }}
                >
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
                <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder='johndoe@gmail.com' 
                autoComplete='on'
                value={email}
                onChange={(e) =>{
                  setEmail(e.target.value)
                }}
                />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <div className="password-input-box">
                <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder='***********'
                autoComplete='on'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                />
                <img src={openEye} alt="open eye" />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="confirmPassword">Confirm password</label>
              <div className="confirm-password-input">
                <input 
                type="confirmPassword" 
                name="confirmPassword" 
                id="confirmPassword" 
                placeholder='***********'
                autoComplete='on'
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
                />
                <img src={eyeClosed} alt="closed eye" />
              </div>
            </div>
            <div className="create-acc-btn">
              <div className="link-code-confirm">
                <button className='my-btn'>Create account</button>
              </div>
            </div>
          </form>
            <div className="google-sign-up-btn">
              <div target='blank' className="link-google">
                <img src={googleLogo} alt="google logo" />
              <button className='my-btn'>Sign up with google</button>
              </div>
            </div>
            <div className="linkedin-sign-up-btn">
              <div target='blank' className="link-linkedIn">
                <img src={linkedinLogo} alt="linkedIn logo" />
              <button className='my-btn'>Sign up with Linkedin</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp