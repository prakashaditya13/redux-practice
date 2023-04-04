import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p>Welcome To Redux Toolkit Master Class</p>
      <ul>
        <li><Link to='/aboutus'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </div>
  )
}

export default Home