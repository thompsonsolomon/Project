import React from 'react'
import logo from '../components/image/Netflix-Logo.svg'
import '../components/styles/style.css'
// import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default function HeaderCon() {
  return (
    <div className='headercontainer'>
    <div className='navcon'>
      <Link to='/' className="logo" ><img src={logo} alt="" className="logo" /></Link>
      <button className="Buttonlink"> 
        <Link to='/Sign_in'>Sign In</Link>
      </button>
    </div>
  </div>
  )
}
