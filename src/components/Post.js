import React, { Component } from 'react';
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import { Link } from "react-router-dom";
import themeHandler from '../common/ThemeHandler';
import { getPostAllPost, getPostInfo } from '../common/ApiServices';
import { encryptKey, beautyString } from '../common/Utils';
import tips from '../resources/img/tips.png';
import diduknow from '../resources/img/questions.png';
import recipes from '../resources/img/recipes.png';
import features from '../resources/img/feature.png';
import recipesdrinks from '../resources/img/recipes-drinks.png';

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }

        console.log("constroctor: "+props.language);
    }

    handlerApiLogic(typecontentparam) {
        let currentComponent = this;

        if (typecontentparam === 'all') {
            themeHandler("default");
        } else {
            themeHandler(typecontentparam);
        }

        getPostAllPost().on('value', function (data) {
            let postTemp = getPostInfo(data.val(), typecontentparam);

            currentComponent.setState({
                posts: postTemp
            });

        }, function (error) {
            console.log("Error Recipes: " + error.code);
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log("CompoenentWillreciveProps: "+nextProps.language);
        this.handlerApiLogic(nextProps.match.params.typecontent);
    }

    componentDidMount() {
        console.log("CompoenentDidMount: "+this.props.language);
        this.handlerApiLogic(this.props.match.params.typecontent);
    }

    getImageType(type, subtype) {
        switch (type) {
            case 'recipe':
                if (subtype === 'drink') {
                    return recipesdrinks
                } else {
                    return recipes;
                }

            case 'didyouknow':
                return diduknow;

            case 'tips':
                return tips;

            case 'information':
                return features;
        }
    }

    createCard(type, imageName, title, content, id, subtype) {
        let mainUrl = "/images/" + imageName;
        return (
            <Col xs={4} md={4}>
                <Link to={'/details/' + type + '/' + encryptKey(id)}>
                    <div class={this.determineColorCard(type)}>
                        <img class="img-card" src={mainUrl} alt="Avatar" />
                       
                        <div class="container-two">
                            <h4><b>{beautyString(title, title.length)}</b></h4>
                            <p class="white-color">{beautyString(content, 80) + '...'}</p>
                        </div>
                        <div class="pull-left">
                            <img className="img-post-icon" src={this.getImageType(type, subtype)} width="68px" alt="" />
                        </div>
                       
                    </div>


                </Link>
                <br />
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
        let list = [];
        this.state.posts.forEach(element => {
            list.push(this.createCard(element.type, element.pic, element.title, element.content, element.id, element.subtype));
        });

        return list;
    }

    render() {
        return (
            <div class="div-container-scroll">
                <br />
                <Grid>
                    <Row className="show-grid">
                        {this.createCardList()}
                    </Row>

                </Grid>

                <br />

                <br />
                <br />

            </div>

        );
    }

}

export default Post;