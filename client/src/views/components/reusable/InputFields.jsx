import React from 'react'

const InputFields = (props) => {

  const { label, type, name, id, required, placeholder, image, imageName, value, onChange, focusRef} = props
  
  return (
    <div>
      <label htmlFor="">{label}</label>
      <div className="confirm-password-input">
        <input 
        type={type} 
        name={name}
        id={id}
        required={required}
        placeholder={placeholder}
        autoComplete='on'
        value={value}
        onChange={onChange}
        focusRef={focusRef}
        />
        <img src={image} alt={imageName} />
      </div>      
    </div>
  )
}

export default InputFields