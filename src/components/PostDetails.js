import React, { Component } from 'react';
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import themeHandler from '../common/ThemeHandler';
import { getPostById } from '../common/ApiServices';
import { decryptKey } from '../common/Utils';


class PostDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post:{}
        }
    }

    componentDidMount() {
        let currentComponent = this;
        themeHandler(this.props.match.params.typecontent);

        getPostById(decryptKey(this.props.match.params.id)).on('value', function (data) {
            
            console.log(data.val());
            currentComponent.setState({
                post:data.val()
            });

        }, function (error) {
            console.log("Error Recipes: " + error.code);
        });
    }

    render() {
        return (
            <div class=" div-container-scroll">
                <Grid>
                    <Row className="show-grid">
                        <br />
                        <br />
                        <Col xs={12} md={12}>
                            <div class="white-card-box">
                                <img src="https://www.100daysofrealfood.com/wp-content/uploads/2012/02/list-photo-final.jpg" class="img-thumbnail img-details" />
                                <br />
                                <br />
                                <div class="container">
                                    <header>
                                        <section>
                                            <h2>Simple caprese salad</h2>
                                            <p>A spin on the standard <a href="https://en.wikipedia.org/wiki/Caprese_salad">caprese salad</a>.</p>
                                        </section>
                                        <section>
                                            <p>Traditionally, the caprese salad calls for sliced tomatoes and slices of mozzarella. This version uses cherry
                                                tomatoes, and either mozzarella balls or small cubes of the cheese. This gives you a salad that's a bit more
                                                like a salad, and works better as a side item. In addition, the cherry tomatoes are a bit sweeter, which
                brings a little more brightness to the dish.</p>
                                            <p>The recipe below is designed to act as a guide, and not something to be followed prescriptively. Play with your
                food! Adjust amounts based on your tastes.</p>
                                        </section>
                                    </header>
                                    <article>
                                        <section id="ingredients">
                                            <h3>Ingredients</h3>
                                            <p>Serves 2 people</p>
                                            <ul>
                                                <li>10 cherry tomatoes, sliced in half</li>
                                                <li>3 oz <em>fresh</em> mozzarella, cut to size to match cherry tomatoes</li>
                                                <li>6 basil leaves, <a href="https://en.wikipedia.org/wiki/Chiffonade">chiffonade</a></li>
                                                <li>2 Tbsp extra virgin olive oil, or to taste</li>
                                                <li>1 Tbsp balsamic vinegar, or to taste</li>
                                                <li>2 healthy pinches of Kosher salt, or to taste</li>
                                                <li>6-8 grinds of pepper, or to taste</li>
                                            </ul>
                                        </section>
                                        <section>
                                            <h3>Preparation</h3>
                                            <ul>
                                                <li>Pepare the tomatoes, mozzarella and basil as <a href="#ingredients">specified</a>, and place in a medium-sized
                    bowl.</li>
                                                <li>Season with salt and pepper.</li>
                                                <li>Add extra virgin olive oil and balsamic. Toss to coat.</li>
                                                <li>Adjust seasoning as needed.</li>
                                                <li>Serve!</li>
                                            </ul>
                                        </section>
                                    </article>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <br />
                <br />
                <br />
                <br />
            </div>


        );
    }
}

export default PostDetails;