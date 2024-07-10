import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Login from './Components/Login/Login'
import SignUp from './Components/SiginUp/SignUp'
import Home from './Components/Home/Home'
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';

function App() {
 
  const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  },[])

  return (
    <>
     <BrowserRouter>
        <Navbar/>

        <Routes>
          {token?<Route path='/signup' element={<SignUp/>}/>:""}
          <Route path='/' element={<Home token={token}/>}/>
          <Route path='/login' element={<Login setToken={setToken}/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
