import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className='enterform'>
      <h1>Login</h1>
       <div className='inputs'>
        
        <div>
          <h3>username</h3>
           <input type="text" />
        </div>
        <div>
          <h3>password</h3>
           <input type="password" />
        </div>
          <button>Login</button>

       </div>
      <Link to="signup">signup</Link>
    </div>
  )
}

export default Login
