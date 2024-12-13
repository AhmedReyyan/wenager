import React from 'react'
import './styles/dashboard.css'
const Dashboard = () => {
  return (
    <div className='dashboard'>
        
        
      <div className="sidebar">
        <ul className="list">
            <li className="item">personel info</li>
            <li className="item">accounts</li>
            <li className="item">activity</li>
            <li className="item">logout</li>
        </ul>
      </div>

      <div className="userinfo">
               <div className="profileinfo">
                  <div className="profileimg">
                    <img src="/vite.svg" alt="user img" />
                  </div>
                  <div className="username">
                        <h3 className="accuser">@test_User</h3>
                        <h3 className="realname">Test User</h3>
                  </div>
               </div>
               
        </div>
    </div>
  )
}

export default Dashboard
