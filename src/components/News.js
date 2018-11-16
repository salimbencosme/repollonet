import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import { saveContact,countActiveInfo,countPost } from '../common/ApiServices';

class News extends Component {

    constructor(props) {
        super(props);
        this.state={
            total: 0,
            totalTips: 0,
            totalRecipes:0,
            totalDidUKnow:0
        }
    }
    
    componentWillMount() {

        var totalTipsCounter = 0;
        var totalRecipesCounter = 0;
        var totalDidUKnowCounter = 0;

        countPost('recipe').on("value", function (data) {
            totalRecipesCounter = countActiveInfo(data.val());
        
           console.log("->"+totalRecipesCounter);
            /*var info = {
                total: this.state.total + totalTipsCounter_p,
                totalTips: totalTipsCounter_p,
                totalRecipes: this.state.totalRecipes,
                totalDidUKnow: this.state.totalDidUKnow
            }*/

            this.setState({
                totalRecipes:totalRecipesCounter
            })

        }, function (error) {
            console.log("Error Recipes: " + error.code);
        });

        countPost('information').on("value", function (data) {
            totalDidUKnowCounter = countActiveInfo(data.val());
            console.log("2-"+totalDidUKnowCounter);
        }, function (error) {
            console.log("Error Did you Know: " + error.code);
        });

        countPost('tips').on("value", function (data) {
            totalTipsCounter = countActiveInfo(data.val());
            console.log("3-"+totalTipsCounter);
        }, function (error) {
            console.log("Error Tips: " + error.code);
        });

        
        this.setState({
            total: 1,
            totalTips: 1,
            totalRecipes:1,
            totalDidUKnow:1
        });

/*
        this.setState({
            total: (totalTipsCounter + totalDidUKnowCounter + totalTipsCounter),
            totalTips: totalTipsCounter,
            totalRecipes: totalRecipesCounter,
            totalDidUKnow: totalDidUKnowCounter
        });

        */
    }


    render() {
        return (
            <div>
                <h2 class="title-news">SUMMARY CONTENT</h2>

                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">

                        <ul id="menu">
                            <li><span class="badge-name">Read all</span> <Badge>{this.state.total}</Badge></li>
                            <li><span class="badge-name">Tips</span> <Badge>{this.state.totalTips}</Badge></li>
                            <li><span class="badge-name">Did you know?</span> <Badge>{this.state.totalDidUKnow}</Badge></li>
                            <li><span class="badge-name">Recipes</span> <Badge>{this.state.totalRecipes}</Badge></li>
                        </ul>
                  </div>

                </div>


                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="our-services-wrapper mb-60">
                            <div class="services-inner">
                                <div class="our-services-img">
                                    <img src="https://www.orioninfosolutions.com/assets/img/icon/Agricultural-activities.png" width="68px" alt="" />
                                </div>
                                <div class="our-services-text">
                                    <h4>The Last Tips</h4>
                                    <p>This is the tips of today!. After a lot of searching I come up...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="our-services-wrapper mb-60">
                            <div class="services-inner">
                                <div class="our-services-img">
                                    <img src="https://www.orioninfosolutions.com/assets/img/icon/Agricultural-activities.png" width="68px" alt="" />
                                </div>
                                <div class="our-services-text">
                                    <h4>The Last Did you know?</h4>
                                    <p>This is the last did you know of today!. After a lot of searching I come up...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="our-services-wrapper mb-60">
                            <div class="services-inner">
                                <div class="our-services-img">
                                    <img src="https://www.orioninfosolutions.com/assets/img/icon/Agricultural-activities.png" width="68px" alt="" />
                                </div>
                                <div class="our-services-text">
                                    <h4>The last recipe</h4>
                                    <p>This is the recipe of today!. After a lot of searching I come up...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="our-services-wrapper mb-60">
                            <div class="services-inner">
                                <div class="our-services-img">
                                    <img src="data:image/png;base64,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" width="68px" alt="" />
                                </div>
                                <div class="our-services-text">
                                    <h4>NEW FEATURE</h4>
                                    <p>The app now allow you to...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }

}

export default News;