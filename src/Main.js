import React from "react";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import CoursesPage from "./components/course/CoursesPage";


const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/courses" component={CoursesPage}/>
        </Switch>
    );
};

export default Main;