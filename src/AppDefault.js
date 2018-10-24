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
        <Link to="/">
        <img className="img-welcome" src="http://www.zinavo-demo.in/wrong-url.jpg" />
        </Link>
      </div>
    );
  }
}
export default AppDefault;
