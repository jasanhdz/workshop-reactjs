import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';

const Register = () => (
  <section className="login">
    <div className="login__container">
      <h2>Registrarse</h2>
      <form action="" className="login__container--form">
        <input className="input" type="text" name="" placeholder="Nombres" />
        <input className="input" type="email" name="" placeholder="Correo" />
        <input className="input" type="password" name="" placeholder="Contraseña" />
        <button className="button">Registrarse</button>
      </form>
      <p class="login__container--register center">
        <Link to="/">Iniciar sesión</Link>
      </p>
    </div>
  </section>
);

export default Register;