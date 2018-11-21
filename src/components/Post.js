import React, { Component } from 'react';
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import { Link } from "react-router-dom";
import themeHandler from '../common/ThemeHandler';
import { getPostAllPost, getPostInfo} from '../common/ApiServices';
import { encryptKey } from '../common/Utils';

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        let currentComponent = this;
        let typecontentparam = currentComponent.props.match.params.typecontent;

        if(typecontentparam === 'all'){
            themeHandler("default");
        }else{
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


    beautyString(value, quantity) {
        value = value.substring(0, quantity)
        let words = value.substring(1, value.length).toLowerCase();
        return value.charAt(0).toUpperCase() + "" + words;
    }

    createCard(type, imageName, title, content,id) {
        let mainUrl = "/images/" + imageName;
        return (
            <Col xs={4} md={4}>
                <Link to={'/details/' + type + '/'+ encryptKey(id)}>
                    <div class={this.determineColorCard(type)}>
                        <img class="img-card" src={mainUrl} alt="Avatar" />
                        <div class="container-two">
                            <h4><b>{this.beautyString(title, title.length)}</b></h4>
                            <p class="white-color">{this.beautyString(content, 25) + '...'}</p>
                        </div>
                    </div>

                </Link>
                <br/>
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
            list.push(this.createCard(element.type, element.pic, element.title, element.content,element.id));
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

                <br/>

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