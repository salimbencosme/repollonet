import React, { Component } from 'react';
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import themeHandler from '../common/ThemeHandler';
import { getPostById } from '../common/ApiServices';
import { decryptKey, getSelectedLanguage, manageLanguage } from '../common/Utils';
import tips from '../resources/img/tips.png';
import diduknow from '../resources/img/questions.png';
import recipes from '../resources/img/recipes.png';
import features from '../resources/img/feature.png';
import recipesdrinks from '../resources/img/recipes-drinks.png';
import back from '../resources/img/back.png';
import Markdown from 'react-markdown';
import { Link } from "react-router-dom";

class PostDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {},
            language: 'english',
            infoType: '',
            mainTitle: ''
        }

        this.goBack = this.goBack.bind(this);
    }

    handlerApiLogic(typeContent, id) {
        let currentComponent = this;
        themeHandler(typeContent);
        getPostById(decryptKey(id)).on('value', function (data) {
            currentComponent.setState({
                post: data.val()
            });
        }, function (error) {
            console.log("Error Details: " + error.code);
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ language: getSelectedLanguage(), infoType: nextProps.match.params.typecontent });
        this.handlerApiLogic(nextProps.match.params.typecontent, nextProps.match.params.id);
        this.generateTitle(nextProps.match.params.typecontent, getSelectedLanguage());
    }

    componentDidMount() {
        this.setState({ language: getSelectedLanguage(), infoType: this.props.match.params.typecontent });
        this.handlerApiLogic(this.props.match.params.typecontent, this.props.match.params.id);
        this.generateTitle(this.props.match.params.typecontent, getSelectedLanguage());
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


    createPicture(pic) {
        let picture = "";
        let mainUrl = "/images/" + pic;

        if (pic != undefined && pic != "") {
            picture = (
                <div>
                    <div class="pull-right">
                        <img src={mainUrl} class="img-thumbnail img-details" />
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            )
        }
        return picture;
    }


    createVideo(urlcode, showVideo) {
        let video = "";
        if (showVideo) {
            let url = "https://www.youtube.com/embed/" + urlcode + "?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com";
            video = (
                <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="500" type="text/html" src={url}></iframe>
            );
        }
        return video;
    }

    createIngredientList(ingredients) {
        let array = [];
        for (let value in ingredients) {
            array.push(<li class="li-custom onlyList">{manageLanguage(this.state.language, ingredients[value].name_es, ingredients[value].name)}</li>)
        }
        return array;
    }

    createPostDetail(post) {

        let titleparam = "";
        if (post.title != undefined) {
            titleparam = (manageLanguage(this.state.language, post.title_es, post.title)).toString().toUpperCase();
        }

        let showVideo = false;
        if (post.video != undefined && post.video != "") {
            showVideo = true;
        }

        return (
            <Grid>
                <Row className="show-grid">
                    <div class="pull-right">
                        <Link to={this.goBack()}>
                            <img className="icon-back" src={back} width="68px" alt="" />
                        </Link>
                    </div>
                    <div class="pull-left">
                        <h2 class="titleDetails">{this.state.mainTitle}</h2>
                    </div>
                    <br />
                    <br />
                    <Col xs={12} md={12}>
                        <div class="white-card-box">
                            <div class="pull-left">
                                <img className="icon-news" src={this.getImageType(post.type, post.subtype)} width="68px" alt="" />
                            </div>

                            {this.createPicture(post.pic)}
                            <div class="container">
                                <header>
                                    <section>
                                        <h1>{titleparam}</h1>
                                    </section>
                                    <br />
                                    <section id="ingredients">
                                        <h3 class="subtitle-color-dinamic">{post.type === 'recipe' ? manageLanguage(this.state.language, 'INGREDIENTES', 'INGREDIENTS') : ''}</h3>
                                        <ul>
                                            {this.createIngredientList(post.ingredients)}
                                        </ul>
                                    </section>
                                </header>
                                <article>

                                    <section>
                                        <h3 class="subtitle-color-dinamic">{post.type === 'recipe' ? manageLanguage(this.state.language, 'PREPARACIÓN', 'PREPARATION') : ''}</h3>
                                        {this.createVideo(post.video, showVideo)}
                                        <p class="p-custom"><Markdown escapeHtml={false} source={manageLanguage(this.state.language, post.content_es, post.content)} /></p>
                                    </section>

                                </article>

                            </div>
                        </div>
                    </Col>
                </Row>

            </Grid>

        );
    }


    goBack() {
        switch (this.state.infoType) {
            case 'recipe':

                return '/post/recipe';
            case 'didyouknow':
                return '/post/didyouknow';

            case 'tips':
                return '/post/tips';

            case 'information':
                return '/post/information';

            default:
                return '/';
        }
    }


    generateTitle(infoTypeParam, language) {

        let titleTemp = "";

        switch (infoTypeParam) {
            case 'recipe':
                titleTemp = manageLanguage(language, "RECETA", "RECIPE");
                break;
            case 'didyouknow':
                titleTemp = manageLanguage(language, "SABIAS QUE?", "DID YOU KNOW?");
                break;
            case 'tips':
                titleTemp = manageLanguage(language, "CONSEJOS", "TIPS");
                break;
            case 'information':
                titleTemp = manageLanguage(language, "NUEVA FUNCIONALIDAD", "NEW FEATURE");
                break;
            case 'all':
                titleTemp = manageLanguage(language, "VER TODOS", "READ ALL");
                break;
            default:
                titleTemp = "";
        }

        this.setState({ mainTitle: titleTemp });
    }

    render() {
        return (
            <div class=" div-container-scroll">
                {this.createPostDetail(this.state.post)}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>


        );
    }
}

export default PostDetails;