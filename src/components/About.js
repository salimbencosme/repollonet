import React, { Component } from 'react';
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import {aboutInfo,writersInfo} from '../common/ApiServices';

class About extends Component {

    constructor(props) {
        super(props);

        this.state={
            title:"",
            content:"",
            pic:"",
            writers:[{}]
        }
    }

    componentDidMount() {
        aboutInfo().then((data)=>{
            this.setState({
                title:data.title,
                content:data.content,
                pic: data.pic
            });
        });

        writersInfo().then((data)=>{
            this.setState({
                writers:data
            });
        });
    }


    showWritersInformation(){

        let writersList = [];

        for(let x=0;x<this.state.writers.length;x++){

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
                    <br/>
                </div>
                <br/>
                </Col>
            );

        }
        return writersList;
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
                            <img class="img-fluid rounded mb-4 img-about" src={this.state.pic} alt="" />
                        </Col>

                        <Col xs={6} md={6}>
                            <h2 class="h-text">{this.state.title}</h2>
                            <p>{this.state.content}</p>
     
                        </Col>
                    </Row>
                </Grid>

                <Grid>
                    <h2>Our Writers</h2>
                    <Row className="show-grid">
                        {this. showWritersInformation()}
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