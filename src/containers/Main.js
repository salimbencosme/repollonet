import React, { Component } from 'react';

import Nav from '../components/Nav';
import News from '../components/News';
import Post from '../components/Post';
import { Grid, Row, Col } from 'react-bootstrap';
import LanguageSelector from '../common/LanguageSelector';
import  {manageLanguage} from '../common/Utils';


class Main extends Component {

    constructor(props){
        super(props);

        this.state = {
            language: 'english'
        }
        this.selectGlobalLanguage = this.selectGlobalLanguage.bind(this);
    }

    selectGlobalLanguage(languageSelected) {
        this.setState({ language: languageSelected });
        console.log("CAMBIO EL STATUS GLOBAL: "+this.state.language);
    }

    render() {

        return (

            <div>

                <Nav classparam="nav-bar-style-blue" />
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                        <LanguageSelector selectGlobalLanguage={this.selectGlobalLanguage} />
                        <br/>  
                        {this.props.children}
               <br/>      
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="panelNews">
                                <News/>
                            </div>
                        </Col>
                    </Row>

                </Grid>

            </div>

                );
        
            }
        
        
        }
export default Main;