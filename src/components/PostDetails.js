import React, { Component } from 'react';
import { Grid, Row, Col, Pager } from 'react-bootstrap';

class PostDetails extends Component {

    defaultTheme = {
        '--theme-primary-color': '#039be5',
        '--theme-second-color': '#028ad3',
        '--theme-third-color': '#0394dea3',
        '--theme-fourth-color': 'rgb(2, 131, 200)',
        '--theme-fith-color': '#48c7ec',
        '--theme-sixth-color': 'black'
    }

    purpleTheme = {
        '--theme-primary-color': '#ab60b8',
        '--theme-second-color': '#9637a7',
        '--theme-third-color': '#ab60b8',
        '--theme-fourth-color': '#76018a',
        '--theme-fith-color': '#ab60b8',
        '--theme-sixth-color': 'black'
    }

    yellowTheme = {
        '--theme-primary-color': '#ebb206',
        '--theme-second-color': '#daa70c',
        '--theme-third-color': '#ebb206',
        '--theme-fourth-color': '#8e6e0d',
        '--theme-fith-color': '#ebb206',
        '--theme-sixth-color': 'black'
    }


    greenTheme = {
        '--theme-primary-color': '#b2bf2d',
        '--theme-second-color': '#a6b511',
        '--theme-third-color': '#b2bf2d',
        '--theme-fourth-color': '#768204',
        '--theme-fith-color': '#b2bf2d',
        '--theme-sixth-color': 'black'
    }

    blueTheme = {
        '--theme-primary-color': '#394aa5',
        '--theme-second-color': '#5f75ec',
        '--theme-third-color': '#394aa5',
        '--theme-fourth-color': '#000d54',
        '--theme-fith-color': '#394aa5',
        '--theme-sixth-color': 'white'
    }


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.updateAppThem(this.props.match.params.typecontent);
    }

    updateAppThem(typeOfContent) {

        let themeSelected = {};

        switch (typeOfContent) {
            case "tips":
                themeSelected = this.yellowTheme;
                break;
            case "diduknow":
                themeSelected = this.purpleTheme;
                break;
            case "recipe":
                themeSelected = this.greenTheme;
                break;
            case "information":
                themeSelected = this.blueTheme;
                break;
            default:
                themeSelected = this.defaultTheme;
                break;
        }

        document.documentElement.style.setProperty('--theme-primary-color',  themeSelected['--theme-primary-color']);
        document.documentElement.style.setProperty('--theme-second-color', themeSelected['--theme-second-color']);
        document.documentElement.style.setProperty('--theme-third-color', themeSelected['--theme-third-color']);
        document.documentElement.style.setProperty('--theme-fourth-color', themeSelected['--theme-fourth-color']);
        document.documentElement.style.setProperty('--theme-fith-color', themeSelected['--theme-fith-color']);
        document.documentElement.style.setProperty('--theme-sixth-color', themeSelected['--theme-sixth-color']);
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