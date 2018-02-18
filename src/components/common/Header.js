import React from 'react';
import Link from "react-router-dom/es/Link";

const Header = () => {
    return (
        <nav>
            <Link to="/" activeClassName="active">Home Page</Link>
            {" | "}
            <Link to="about" activeClassName="active">About us</Link>
            {" | "}
            <Link to="courses" activeClassName="active">Courses</Link>
        </nav>
    );
};

export default Header;