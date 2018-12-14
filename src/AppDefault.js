import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import worngImgEN from '../src/resources/img/wrongurl-en.png';
import worngImgES from '../src/resources/img/wrongurl-es.png';
import { getSelectedLanguage } from './common/Utils';
import themeHandler from './common/ThemeHandler';

class AppDefault extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: 'english'
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: getSelectedLanguage() });
  }

  componentDidMount() {
    themeHandler("default");
    this.setState({ language: getSelectedLanguage() });
  }

  render() {
    return (
      <div class="div-container-scroll">

        <Link to="/">
          <img className="img-welcome" src={this.state.language === 'english' ? worngImgEN : worngImgES} />
        </Link>
        <br />

        <br />
        <br />

        <br />
        <br />

        <br />
        <br />
      </div>
    );
  }
}
export default AppDefault;
