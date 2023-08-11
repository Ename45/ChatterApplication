import { React, useState, useNavigate, AuthPages, Axios, AuthHeader, FormButton, InputFields, openEye, eyeClosed, googleLogo, linkedinLogo } from './index.jsx'

const SignUp = () => {

  const initialValue = {
    firstName: "",
    lastName: "",
    profession: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const [data, setData] = useState (initialValue);

  const handleChange = async (e) => {
    e.preventDefault ();
    setData (prevState => ({
        ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const navigate = useNavigate()  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      profession: data.profession,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    }

    try {
      const response = await Axios.post('http://localhost:3000/api/1.0/users/signUp', userData);

      console.log("this is in sign up component --->{}", response.headers);

      if (response.status === 200) {
        console.log(response.data);
      }
      navigate(`/codeConfirmation/${data.email}`);
    } catch (error) {
      console.log(error.response.data);
    }
  };


  
  return (
    <div className='signUp-main-container'>
    <AuthPages/>
    <div className="form-container">
      <AuthHeader register= 'REGISTER' login="LOGIN" header="Register as a Writer/Reader" />
      <form onSubmit={handleSubmit}>
        <div className="first-last-name">       
          <div className='half-box'>
            <InputFields 
            label="First name"
            type="text" 
            name="first" 
            id="firstName"
            required= 'required' 
            placeholder='John'
            autoComplete='on'
            value={data.firstName}
            onChange={handleChange}
            />
          </div>
          <div className='half-box'>
            <InputFields
            label='Last name' 
            type="text" 
            name="lastName "
            id="lastName" 
            required= 'required' 
            placeholder='Doe' 
            value={data.lastName}
            onChange={handleChange}
            autoComplete='on'
            />
          </div>
        </div>
        <div className="input-box">              
          <label htmlFor="profession" className='profession'>You are joining as?</label>
          <div className="profession-options">
            <select 
              label='You are joining as?' name="profession" 
              id="profession" 
              required= 'required' 
              value={data.profession}
              onChange={handleChange} 
            >
              <option value="writer">Writer</option>
              <option value="doctor">Doctor</option>
              <option value="lawyer">Lawyer</option>
              <option value="Software Engineer">Software Engineer</option>
            </select>
          </div>
        </div>
        <div className="input-box">
          <InputFields
          label='Email'
          type="email" 
          name="email" 
          id="email" 
          required= 'required' 
          placeholder='johndoe@gmail.com' 
          autoComplete='on'
          value={data.email}
          onChange={handleChange}
          />
        </div>
        <div className="input-box">
            <InputFields 
            label='Password'
            type="password" 
            name="password" 
            id="password" 
            required= 'required' 
            placeholder='***********'
            autoComplete='on'
            value={data.password}
            onChange={handleChange}
            image={openEye}
            imageName="open eye"
            />
        </div>
        <div className="input-box">
          <InputFields 
          label="Confirm password"
          type="password" 
          name="confirmPassword" 
          id="confirmPassword" 
          required= 'required' 
          placeholder='***********'
          autoComplete='on'
          value={data.confirmPassword}
          onChange={handleChange}
          image={eyeClosed}
          imageName="closed eye"
          />
        </div>
        <div className="create-acc-btn">
          <FormButton label="Create account"/>
        </div>
      </form>
        <div className="google-sign-up-btn">
          <FormButton label="Sign up with google" target='blank'className="link-google" image={googleLogo} imageName="Google Logo" />
        </div>
        <div className="linkedin-sign-up-btn">
          <FormButton label="Sign up with Linkedin" target='blank'className="link-linkedIn" image={linkedinLogo} imageName="LinkedIn Logo" />
        </div>
      </div>
    </div>
  )
}

export default SignUp