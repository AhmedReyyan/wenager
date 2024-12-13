import React from 'react'
import { Link } from 'react-router'

const Signup = () => {
  return (
    <div>
      <div className='inputs'>
        <h1>Login</h1>
        <div>
          <h3>username</h3>
           <input type="text" />
        </div>
        <div>
          <h3>password</h3>
           <input type="password" />
        </div>
       

       </div>
       <div>
        Already have Account <Link to='/entry'>Signin</Link>
       </div>
    </div>
  )
}

export default Signup
