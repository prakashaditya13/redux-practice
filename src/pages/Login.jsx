import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { login, logout } from '../store/store'
import { useDispatch,useSelector } from 'react-redux'

const Login = () => {

  const [newUsername, setNewUsername] = useState("")
  const dispatch = useDispatch()
  const username = useSelector((state) => state.User.value.username)

  return (
    <div>
        <h1>This is Login Page</h1>
        <input onChange={(e) => setNewUsername(e.target.value)} />
        <button onClick={() => {
          dispatch(login({username: newUsername}))
        }}>Submit Login</button>
        <button>Logout</button>
        <Link to='/'>Go to Home</Link>
    </div>
  )
}

export default Login