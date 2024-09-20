import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using routing for links
import data from '../data/data.json'; // Assuming the data.js file is in the same folder
import './Card.css'; // Assuming you have styles for the card

const Birthday = () => {
    // Filter the cakes with type "Birthday-cake"
    const birthdayCakes = data.filter(cake => cake.type === "Birthday-cake");

    return (
        <div className="card-container">
            {birthdayCakes.map(cake => (
                <div key={cake.id} className={cake.animation}>
                    <Link to={`/product/${cake.id}`}>
                        <div className="front">
                            <img src={`/images/${cake.id}.jpg`} alt={cake.title} className="card-image" />
                            <div className="container">
                                <h3>{cake.title}</h3>
                                <h3><span className="price">${cake.price}</span></h3>
                                <p>{cake.description}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Birthday;