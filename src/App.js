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
import { manageLanguage, getSelectedLanguage } from './common/Utils';
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import themeHandler from './common/ThemeHandler';

var cardStyle = {
  'width': '300px',
  'box-shadow': 'none'
}

var imgStyle = {
  'width': '100px'
}

var titleCard = {
  'text-transform': 'uppercase',
  'color': 'black',
  'font-weight': 'bold'
}

var tipsButton = {
  'background': '#ebb206',
  'border-color': '#ebb40c'
}

var didYouKnowButton = {
  'background': '#ab60b8',
  'border-color': '#ab60b8'
}


var recipeButton = {
  'background': '#b2bf2d',
  'border-color': '#b2bf2d'
}


var featureButton = {
  'background': '#394aa5',
  'border-color': '#394aa5'
}

var aboutButton = {
  'background': '#039be5',
  'border-color': '#039be5'
}

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
    themeHandler("default");
  }


  render() {
    return (
      <div class="div-container-scroll">

        <Link to="/post/all">
          <img className="img-welcome" src={this.state.language === 'english' ? welcome : bienvenido} />
        </Link>


        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={3}>
              <center>
                <div class="card" style={cardStyle}>

                  <img class="card-img-top" src={tips} style={imgStyle} />
                  <div class="card-body">
                    <h4 class="card-title" style={titleCard}>{manageLanguage(this.state.language, 'Consejos', 'Tips')}</h4>
                    <p class="card-text">{manageLanguage(this.state.language, 'Recomendaciones que puedes utilizar a la hora de la cocina.', 'Recommendations that you can use when cooking.')}</p>
                    <Link className="btn btn-primary" to="/post/tips" style={tipsButton} >{manageLanguage(this.state.language, 'Ver todos', 'See all')}</Link>
                  </div>
                </div>
              </center>
            </Col>

            <Col xs={12} md={3}>
              <center>
                <div class="card" style={cardStyle}>

                  <img class="card-img-top" src={diduknow} style={imgStyle} />
                  <div class="card-body">
                    <h4 class="card-title" style={titleCard}>{manageLanguage(this.state.language, 'Sabias que?', 'Did you know?')}</h4>
                    <p class="card-text">{manageLanguage(this.state.language, 'Explora las curiosidades, historias y relatos de la gastronomía.', 'Explore the curiosities, stories and stories of gastronomy.')}</p>
                    <Link className="btn btn-primary" to="/post/didyouknow" style={didYouKnowButton} >{manageLanguage(this.state.language, 'Ver todos', 'See all')}</Link>
                  </div>

                </div>
              </center>
            </Col>

            <Col xs={12} md={3}>
              <center>
                <div class="card" style={cardStyle}>
                  <img class="card-img-top" src={recipes} style={imgStyle} />
                  <div class="card-body">
                    <h4 class="card-title" style={titleCard}>{manageLanguage(this.state.language, 'Recetas', 'Recipes')}</h4>
                    <p class="card-text">{manageLanguage(this.state.language, 'Conoce los pasos a seguir para producir un determinado plato, es decir, qué ingredientes incluye una comida y la forma en que ésta debe ser preparada.', 'know the steps to follow to produce a particular dish, that is, what ingredients a meal includes and how it should be prepared.')}</p>
                    <Link className="btn btn-primary" to="/post/recipe" style={recipeButton} >{manageLanguage(this.state.language, 'Ver todos', 'See all')}</Link>
                  </div>
                </div>
              </center>
            </Col>


            <Col xs={12} md={3}>
              <center>
                <div class="card" style={cardStyle}>
                  <img class="card-img-top" src={features} style={imgStyle} />
                  <div class="card-body">
                    <h4 class="card-title" style={titleCard}>{manageLanguage(this.state.language, 'Nuevas funcionalidades', 'New features')}</h4>
                    <p class="card-text">{manageLanguage(this.state.language, 'Descubre cuáles son las últimas novedades de Repollo.net', 'Discover the latest news from Repollo.net')}</p>
                    <Link className="btn btn-primary" to="/post/information" style={featureButton} >{manageLanguage(this.state.language, 'Ver todos', 'See all')}</Link>
                  </div>
                </div>
              </center>
            </Col>
          </Row>

          <Row>

            <Col xs={12} md={12}>
              <center>
                <div class="card" style={cardStyle}>
                  <center>
                    <img class="card-img-top" src={mark} style={imgStyle} />
                    <div class="card-body">
                      <p class="card-text">{manageLanguage(this.state.language, 'Este proyecto tiene como fin educar para mejorar la salud por medio de la comida.', 'This project aims to educate to improve health through food.')}</p>
                      <Link className="btn btn-primary" to="/about" style={aboutButton} >{manageLanguage(this.state.language, 'Conocer más', 'Know more')}</Link>
                    </div>
                  </center>
                </div>
              </center>
            </Col>

          </Row>

        </Grid>


        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
export default App;
