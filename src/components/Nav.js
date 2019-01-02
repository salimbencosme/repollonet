import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavItem, MenuItem, NavDropdown, Nav as NAVT } from 'react-bootstrap'
import { manageLanguage,closeMenuAfterCliked } from '../common/Utils';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: 'english'
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.language });
  }

  componentDidMount() {
    this.setState({ language: this.props.language });
  }

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
            <li><Link onClick={closeMenuAfterCliked} to="/">{manageLanguage(this.state.language, 'Inicio', 'Home')}</Link></li>
            <li><Link onClick={closeMenuAfterCliked} to="/post/all">{manageLanguage(this.state.language, 'Ver todos', 'Read all')}</Link></li>
            <li><Link onClick={closeMenuAfterCliked} to="/post/tips">{manageLanguage(this.state.language, 'Consejos', 'Tips')}</Link></li>
            <li><Link onClick={closeMenuAfterCliked} to="/post/didyouknow">{manageLanguage(this.state.language, 'Sabias que?', 'Did you know?')}</Link></li>
            <li><Link onClick={closeMenuAfterCliked} to="/post/recipe">{manageLanguage(this.state.language, 'Recetas', 'Recipes')}</Link></li>
            <li><Link onClick={closeMenuAfterCliked} to="/post/information">{manageLanguage(this.state.language, 'Nuevas funcionalidades', 'New features')}</Link></li>
            <li><Link onClick={closeMenuAfterCliked} to="/about">{manageLanguage(this.state.language, 'Nosostros', 'About us')}</Link></li>
            <li><Link onClick={closeMenuAfterCliked} to="/donate">{manageLanguage(this.state.language, 'Donar', 'Donate')}</Link></li>
            <li><Link onClick={closeMenuAfterCliked} to="/subscribe">{manageLanguage(this.state.language, 'Suscribirme', 'Subscribe')}</Link></li>
            <li><Link onClick={closeMenuAfterCliked} to="/contact">{manageLanguage(this.state.language, 'Contáctenos', 'Contact us')}</Link></li>
          </NAVT>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Nav;