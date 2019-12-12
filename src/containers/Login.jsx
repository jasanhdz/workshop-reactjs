import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions/index';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';
import Header from '../components/Header';


const Login = props => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  }

  return (
    <>
    <Header isLogin />
    <section className="login">
      <div className="login__container">
        <h2 tabIndex="0">Inicia Sesión</h2>
        <form
          onSubmit={handleSubmit}
          className="login__container--form"
          method="post"
        >
          <input
            aria-label="Correo"
            className="input"
            type="email" name="email"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            aria-label="Contraseña"
            className="input"
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button
            className="button"
            type="submit">
              Iniciar Sesión
          </button>
          <div className="login__container--remember-me">
            <label >
              <input type="checkbox" name="box1" value="checkbox" />Recuerdame
          </label>
            <Link to="/">Olvide mi Contraseña</Link>
          </div>
        </form>
        <section className="social-media">
          <div className="media__img"><img width="40px" src={googleIcon} alt="Google" />Inicia sesión con Google</div>
          <div className="media__img"><img width="40px" src={twitterIcon} alt="Twitter" />Inicia sesión con Twitter</div>
        </section>
        <p className="login__container--register">
          No tienes niguna cuenta. <Link to="/">Regístrate</Link>
        </p>
      </div>
    </section>
    </>
  );
}

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);