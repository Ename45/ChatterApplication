import React from 'react'
import { Link } from 'react-router-dom'

const AuthHeader = (props) => {

  const { register, login, header } = props

  return (
    <div>
      <Link to="/signUp" className="regis-log-container">
        <span className="reg">
          <p>{register}</p>
        </span>
        <Link to='/login' className="log">
          <p>{login}</p>
        </Link>            
      </Link>
      <div className="form-header">
        <h2>{header}</h2>
      </div>
    </div>
  )
}

export default AuthHeader