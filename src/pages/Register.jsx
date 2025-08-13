import React from 'react'
import "./authentication.css"
const Register = () => {
  return (
    <div className='authentication-container'>
        <h2>Registrar</h2>
        <form className='authentication-form'>
            <input type="text" placeholder='Nome' required/>
            <input type="email" placeholder='Email' required/>
            <input type="password" placeholder='Senha' required/>
            <button>Registrar</button>
        </form>
    </div>
  )
}

export default Register;