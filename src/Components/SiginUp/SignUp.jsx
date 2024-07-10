import React, { useState } from 'react'
import {Link} from "react-router-dom"
import './signup.css'

const SignUp = () => {

  const [formData, setFormData] = useState({
    fullName: '', email: '', password: ''
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
      const { data, error} = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullName,
            }
          }
        }
      )
      alert('check your email for verification link')

    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className="signup-form">
      <div className="sign-heading">Create An Account</div>
      <form onSubmit={handleSubmit}>
        <input
         placeholder="Fullname"
         name="fullName"
         onChange={handleChange}
        /> <br/>

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
      <h2 className="account">Already have an Accout? <Link to='/login' className="links">Login</Link></h2>
    </div>
  )
}

export default SignUp
