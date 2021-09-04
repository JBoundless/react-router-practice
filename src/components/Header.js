import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      Header
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header;