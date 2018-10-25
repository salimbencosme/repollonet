import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './containers/Main';
import Post from './components/Post';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostDetails from '../src/components/PostDetails';
import AppDefault from './AppDefault';
import About from './components/About';
import Contact from './components/Contact';
import Subscribe from './components/Subscribe';
import './resources/css/main.css';
ReactDOM.render(
    <Router>
        <Main>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/post" component={Post} />
            <Route path="/details/:typecontent" component={PostDetails} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/subscribe" component={Subscribe} />
            <Route name="wrong-url" component={AppDefault} />
        </Switch>
        </Main>
    </Router>


    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
