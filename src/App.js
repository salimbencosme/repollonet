import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from '../src/containers/Main';
import PostDetails from './components/PostDetails';
import { Link } from "react-router-dom";


class App extends Component {

  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <h1>This is the main page to welcome the app and tell the people  what the app does.</h1>
        <Link to="/post">Post</Link>
      </div>
    );
  }
}
export default App;
