import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import { saveContact, countActiveInfo, countPost, getLastInfo, getLastsInfo } from '../common/ApiServices';
import tips from '../resources/img/tips.png';
import diduknow from '../resources/img/questions.png';
import recipes from '../resources/img/recipes.png';
import features from '../resources/img/feature.png';

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            totalTips: 0,
            totalRecipes: 0,
            totalDidUKnow: 0,
            totalFeatures: 0,
            lastTips: {},
            lastDidUKnow: {},
            lastRecipe: {},
            lastFeature: []
        }
    }

    componentDidMount() {
        var totalTipsCounter = 0;
        var totalRecipesCounter = 0;
        var totalDidUKnowCounter = 0;
        var totalFeaturesCounter = 0;
        let currentComponent = this;

        countPost('recipe').on('value', function (data) {
            totalRecipesCounter = countActiveInfo(data.val());
            var lastRecipeTemp = getLastInfo(data.val());
            currentComponent.setState({
                totalRecipes: totalRecipesCounter,
                total: currentComponent.state.total + totalRecipesCounter,
                lastRecipe: lastRecipeTemp
            });
        }, function (error) {
            console.log("Error Recipes: " + error.code);
        });

        countPost('didyouknow').on("value", function (data) {
            totalDidUKnowCounter = countActiveInfo(data.val());
            var lastDiduKnowTemp = getLastInfo(data.val());
            currentComponent.setState({
                totalDidUKnow: totalDidUKnowCounter,
                total: currentComponent.state.total + totalDidUKnowCounter,
                lastDidUKnow: lastDiduKnowTemp
            });
        }, function (error) {
            console.log("Error Did you Know: " + error.code);
        });

        countPost('tips').on("value", function (data) {
            totalTipsCounter = countActiveInfo(data.val());
            var lastTotalTipsTemp = getLastInfo(data.val());
            currentComponent.setState({
                totalTips: totalTipsCounter,
                total: currentComponent.state.total + totalTipsCounter,
                lastTips: lastTotalTipsTemp
            });
        }, function (error) {
            console.log("Error Tips: " + error.code);
        });

        countPost('information').on("value", function (data) {
            totalFeaturesCounter = countActiveInfo(data.val());
            var lastTotalFeaturesTemp = getLastsInfo(data.val());
            currentComponent.setState({
                totalFeatures: totalFeaturesCounter,
                total: currentComponent.state.total + totalFeaturesCounter,
                lastFeature: lastTotalFeaturesTemp
            });
        }, function (error) {
            console.log("Error Feaures: " + error.code);
        });
    }

    getImageType(type) {
        switch (type) {
            case 'recipe':
                return recipes;

            case 'didyouknow':
                return diduknow;

            case 'tips':
                return tips;

            case 'information':
                return features;
        }
    }

    getTitleType(type) {
        switch (type) {
            case 'recipe':
                return 'LAST RECIPE';

            case 'didyouknow':
                return 'LAST DID YOU KNOW?';

            case 'tips':
                return 'LAST TIPS';

            case 'information':
                return 'NEW FEATURE';
        }
    }

    cardElement(id, title, content, type) {

        if (title === undefined && content === undefined)
            return "";

        return (
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="our-services-wrapper mb-60">
                    <div class="services-inner">
                        <div class="our-services-img">
                            <img className="icon-news" src={this.getImageType(type)} width="68px" alt="" />
                        </div>
                        <div class="our-services-text">
                            <h4>{this.getTitleType(type)}</h4>
                            <h3>{title}</h3>
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    cardElmentList(dataArray) {

        var lastData = [];

        if (dataArray != []) {
            for (data in dataArray) {
                lastData.push(
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="our-services-wrapper mb-60">
                            <div class="services-inner">
                                <div class="our-services-img">
                                    <img className="icon-news" src={this.getImageType(data.type)} width="68px" alt="" />
                                </div>
                                <div class="our-services-text">
                                    <h4>{this.getTitleType(data.type)}</h4>
                                    <h3>{data.title}</h3>
                                    <p>{data.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            return lastData;
        }
        return "";
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
                            <li><span class="badge-name">New features</span> <Badge>{this.state.totalFeatures}</Badge></li>
                        </ul>
                    </div>

                </div>


                <div class="row">
                    {this.cardElement(this.state.lastTips.id, this.state.lastTips.title, this.state.lastTips.content, this.state.lastTips.type)}
                    {this.cardElement(this.state.lastDidUKnow.id, this.state.lastDidUKnow.title, this.state.lastDidUKnow.content, this.state.lastDidUKnow.type)}
                    {this.cardElement(this.state.lastRecipe.id, this.state.lastRecipe.title, this.state.lastRecipe.content, this.state.lastRecipe.type)}
                    {this.cardElmentList(this.state.lastFeature)}
                </div>
            </div>


        );
    }

}

export default News;