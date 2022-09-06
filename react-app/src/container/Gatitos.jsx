import { Link } from 'react-router-dom'
import React from 'react';
const Gatitos = () => {
    return (
        <>
            <ul>
                <li><Link to={"/"}>🏠HOME🏠</Link></li>
                <li><Link to={"/perros"}>🐕Guaguaus🐕</Link></li>
                <li><Link to={"/gatos"}>😺Miaumiaus😺</Link></li>
            </ul>
            <hr />
            <h2>🐱THIS IS GATITOS🐱</h2>
        </>
    );
}

export default Gatitos;