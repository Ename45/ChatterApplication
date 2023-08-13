import React from 'react'

const FormButton = (props) => {
  const { label, image, imageName, onClick } = props
  return (
    <div>
      <div className="create-acc-btn">
        <button onClick={onClick} type='submit' className='my-btn'>
          <img src={image} alt={imageName} />
          {label}
        </button>
      </div>
    </div>
  )
}

export default FormButton