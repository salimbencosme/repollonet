import React, { Component } from 'react';

import Nav from '../components/Nav';
import News from '../components/News';
import Post from '../components/Post';
import { Grid, Row, Col } from 'react-bootstrap';


class Main extends Component {

    render() {

        return (

            <div>
                <Nav classparam="nav-bar-style-blue" />
                <br/>
                <br/>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
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