import React, { Component } from 'react';
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import themeHandler from '../common/ThemeHandler';
import { getPostById } from '../common/ApiServices';
import { decryptKey } from '../common/Utils';
import tips from '../resources/img/tips.png';
import diduknow from '../resources/img/questions.png';
import recipes from '../resources/img/recipes.png';
import features from '../resources/img/feature.png';
import recipesdrinks from '../resources/img/recipes-drinks.png';


class PostDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }

    handlerApiLogic(typeContent, id) {
        let currentComponent = this;
        themeHandler(typeContent);
        getPostById(decryptKey(id)).on('value', function (data) {
            currentComponent.setState({
                post: data.val()
            });
        }, function (error) {
            console.log("Error Recipes: " + error.code);
        });
    }

    componentWillReceiveProps(nextProps) {
        this.handlerApiLogic(nextProps.match.params.typecontent, nextProps.match.params.id);
    }

    componentDidMount() {
        this.handlerApiLogic(this.props.match.params.typecontent, this.props.match.params.id);
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
            array.push(<li class="li-custom">{ingredients[value].name}</li>)
        }
        return array;
    }


    createPostDetail(post) {

        let titleparam = "";
        if (post.title != undefined) {
            titleparam = (post.title).toString().toUpperCase();
        }

        let showVideo = false;
        if (post.video != undefined && post.video != "") {
            showVideo = true;
        }



        return (
            <Grid>
                <Row className="show-grid">
                    <br />
                    <br />
                    <Col xs={12} md={12}>
                        <div class="white-card-box">
                            <div class="pull-left">
                                <img className="icon-news" src={this.getImageType(post.type,post.subtype)} width="68px" alt="" />
                            </div>

                            {this.createPicture(post.pic)}
                            <div class="container">
                                <header>
                                    <section>
                                        <h1>{titleparam}</h1>
                                    </section>
                                    <br />
                                    <section id="ingredients">
                                        <h3 class="subtitle-color-dinamic">{post.type === 'recipe' ? 'INGREDIENTS' : ''}</h3>
                                        <ul>
                                            {this.createIngredientList(post.ingredients)}
                                        </ul>
                                    </section>
                                </header>
                                <article>

                                    <section>
                                        <h3 class="subtitle-color-dinamic">{post.type === 'recipe' ? 'PREPARATION' : ''}</h3>
                                        {this.createVideo(post.video, showVideo)}
                                        <p class="p-custom">{post.content}</p>
                                    </section>

                                </article>

                            </div>
                        </div>
                    </Col>
                </Row>

            </Grid>

        );
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