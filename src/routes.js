import * as React from "react";
import App from "./App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Route from 'react-router';
import IndexRoute from 'react-router';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
    </Route>
);
