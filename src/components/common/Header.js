import React from 'react';
import Link from "react-router-dom/es/Link";

const Header = () => {
    return (
        <nav>
            <Link to="/">Home Page</Link>
            {" | "}
            <Link to="about">About us</Link>
            {" | "}
            <Link to="courses">Courses</Link>
        </nav>
    );
};

export default Header;