import React, { useState } from "react";
import "./Register.css"
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Bem vindo!</h2>
        <p>Por favor selecione um provedor para criar sua conta</p>
        
        <div className="social-register">
          <button className="social-btn email">
            <MdEmail />
          </button>
          <button className="social-btn google">
            <FaGoogle />
          </button>
          <button className="social-btn facebook">
            <FaFacebookF />
          </button>
        </div>

        <div className="divider">
          <span>ou</span>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <input type="text" name="" placeholder="nome completo" 
          value={form.name} onChange={handleChange} required/>
        </div>

        <div className="form-group">
          <input type="email" name="email" placeholder="E-mail" value={form.email} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <input type="password" name="password" placeholder="criar uma senha" value={form.password} onChange={handleChange} required />
        </div>

        <button type="submit" className="register-btn">
          Registrar
        </button>
        </form>

        <p className="redirect">
          já possui conta? <a href="/login">Faça login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
