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
                        <Col xs={8} md={8}>
                            <Post/> 
                        </Col>
                        <Col xs={4} md={4}>
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