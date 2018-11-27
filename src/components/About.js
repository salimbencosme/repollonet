import React, { Component } from 'react';
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import { aboutInfo, writersInfo } from '../common/ApiServices';
import themeHandler from '../common/ThemeHandler';
import LanguageSelector from '../common/LanguageSelector';

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
        this.selectGlobalLanguage = this.selectGlobalLanguage.bind(this);
    }

    componentDidMount() {
        themeHandler("default");

        aboutInfo().then((data) => {
            this.setState({
                title: data.title,
                title_es : data.title_es,
                content: data.content,
                content_es : data.content_es,
                pic: data.pic
            });
        });

        writersInfo().then((data) => {
            this.setState({
                writers: data
            });
        });
    }

    showWritersInformation() {

        let writersList = [];

        for (let x = 0; x < this.state.writers.length; x++) {

            writersList.push(

                <Col xs={4} md={4}>
                    <div class="card-about h-100 text-center">
                        <img class="card-img-top img-writer" src={this.state.writers[x].pic} alt="" />
                        <div class="card-body">
                            <h4 class="card-title">{this.state.writers[x].fullname}</h4>
                            <h6 class="card-subtitle mb-2 text-muted">{this.state.writers[x].title}</h6>
                            <p class="card-text p-about black-color">{this.state.writers[x].description}</p>
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

    manageLanguage(spanishValue, englishValue) {
        switch (this.state.language) {
            case 'spanish':
                return spanishValue;
                break;
            case 'english':
                return englishValue;
                break;
        }
    }

    render() {
        return (
            <div>
                <LanguageSelector selectGlobalLanguage={this.selectGlobalLanguage} />
                <div class="div-container-scroll">
                    <br />
                    <br />
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active">{this.manageLanguage('NOSOSTROS','ABOUT')}</li>
                    </ol>

                    <Grid>
                        <Row className="show-grid">
                            <Col xs={6} md={6}>
                                <img class="img-fluid rounded mb-4 img-about" src={this.state.pic} alt="" />
                            </Col>

                            <Col xs={6} md={6}>
                                <h2 class="h-text">{this.manageLanguage(this.state.title_es,this.state.title)}</h2>
                                <p>{this.manageLanguage(this.state.content_es,this.state.content)}</p>

                            </Col>
                        </Row>
                    </Grid>

                    <Grid>
                        <h2>Our Writers</h2>
                        <Row className="show-grid">
                            {this.showWritersInformation()}
                        </Row>
                    </Grid>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        );
    }

}

export default About;