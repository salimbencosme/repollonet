import React, { Component } from 'react';
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import { Link } from "react-router-dom";
import themeHandler from '../common/ThemeHandler';
import { getPostAllPost, getPostInfo } from '../common/ApiServices';

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        let currentComponent = this;
        themeHandler("default");
        console.log(this.props.match.params.typecontent);

        getPostAllPost().on('value', function (data) {
            let postTemp = getPostInfo(data.val(), currentComponent.props.match.params.typecontent);

            currentComponent.setState({
                posts: postTemp
            });

        }, function (error) {
            console.log("Error Recipes: " + error.code);
        });
    }


    beautyString(value, quantity) {
        value = value.substring(0, quantity)
        let words = value.substring(1, value.length).toLowerCase();
        return value.charAt(0).toUpperCase() + "" + words;
    }

    createCard(type, imageName, title, content) {
        let mainUrl = "/images/" + imageName;
        return (
            <Col xs={4} md={4}>
                <Link to={'/details/' + type}>
                    <div class={this.determineColorCard(type)}>
                        <img class="img-card" src={mainUrl} alt="Avatar" />
                        <div class="container-two">
                            <h4><b>{this.beautyString(title, title.length)}</b></h4>
                            <p class="white-color">{this.beautyString(content, 25) + '...'}</p>
                        </div>
                    </div>

                </Link>
            </Col>
        );
    }

    determineColorCard(type) {
        switch (type) {
            case 'recipe':
                return "card green-card";

            case 'didyouknow':
                return "card purple-card";

            case 'tips':
                return "card yellow-card";

            case 'information':
                return "card blue-card";
        }
    }

    createCardList() {
        this.state.posts.forEach(element => {
            this.createCard(element.type, element.pic, element.title, element.content)
        });
    }

    render() {
        return (
            <div class="div-container-scroll">
                <br />
                <Grid>
                    <Row className="show-grid">
                        {this.createCardList()}
                    </Row>

                    <br />
                    <br />
                </Grid>

                <br />

                <Pager>
                    <Pager.Item href="#">Previous</Pager.Item>{' '}
                    <Pager.Item href="#">Next</Pager.Item>
                </Pager>;

                <br />
                <br />

            </div>

        );
    }

}

export default Post;