import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavItem, MenuItem, NavDropdown, Nav as NAVT } from 'react-bootstrap'
class Nav extends Component {

  render() {
    return (
      <Navbar collapseOnSelect className={this.props.classparam}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Repollo.net</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
 
          <NAVT pullRight>
                <li><Link to="/post/all">Read all</Link></li>
                <li><Link to="/post/tips">Tips</Link></li>
                <li><Link to="/post/didyouknow">Did you know?</Link></li>
                <li><Link to="/post/recipe">Recipes</Link></li>
                <li><Link to="/post/information">New features</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/donate">Donate</Link></li>
                <li><Link to="/subscribe">Subscribe</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
          </NAVT>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Nav;