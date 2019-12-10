import React from 'react';
import '../assets/styles/components/header.scss';
import Logo from '../assets/static/logo-platzi-video-BW2.png';
import LogoNetflix from '../assets/static/logo_netflix.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className="header">
    <img  className="header__img" src={Logo} alt="logo" />
  <div className="header__menu">
    <div className="header__menu--profile">
      <img src={userIcon} alt="profile" />
      <p>Perfil</p>
    </div>
    <ul>
      <li><a href="/">Cuenta</a></li>
      <li><a href="/">Cerrar Sesión</a></li>
    </ul>
  </div>
</header>
);

export default Header;