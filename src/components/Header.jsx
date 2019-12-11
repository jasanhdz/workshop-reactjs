import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/header.scss';
import Logo from '../assets/static/logo-platzi-video-BW2.png';
import LogoNetflix from '../assets/static/logo_netflix.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className="header">
    <Link to="/">
      <img  className="header__img" src={Logo} alt="logo" />
    </Link>
  <div className="header__menu">
    <div className="header__menu--profile">
      <img src={userIcon} alt="profile" />
      <p>Perfil</p>
    </div>
    <ul>
      <li><Link to="/">Cuenta</Link></li>
      <li><Link to="/login">Iniciar Sesión</Link></li>
    </ul>
  </div>
</header>
);

export default Header;