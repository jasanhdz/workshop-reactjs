import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutRequest } from '../actions';
import '../assets/styles/components/header.scss';
import Logo from '../assets/static/logo-platzi-video-BW2.png';
import LogoNetflix from '../assets/static/logo_netflix.png';
import userIcon from '../assets/static/user-icon.png';
import gravatar from '../utils/gravatar';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = e => {
    props.logoutRequest({});
  }
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={Logo} alt="logo" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email} />
              :
              <img src={userIcon} alt="profile" />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser ?
              <li><Link to="/">{user.name}</Link></li>
              : null 
          }
          {
            hasUser ? 
              <li><a href="#logout" onClick={handleLogout}>Cerrar sesión</a></li>
              :
              <li><Link to="/login">Iniciar sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  );
} 

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = {
  logoutRequest,
}

Header.propTypes = {
  user: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);