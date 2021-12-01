import React from 'react';

// components
import { Card } from '../card/card.component';

// styles
import './card-list.styles.css';

export const CardListComponent = ({ monsters }) => {
    return (
        <section className="card-list">
            { monsters.map((monster) => {
                return <Card monster={ monster } key={ monster.id }></Card>
            }) }
        </section>
    );
};
