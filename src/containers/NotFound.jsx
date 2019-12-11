import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <React.Fragment>
    <div className="error__container">
      <h1 className="error__container--title">404</h1>
      <h3 className="error__container--description">Página no Encontrada</h3>
    </div>    
  </React.Fragment>

);

export default NotFound;