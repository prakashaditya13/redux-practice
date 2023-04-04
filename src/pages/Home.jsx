import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'


const Home = () => {
  const username = useSelector((state) => state.User.value.username)
  return (
    <div>
      <p>Welcome To Redux Toolkit Master Class - {username}</p>
      <ul>
        <li><Link to='/aboutus'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </div>
  )
}

export default Home