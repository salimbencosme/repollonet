import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";


class AppDefault extends Component {

  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <h1>Your enter to a wrong url.</h1>
        <Link to="/">Go to the main</Link>
      </div>
    );
  }
}
export default AppDefault;
