import React, { Component } from 'react';
import { Grid, Row, Col, Pager } from 'react-bootstrap';

class About extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div class="div-container-scroll">
                <br />
                <br />
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active">ABOUT</li>
                </ol>

                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} md={6}>
                            <img class="img-fluid rounded mb-4 img-about" src="https://png.pngtree.com/element_origin_min_pic/16/10/09/0057f924f21a99c.jpg" alt="" />
                        </Col>

                        <Col xs={6} md={6}>
                            <h2 class="h-text">Repollo.net</h2>
                            <p>This aplication was developed for give the world a source of informacion that can lead a person whose ability of cook is zero...</p>
     
                        </Col>

                    </Row>
                </Grid>

                <Grid>
                    <h2>Our Writers</h2>
                    <Row className="show-grid">
                        <Col xs={4} md={4}>
                        <div class="card-about h-100 text-center">
                            <img class="card-img-top img-writer" src="https://www.claimcompass.eu/blog/content/images/2018/01/warrior-ninja-avatar-samurai-icon-1.svg" alt="" />
                            <div class="card-body">
                                <h4 class="card-title">Salim Bencosme</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Writer</h6>
                                <p class="card-text p-about black-color">I am the CEO of repollo.net and also a writer...</p>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="black-color">salimbencosme@gmail.com</a>
                            </div>
                            <br/>
                        </div>
                        </Col>

                        <Col xs={4} md={4}>
                        <div class="card-about h-100 text-center">
                            <img class="card-img-top img-writer" src="https://www.claimcompass.eu/blog/content/images/2018/01/warrior-ninja-avatar-samurai-icon-1.svg" alt="" />
                            <div class="card-body">
                                <h4 class="card-title">Salim Bencosme</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Writer</h6>
                                <p class="card-text p-about black-color">I am the CEO of repollo.net and also a writer...</p>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="black-color">salimbencosme@gmail.com</a>
                            </div>
                            <br/>
                        </div>
                        </Col>

                       <Col xs={4} md={4}>
                        <div class="card-about h-100 text-center">
                            <img class="card-img-top img-writer" src="https://www.claimcompass.eu/blog/content/images/2018/01/warrior-ninja-avatar-samurai-icon-1.svg" alt="" />
                            <div class="card-body">
                                <h4 class="card-title">Salim Bencosme</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Writer</h6>
                                <p class="card-text p-about black-color">I am the CEO of repollo.net and also a writer...</p>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="black-color">salimbencosme@gmail.com</a>
                            </div>
                            <br/>
                        </div>
                        </Col>

                        
                    </Row>
                </Grid>


                <Grid>
                    <br/>
                    <Row className="show-grid">
                    <Col xs={4} md={4}>
                        <div class="card-about h-100 text-center">
                            <img class="card-img-top img-writer" src="https://www.claimcompass.eu/blog/content/images/2018/01/warrior-ninja-avatar-samurai-icon-1.svg" alt="" />
                            <div class="card-body">
                                <h4 class="card-title">Salim Bencosme</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Writer</h6>
                                <p class="card-text p-about black-color">I am the CEO of repollo.net and also a writer...</p>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="black-color">salimbencosme@gmail.com</a>
                            </div>
                            <br/>
                        </div>
                        </Col>

                        <Col xs={4} md={4}>
                        <div class="card-about h-100 text-center">
                            <img class="card-img-top img-writer" src="https://www.claimcompass.eu/blog/content/images/2018/01/warrior-ninja-avatar-samurai-icon-1.svg" alt="" />
                            <div class="card-body">
                                <h4 class="card-title">Salim Bencosme</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Writer</h6>
                                <p class="card-text p-about black-color">I am the CEO of repollo.net and also a writer...</p>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="black-color">salimbencosme@gmail.com</a>
                            </div>
                            <br/>
                        </div>
                        </Col>

                        <Col xs={4} md={4}>
                        <div class="card-about h-100 text-center">
                            <img class="card-img-top img-writer" src="https://www.claimcompass.eu/blog/content/images/2018/01/warrior-ninja-avatar-samurai-icon-1.svg" alt="" />
                            <div class="card-body">
                                <h4 class="card-title">Salim Bencosme</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Writer</h6>
                                <p class="card-text p-about black-color">I am the CEO of repollo.net and also a writer...</p>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="black-color">salimbencosme@gmail.com</a>
                            </div>
                            <br/>
                        </div>
                        </Col>

                        
                    </Row>
                </Grid>

                <br/>
                <br/>
                <br/>
            
            </div>



        );
    }

}

export default About;