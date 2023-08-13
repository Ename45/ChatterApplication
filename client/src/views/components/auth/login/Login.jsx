import { React, useState, useNavigate, AuthPages, Axios, AuthHeader, FormButton, InputFields, openEye, loginUrl } from './index.jsx'

const Login = () => {
  const initialValue = {
    email: "",
    password: "",
  }

  const [data, setData] = useState (initialValue);

  const handleChange = async(e) => {
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
      email: data.email,
      password: data.password,
    }

    try {
      const response = await Axios.post(loginUrl, userData);

      if (response.status === 200) {
        console.log(response.data);
      }
      navigate('/landingPage');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="login-main-container">
      <AuthPages/>
        <div className="form-container">
      <AuthHeader register= 'REGISTER' login="LOGIN" header="Register as a Writer/Reader" />
      <form onSubmit={handleSubmit}>
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
        <div className="create-acc-btn">
          <FormButton label="Login"/>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login