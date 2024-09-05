import React from "react";
import './Header.css';
import logo from '../../assets/ipl-dugout-logo.png';

const Header = () => {
  return (
    <div className="navbar">
        <a href="/"><img src={logo} className="navbar-logo"></img></a>
        <div className="navbar-container">
            <a href="/teams" className="navbar-item">Compare</a>
            <a href="/players" className="navbar-item">Team</a>
            <a href="/matches" className="navbar-item">Ground</a>
        </div>
    </div>
  );
}

export default Header;