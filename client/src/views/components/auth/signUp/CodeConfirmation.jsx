import React, { useRef, useState } from 'react';
import '../../../../styles/components/auth/signUp/codeConfirmation.css'
import FormButton from '../../reuseables/FormButton';
import InputFields from '../../reuseables/InputFields';
import AuthPages from '../../reuseables/AuthPages';
import backArrow from '../../../../assets/images/svg/backArrow.svg'
import { Link } from 'react-router-dom';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CodeConfirmation = () => {
  const initialValue = {
    codeOne: "",
    codeTwo: "",
    codeThree: "",
    codeFour: "",
  }

  const [data, setData] = useState (initialValue);
  
  const handleChange = async(e) => {
    e.preventDefault ();
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setData((prevState) => ({
      ...prevState,
      [inputName]: inputValue,
    }));

    if (inputValue.length >= 1) {
      switch (inputName) {
        case 'codeOne':
          codeTwoRef.current.focus();
          break;
        case 'codeTwo':
          codeThreeRef.current.focus();
          break;
        case 'codeThree':
          codeFourRef.current.focus();
          break;
          default:
            break;
          }
    }
  };
  const codeTwoRef = useRef(null);
  const codeThreeRef = useRef(null);
  const codeFourRef = useRef(null);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = data.codeOne + data.codeTwo + data.codeThree + data.codeFour
    
    try {
      const response = await Axios.post('http://localhost:5000/api/v1/email_verification/verify', {email, otp});

      if (response.status === 200) {
        console.log(response.data);
      }

      navigate('/login');

    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleClick = (e)=>{
    e.preventDefault()
    navigate('/signUp')    
  }

  return (
    <div className="main-container">
      <div className="grid-container">
        <AuthPages/>
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
        <div className="input-box">
          <InputFields
          type="codeOne" 
          name="codeOne" 
          required= 'required'  
          value={data.codeOne}
          onChange={handleChange}
          focusRef={codeTwoRef}
          />
        </div>
        <div className="input-box">
          <InputFields
          type="codeTwo" 
          name="codeTwo" 
          required= 'required'  
          value={data.codeTwo}
          onChange={handleChange}
          focusRef={codeThreeRef}
          />
        </div>
        <div className="input-box">
          <InputFields
          type="codeThree" 
          name="codeThree" 
          required= 'required'  
          value={data.codeThree}
          onChange={handleChange}
          focusRef={codeFourRef}
          />
        </div>
        <div className="input-box">
          <InputFields
          type="codeFour" 
          name="codeFour" 
          required= 'required'  
          value={data.codeFour}
          onChange={handleChange}
          />
        </div>
        </div>
        <Link to="/login" className="create-acc-btn">
          <FormButton label="Create account"/>
        </Link>
      </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeConfirmation