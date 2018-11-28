import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavItem, MenuItem, NavDropdown, Nav as NAVT } from 'react-bootstrap'
import  {manageLanguage} from '../common/Utils';

class Nav extends Component {

  constructor(props){
    super(props);
    this.state={
      language:'english'
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({language:nextProps.language});
  }

  componentDidMount(){
    this.setState({language:this.props.language});
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
                <li><Link to="/post/all">{manageLanguage(this.state.language,'Ver todos','Read all')}</Link></li>
                <li><Link to="/post/tips">{manageLanguage(this.state.language,'Consejos','Tips')}</Link></li>
                <li><Link to="/post/didyouknow">{manageLanguage(this.state.language,'Sabias que?','Did you know?')}</Link></li>
                <li><Link to="/post/recipe">{manageLanguage(this.state.language,'Recetas','Recipes')}</Link></li>
                <li><Link to="/post/information">{manageLanguage(this.state.language,'Nuevas funcionalidades','New features')}</Link></li>
                <li><Link to="/about">{manageLanguage(this.state.language,'Nosostros','About us')}</Link></li>
                <li><Link to="/donate">{manageLanguage(this.state.language,'Donar','Donate')}</Link></li>
                <li><Link to="/subscribe">{manageLanguage(this.state.language,'Suscribirme','Subscribe')}</Link></li>
                <li><Link to="/contact">{manageLanguage(this.state.language,'Contáctenos','Contact us')}</Link></li>
          </NAVT>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Nav;