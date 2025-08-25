import "./Login.css"
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Login = () => {
  return (
    <div className='login-container'>
        <h2>Login</h2>
        <form className='login-form'>
          <input type="email" placeholder='Email' required />
          <div className="password-container">
            <input type="password" placeholder='Senha' />
            <a href="#" className="forgot-link">Esqueceu a senha?</a>
          </div>
          <button type='submit'>Entrar</button>
        </form>

        <div className="divider">
          <span>ou</span>
        </div>

        <div className="social-login">
          <button className="btn-login email">
            <MdEmail className="email-icon"/> <span>E-MAIL</span>
          </button>
          <button className="btn-login google">
            <FaGoogle /> <span>GOOGLE</span>
          </button>
          <button className="btn-login facebook">
            <FaFacebookF /> <span>FACEBOOK</span>
          </button>
        </div>

        <p className="terms">
          Ao entrar, você concorda com os nossos <a href="#">Termos</a> e <a href="#">Política de Privacidade</a>.
        </p>
    </div>
  )
}

export default Login;