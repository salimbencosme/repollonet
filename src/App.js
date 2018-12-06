import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from '../src/containers/Main';
import PostDetails from './components/PostDetails';
import { Link } from "react-router-dom";
import welcome from './resources/img/repollo-welcome.png';
import bienvenido from './resources/img/repollo-bienvenido.png';
import tips from './resources/img/tips.png';
import diduknow from './resources/img/questions.png';
import recipes from './resources/img/recipes.png';
import features from './resources/img/feature.png';
import mark from './resources/img/mark.png';

import {manageLanguage,getSelectedLanguage} from './common/Utils';
class App extends Component {

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
    this.setState({ language: getSelectedLanguage() });
  }


  render() {
    return (
      <div>
        <Link to="/post/all">
          <img className="img-welcome" src={this.state.language === 'english' ? welcome : bienvenido} />
        </Link>
      </div>
    );
  }
}
export default App;
