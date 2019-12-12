import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import '../assets/styles/components/Login.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  } 

  const handleSubmit = e => {
    e.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  }
  return (
    <section className="login">
      <div className="login__container">
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit} className="login__container--form">
          <input
            className="input" type="text"
            name="name" placeholder="Nombres"
            onChange={handleInput}
          />
          <input
            className="input" type="email"
            name="email" placeholder="Correo"
            onChange={handleInput}
          />
          <input
            className="input" type="password"
            name="password" placeholder="Contraseña"
            onChange={handleInput}
          />
          <button className="button">Registrarse</button>
        </form>
        <p className="login__container--register center">
          <Link to="/">Iniciar sesión</Link>
        </p>
      </div>
    </section>
  );
}

const mapDispatchToProps = {
  registerRequest,
}

export default connect(null, mapDispatchToProps)(Register);