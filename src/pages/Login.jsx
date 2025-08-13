import "./Authentication.css";

const Login = () => {
  return (
    <div className='authentication-container'>
        <h2>Login</h2>
        <form className='authentication-form'>
          <input type="email" placeholder='Email' required />
          <input type="password" placeholder='Senha' />
          <button type='submit'>Entrar</button>
        </form>
    </div>
  )
}

export default Login;