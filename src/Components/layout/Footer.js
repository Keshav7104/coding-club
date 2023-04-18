import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-distributed">

      <div className="footer-left">

        <h3>Coding<span>Pundits</span></h3>

        <p className="footer-links">
          <Link to='/' className="link-1">Home </Link>

          <Link to='/News'>News</Link>

          <Link to='/Events'>Events </Link>

          <Link to='/Register'>Register</Link>

          <a href="https://discord.gg/7YJrqYE3">Discord </a>

          <a href="https://github.com/Keshav7104/coding-club/issues">Report a bug</a>
        </p>

        <p className="footer-company-name">Coding Pundits © 2023</p>
      </div>

      <div className="footer-center">

        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>Jote, District:Papum Pare
          </span> Arunachal Pradesh,<span>India - 791113</span> </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p> +91 0360-2954549</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:nitapadmin@nitap.ac.in">nitapadmin@nitap.ac.in</a></p>
        </div>

      </div>

      <div className="footer-right">

        <p className="footer-company-about">
          <span>About the Club</span>
          Coding Pundits aims to establish a coding culture on campus, reaching every student passionate about coding.<br></br> Here you'll be able to collaborate with others, learn from them and indeed teach them things you know.
        </p>
      </div>
    </footer>
  )
}

