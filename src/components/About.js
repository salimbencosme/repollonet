import React, { Component } from 'react';
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import { aboutInfo, writersInfo } from '../common/ApiServices';
import themeHandler from '../common/ThemeHandler';
import { manageLanguage, getSelectedLanguage } from '../common/Utils';
import { Link } from "react-router-dom";


var bStyle={
    'color': 'black',
    'font-weight': 'bold'
}

var linkStyle={
    'text-decoration': 'underline',
    'text-transform': 'uppercase',
    'font-weight': 'bold',
    'color':'#e13d42'
}

class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            title: "",
            content: "",
            content_es: "",
            pic: "",
            writers: [{}],
            language: 'english'
        }
    }

    componentDidMount() {
        themeHandler("default");
        aboutInfo().then((data) => {
            this.setState({
                title: data.title,
                title_es: data.title_es,
                content: data.content,
                content_es: data.content_es,
                pic: data.pic
            });
        });

        writersInfo().then((data) => {
            this.setState({
                writers: data
            });
        });

        this.setState({ language: getSelectedLanguage() });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ language: getSelectedLanguage() });
    }

    showWritersInformation() {

        let writersList = [];

        for (let x = 0; x < this.state.writers.length; x++) {
            let mainUrl = "/images/" + this.state.writers[x].pic;
            writersList.push(

                <Col xs={4} md={4}>
                    <div class="card-about h-100 text-center">
                        <img class="card-img-top img-writer" src={mainUrl} alt="" />
                        <div class="card-body">
                            <h4 class="card-title">{this.state.writers[x].fullname}</h4>
                            <h6 class="card-subtitle mb-2 text-muted">{manageLanguage(this.state.language, this.state.writers[x].title_es, this.state.writers[x].title)}</h6>
                            <p class="card-text p-about black-color">{manageLanguage(this.state.language, this.state.writers[x].description_es, this.state.writers[x].description)}</p>
                            <p class="card-text p-about black-color">{this.state.writers[x].phones}</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="black-color">{this.state.writers[x].email}</a>
                        </div>
                        <br />
                    </div>
                    <br />
                </Col>
            );

        }
        return writersList;
    }

    selectGlobalLanguage(languageSelected) {
        this.setState({ language: languageSelected });
    }

    render() {
        return (
            <div>
                <div class="div-container-scroll">
                    <br />
                    <br />
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active">{manageLanguage(this.state.language, 'NOSOSTROS', 'ABOUT')}</li>
                    </ol>

                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={12}>
                                <h2 class="h-text">Repollo.net</h2>
                                <br />
                                <p class="p-text">{manageLanguage(this.state.language,'Este proyecto tiene como fin educar para mejorar la salud por medio de la comida.','This project aims to educate to improve health through food.')}</p>

                                <p class="p-text">{manageLanguage(this.state.language,'Surge con la necesidad de cambiar la manera en que los seres humanos nos estamos alimentando en este siglo XXI. La comida ha sido parte fundamental del deterioro de las capacidades intelectivas del ser humano lo cual limita sus funcionalidades básicas y reduce los años de vida.','It arises with the need to change the way in which human beings are feeding us in this 21st century. Food has been a fundamental part of the deterioration of the intellective capacities of the human being, which limits its basic functionalities and reduces the years of life.')}</p>

                                <p class="p-text"> {manageLanguage(this.state.language,'El compromiso de','The commitment of')} <b style={bStyle}>repollo.net</b> {manageLanguage(this.state.language,' con el mundo es proporcionar opciones variadas de comidas saludables. Además de concientizar a los lectores de malas prácticas y mal uso de los alimentos, lo cual NO pueden proporcionar los nutrientes necesarios debido a la mala combinación que muchos están haciendo.',' with the world is to provide varied options of healthy meals. In addition to raising awareness among the readers of bad practices and misuse of food, which can NOT provide the necessary nutrients due to the bad combination that many are doing.')}</p>

                                <p class="p-text">{manageLanguage(this.state.language,'La variedad en las recetas para platos de contextura sólida o líquida como los jugos, permitirá que los menús de los hogares sean más amplios. Debido a la diversidad de recetas que esta aplicación proporciona.','The variety of recipes for dishes with a solid or liquid texture, such as juices, will allow the menus of households to be wider. Due to the diversity of recipes that this application provides.')}</p>

                                <p class="p-text">{manageLanguage(this.state.language,'La idea es alcanzar el mundo entero. No obstante, este proyecto no es patrocinado por ninguna entidad de renombre y es por eso que los recursos son escasos. Por ende, para poder permanecer y ampliar el alcance, también de brindar todo tipo de funcionalidades para hacer más fácil la búsqueda y la interacción con la aplicación. Se necesita de tu apoyo.','The idea is to reach the whole world. However, this project is not sponsored by any renowned entity and that is why resources are scarce. Therefore, to be able to stay and expand the scope, also to provide all kinds of functionalities to make the search and interaction with the application easier. Your support is needed.')}</p>

                                <p class="p-text">{manageLanguage(this.state.language,'Si para ti lo que hacemos te parece importante y quieres ayudar, pues puedes','If what you do for you seems important to you and you want to help, you can')} <Link style={linkStyle} to="/donate">{manageLanguage(this.state.language,'donar','donate')}</Link> {manageLanguage(this.state.language,'lo que tu corazón desee para seguir madurando el proyecto. Puedes especificar para qué das el aporte y si ves una sección que sería buena que se mejore, puedes especificarlo. Porque nosotros queremos brindar el mejor servicio gratuito de educación gastronómica.','what your heart desires to continue maturing the project. You can specify for what you give the contribution and if you see a section that would be good to improve, you can specify it. Because we want to provide the best free gastronomic education service.')}  </p>
                                <p class="p-text">{manageLanguage(this.state.language,'El desarrollo de este proyecto tuvo comienzo el 3 de Octubre del 2018 y fue lanzado por primera vez al público en general el 15 de Diciembre del 2018.','The development of this project began on October 3, 2018 and was released for the first time to the general public on December 15, 2018.')}</p>


                            </Col>
                        </Row>
                    </Grid>

                    <Grid>
                        <h2>{manageLanguage(this.state.language,'Nuestros escritores','Our Writers')}</h2>
                        <br/>
                        <Row className="show-grid">
                            {this.showWritersInformation()}
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
                </div>
            </div>
        );
    }

}

export default About;