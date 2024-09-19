import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => (
  <div id="myNav" className="overlay">
    <a className="closebtn" onClick={() => props.closeNav()}>&times;</a>
    <div className="overlay-content">
      <Link to="/" onClick={() => props.closeNav()}>Home</Link>
      <Link to="/birthday" onClick={() => props.closeNav()}>Birthday Cakes</Link>
      <a href="">Black Forest Cake</a>
      <a href="">Butter Cake</a>
      <a href="">Sponge Cake</a>
    </div>
  </div>
);

export default Navigation;