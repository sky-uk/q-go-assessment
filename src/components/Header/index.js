import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import logo from './logo.png';
import './styles.css';

function Header() {
  return (
    <div className="header-title">
      <img src={logo} className="header-logo" alt="logo" />
      <h2>
        <FormattedMessage {...messages.livePlayback} />
      </h2>
    </div>
  );
}

export default Header;
