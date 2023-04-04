import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home, About, Contact, Login } from './pages'
import { Provider } from 'react-redux'
import { Store } from './store/store'

function App() {
 
  return (
    <div className="App">
     <Provider store={Store}>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
     </Routes>
     </Provider>
    </div>
  )
}

export default App
