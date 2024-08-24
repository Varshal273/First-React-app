import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} ${props.mode==='light'?'border-3 border-bottom':''}`} style={props.theme}>
    {/* <nav className={`navbar navbar-expand-lg ${props.mode==='dark'?'':'bg-'+props.mode} ${props.mode==='light'?'border-3 border-bottom':''} navbar-${props.mode}`} style={{backgroundColor: props.mode==='dark'?'#042743':'#00000000'}}> */}
      <div className="container-fluid" >
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">{props.aboutText}</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button type="button" onClick={props.bluetheme} className="btn btn-info mx-3" style={{background: '#042743ef', color: 'lightblue',visibility: props.mode==='dark'?'visible':'hidden',opacity: props.mode==='dark'?'1':'0'}}>Blue Mode</button>
            <div className={`form-check m-auto form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="changeTheme"/>
              <label className="form-check-label" htmlFor="changeTheme">Enable Dark Mode</label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};
Navbar.defaultProps = {
    title: 'Set Title Here',
    aboutText: 'About'
};