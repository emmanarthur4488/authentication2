import React, { useState } from 'react'
import {supabase} from '../Client/Clients'
import {Link, useNavigate} from "react-router-dom"
import './login.css'

const Login = ({setToken}) => {
  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '', password: ''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData) => {
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    try {
      const { data, error} = await supabase.auth.signInWithPassword(
        {
          email: formData.email,
          password: formData.password,
        }
      )
      if (error) throw error
      console.log(data)
      setToken(data)
      navigate('/')

    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="login-form">
      <div className="login-heading">LOGIN</div>
      <form onSubmit={handleSubmit}>
        <input
         placeholder="Email"
         name="email"
         onChange={handleChange}
        /> <br/>

        <input
         placeholder="Password"
         name="password"
         type="password"
         onChange={handleChange}
        /> <br/>

        <button type="submit" className="btn">Submit</button>
      </form>
      <h2 className="account">Don't have an Account? <Link to='/signup' className="links">Sign up</Link></h2>
    </div>
  )
}

export default Login
