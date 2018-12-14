import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './containers/Main';
import Post from './components/Post';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch,HashRouter } from "react-router-dom";
import PostDetails from '../src/components/PostDetails';
import AppDefault from './AppDefault';
import About from './components/About';
import Contact from './components/Contact';
import Subscribe from './components/Subscribe';
import Donate from './components/Donate';
import DonateThanks from './components/DonateThanks';
import DonateWrong from './components/DonateWrong';
import './resources/css/main.css';
ReactDOM.render(


    <HashRouter  basename={process.env.PUBLIC_URL}>
        <Main>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/post/:typecontent" component={Post} />
                <Route path="/details/:typecontent/:id" component={PostDetails} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/subscribe" component={Subscribe} />
                <Route path="/donate" component={Donate} />
                <Route path="/donatethanks" component={DonateThanks} />
                <Route path="/donatewrong" component={DonateWrong} />
                <Route name="wrong-url" component={AppDefault} />
            </Switch>
        </Main>
    </HashRouter>


    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
