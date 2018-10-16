import React, { Component } from 'react';
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
          <li><a href="./post">Read all</a></li>
            <li><a href="./post">Tips</a></li>
            <li><a href="./post">Did you know?</a></li>
            <li><a href="./post">Recipes</a></li>
            <li><a href="./about">About us</a></li>
            <li><a href="./post">Subscribe</a></li>
            <li><a href="./contact">Contact us</a></li>
            <li className="active"><a href="./">Welcome! <span className="sr-only">(current)</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }


}


export default Nav;