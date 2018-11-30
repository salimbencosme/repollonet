import React, { Component } from 'react';

import Nav from '../components/Nav';
import News from '../components/News';
import Post from '../components/Post';
import { Grid, Row, Col } from 'react-bootstrap';
import LanguageSelector from '../common/LanguageSelector';



class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            language: 'english'
        }
        this.selectGlobalLanguage = this.selectGlobalLanguage.bind(this);
    }

    selectGlobalLanguage(languageSelected) {
        this.setState({ language: languageSelected });
        console.log("CAMBIO EL STATUS GLOBAL: " + this.state.language);
    }

    render() {

        /*
        const children = React.cloneElement(this.props.children, { language: this.state.language , salim : 'bencosme de la rosa Salim'});
        */

       const children = React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          someData: this.state.language,
          someState: this.state.language,
          someFunction: x => x
        });
      });

        console.log(this.props.children);
        console.log(children);

        return (

            <div>

                <Nav language={this.state.language} classparam="nav-bar-style-blue" />
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <LanguageSelector selectGlobalLanguage={this.selectGlobalLanguage} />
                            <br />

                            {children}
                            <br />
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="panelNews">
                                <News language={this.state.language} />
                            </div>
                        </Col>
                    </Row>

                </Grid>

            </div>

        );

    }


}
export default Main;