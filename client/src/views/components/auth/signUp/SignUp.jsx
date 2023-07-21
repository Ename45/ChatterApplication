import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import '../../../../styles/components/auth/signUp/signUp.css'
import openEye from '../../../../assets/images/svg/openEye.svg'
import eyeClosed from '../../../../assets/images/svg/eyeClosed.svg'
import googleLogo from '../../../../assets/images/svg/googleLogo.svg'
import linkedinLogo from '../../../../assets/images/svg/linkedinLogo.svg'
import AuthPages from '../../reuseables/AuthPages';
import Axios from 'axios'

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profession, setProfession] = useState('Writer')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate()


  // const passwordCheck = () => {
  //   if (password === confirmPassword) {
      
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:3000/api/1.0/users/signUp', {
        firstName,
        lastName,
        profession,
        email,
        password,
        confirmPassword,
      });
      console.log(response.data);
      navigate('/codeConfirmation');
    } catch (error) {
      console.log(error.response.data);
    }
  };


  // const handleSubmit = async(e)=>{
  //   e.preventDefault()
  //   const result = await Axios.post('http://localhost:3000/api/users/signUp', {firstName, lastName, profession, email, password, confirmPassword})
  //   .then(result => {
  //     console.log(result)
  //     navigate('/codeConfirmation')
  //   })
  //   .catch(err => console.log(err))
  // }
  
  return (
    <div className='signUp-main-container'>
    <AuthPages/>
    <div className="form-container">
          <div className="regis-log-container">
            <span className="reg">
              <p>REGISTER</p>
            </span>
            <Link to='/login' className="log">
              <p>LOGIN</p>
            </Link>            
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
                required= 'required' 
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
                  required= 'required' 
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
                required= 'required' 
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
                required= 'required' 
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
                required= 'required' 
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
                type="password" 
                name="confirmPassword" 
                id="confirmPassword" 
                required= 'required' 
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
                <button type='submit' className='my-btn'>Create account</button>
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
  )
}

export default SignUp