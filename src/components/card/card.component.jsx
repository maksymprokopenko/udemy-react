import React from 'react';

// styles
import './card.styles.css';

export const Card = (props) => {
    return (
        <div className="card-container">
            <img src={ `https://robohash.org/${props.monster.id}.png?set=set1` } alt="robot" />
            <h1>{ props.monster.name }</h1>
            <p>{ props.monster.email }</p>
        </div>
    );
};
