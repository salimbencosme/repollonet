import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Nav extends Component {

  render() {
    return (
      <nav className={'navbar navbar-default navbar-fixed-top '+this.props.classparam}>
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="./">Repollo.net</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
      
          <ul className="nav navbar-nav navbar-right">
          <li><Link to="/post/all">Read all</Link></li>
            <li><Link to="/post/tips">Tips</Link></li>
            <li><Link to="/post/didyouknow">Did you know?</Link></li>
            <li><Link to="/post/recipe">Recipes</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/subscribe">Subscribe</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li className="active"><a href="./">Welcome! <span className="sr-only">(current)</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Nav;