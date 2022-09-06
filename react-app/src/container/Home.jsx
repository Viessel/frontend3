import { Link } from 'react-router-dom'
import React from 'react';
const Home = () => {
    return (
        <>
            <ul> 
                <li><Link to={"/"}>🏠HOME🏠</Link></li>
                <li><Link to={"/perros"}>🐕Guaguaus🐕</Link></li>
                <li><Link to={"/gatos"}>😺Miaumiaus😺</Link></li>
            </ul>
            <hr />
            <h1>🌠 TENEMOS 🌠</h1>
        </>
    );
}

export default Home;