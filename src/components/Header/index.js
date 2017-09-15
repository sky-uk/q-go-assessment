import React from 'react';
import logo from './logo.png';
import './styles.css';

const Header = () => {
  return (
    <div className="header-title">
      <img src={logo} className="header-logo" alt="logo" />
      <h2>QGo Desktop React Assessment</h2>
    </div>
  );
};

export default Header;
