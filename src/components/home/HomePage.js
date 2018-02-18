import React from 'react';
import Link from "react-router-dom/es/Link";

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, Redux Es6 App</p>
                <Link to="about" className="btn btn-primary btn-lg">Lesrn more!</Link>
            </div>
        );
    }
}

export default HomePage;