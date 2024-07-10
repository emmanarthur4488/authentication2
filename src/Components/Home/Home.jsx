import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  let navigate = useNavigate()

  function handleLogout(){
    sessionStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div>
      <h1>Welcome to Supabase Authentication</h1>
      <div>
        <button onClick={handleLogout} className="btn">Logout</button>
      </div>
    </div>
  )
}

export default Home
