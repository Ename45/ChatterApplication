import React, { useState } from 'react';
import '../../../../styles/components/auth/signUp/codeConfirmation.css'
import backArrow from '../../../../assets/images/svg/backArrow.svg'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CodeConfirmation = () => {
  const [codeOne, setCodeOne] = useState('');
  const [codeTwo, setCodeTwo] = useState('');
  const [codeThree, setCodeThree] = useState('')
  const [codeFour, setCodeFour] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/codeConfirmation', {codeOne, codeTwo, codeThree, codeFour})
    .then(result => {console.log(result)
    navigate('/login')    
    })
    .catch(err => console.log(err))
  }

  const handleClick = (e)=>{
    e.preventDefault()
    navigate('/signUp')    
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
          <div className="align-container">
            <div className="back-logo">
            <img onClick={handleClick} src={backArrow} alt="back arrow" />
            <p>Back</p>
          </div>
          <div className="form-header">
            <h3>Enter confirmation code</h3>
            <p>We emailed you a code. Please input the code here for account verification</p>
          </div>
          <form onSubmit={handleSubmit} action="">
            <div className="code-input-box">
              <div className="box1">
                <input onChange={(e) =>setCodeOne(e.target.value)} value={codeOne} type="text" name="" id="" />
              </div>
              <div className="box1">
                <input onChange={(e) => setCodeTwo(e.target.value)} value={codeTwo}  type="text" name="" id="" />
              </div>
              <div className="box1">
                <input onChange={(e) => setCodeThree(e.target.value)} value={codeThree}  type="text" name="" id="" />
              </div>
              <div className="box1">
                <input onChange={(e) => setCodeFour(e.target.value)} value={codeFour}  type="text" name="" id="" />
              </div>
            </div>
            <Link to="/login" className="create-acc-btn">
              <button className='my-btn'>Create account</button>
            </Link>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeConfirmation