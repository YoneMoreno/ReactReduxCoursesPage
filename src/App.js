import React, {Component} from 'react';
import './styles/App.css';
import Main from './Main';
import Header from "./components/common/Header";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    };
}


export default App;
