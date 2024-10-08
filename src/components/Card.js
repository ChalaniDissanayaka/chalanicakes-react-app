import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) =>  (
  <div className={props.card.animation}>
    <Link to={`/product/${props.card.id}`}>
      <div className="front">
        <img src={`/images/${props.card.id}.jpg`} alt="Avatar" className="card-image" />
        <div className="container">
          <h3 className="title">{props.card.title}</h3>
          <h3><span className="price"> ${props.card.price}</span></h3> 
          <p>{props.card.description}</p>
          <button>BUY NOW</button>
        </div>
      </div>
    </Link>
  </div>
);

export default Card;
