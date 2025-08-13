import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='header'>
        <div className='header-container'>
            <div className='logo-area'>
                <a href="./"><img src="/images/logo.png" alt="logo da agência" /> </a>  
                <span className="logo-text"><a href="./">Thynk Travel</a></span> 
            </div>
            
            <div className="button-group">
              <Link to="/login">
                <button className="login-button">Login</button>
              </Link>
              <Link to="/register">
                <button className="register-button">Registrar</button>
              </Link>
            </div>
        </div>
    </header>
  )
}

export default Header