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
        <Link to="/post/all">
        <img className="img-welcome" src="https://pulmonaryfibrosisnews.com/forums/wp-content/uploads/2018/06/welcome.jpg" />
        </Link>
      </div>
    );
  }
}
export default App;
