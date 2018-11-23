import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import { countActiveInfo, getPostByType, getLastInfo, getLastsInfo } from '../common/ApiServices';
import tips from '../resources/img/tips.png';
import diduknow from '../resources/img/questions.png';
import recipes from '../resources/img/recipes.png';
import features from '../resources/img/feature.png';
import hands from '../resources/img/hands.png';
import { Link } from "react-router-dom";
import { beautyString, encryptKey } from '../common/Utils';
import recipesdrinks from '../resources/img/recipes-drinks.png';

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
        let totalTipsCounter = 0;
        let totalRecipesCounter = 0;
        let totalDidUKnowCounter = 0;
        let totalFeaturesCounter = 0;
        let currentComponent = this;

        getPostByType('recipe').on('value', function (data) {
            totalRecipesCounter = countActiveInfo(data.val());
            let lastRecipeTemp = getLastInfo(data.val());
            currentComponent.setState({
                totalRecipes: totalRecipesCounter,
                lastRecipe: lastRecipeTemp
            });
        }, function (error) {
            console.log("Error Recipes: " + error.code);
        });

        getPostByType('didyouknow').on("value", function (data) {
            totalDidUKnowCounter = countActiveInfo(data.val());
            let lastDiduKnowTemp = getLastInfo(data.val());
            currentComponent.setState({
                totalDidUKnow: totalDidUKnowCounter,
                lastDidUKnow: lastDiduKnowTemp
            });
        }, function (error) {
            console.log("Error Did you Know: " + error.code);
        });

        getPostByType('tips').on("value", function (data) {
            totalTipsCounter = countActiveInfo(data.val());
            let lastTotalTipsTemp = getLastInfo(data.val());
            currentComponent.setState({
                totalTips: totalTipsCounter,
                lastTips: lastTotalTipsTemp
            });
        }, function (error) {
            console.log("Error Tips: " + error.code);
        });

        getPostByType('information').on("value", function (data) {
            totalFeaturesCounter = countActiveInfo(data.val());
            let lastTotalFeaturesTemp = getLastsInfo(data.val(), 5);
            currentComponent.setState({
                totalFeatures: totalFeaturesCounter,
                lastFeature: lastTotalFeaturesTemp
            });
        }, function (error) {
            console.log("Error Feaures: " + error.code);
        });
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


    getUrlType(type, id) {
        switch (type) {
            case 'recipe':
                return '/details/recipe/' + encryptKey(id);

            case 'didyouknow':
                return '/details/didyouknow/' + encryptKey(id);

            case 'tips':
                return '/details/tips/' + encryptKey(id);

            case 'information':
                return '/details/information/' + encryptKey(id);
        }
    }

    cardElement(id, title, content, type,subtype) {

        if (title === undefined && content === undefined)
            return "";

        return (
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="our-services-wrapper mb-60">
                    <Link to={this.getUrlType(type, id)}>
                        <div class="services-inner">
                            <div class="our-services-img">
                                <img className="icon-news" src={this.getImageType(type)} width="68px" alt="" />
                            </div>
                            <div class="our-services-text">
                                <h4>{this.getTitleType(type)}</h4>
                                <h3>{title}</h3>
                                <p>{beautyString(content, 200)}...</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }

    cardElmentList(array) {

        var lastData = [];

        if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
            array.forEach(element => {
                lastData.push(
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="our-services-wrapper mb-60">
                            <Link to={this.getUrlType(element.type, element.id)}>
                                <div class="services-inner">
                                    <div class="our-services-img">
                                        <img className="icon-news" src={this.getImageType(element.type,element.subtype)} width="68px" alt="" />
                                    </div>
                                    <div class="our-services-text">
                                        <h4>{this.getTitleType(element.type)}</h4>
                                        <h3>{element.title}</h3>
                                        <p>{beautyString(element.content, 200)}...</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                );
            });
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
                            <li><Link to="/post/all"><span class="badge-name">Read all</span> <Badge>{this.state.totalTips + this.state.totalRecipes + this.state.totalDidUKnow + this.state.totalFeatures}</Badge></Link></li>
                            <li><Link to="/post/tips"> <span class="badge-name">Tips</span> <Badge>{this.state.totalTips}</Badge></Link></li>
                            <li><Link to="/post/didyouknow"><span class="badge-name">Did you know?</span> <Badge>{this.state.totalDidUKnow}</Badge></Link></li>
                            <li><Link to="/post/recipe"><span class="badge-name">Recipes</span> <Badge>{this.state.totalRecipes}</Badge></Link></li>
                            <li><Link to="/post/information"><span class="badge-name">New features</span> <Badge>{this.state.totalFeatures}</Badge></Link></li>
                        </ul>
                    </div>
                </div>

                <div class="row scrollable-div">
                    {this.cardElement(this.state.lastTips.id, this.state.lastTips.title, this.state.lastTips.content, this.state.lastTips.type,this.state.lastTips.subtype)}
                    {this.cardElement(this.state.lastDidUKnow.id, this.state.lastDidUKnow.title, this.state.lastDidUKnow.content, this.state.lastDidUKnow.type, this.state.lastDidUKnow.subtype)}
                    {this.cardElement(this.state.lastRecipe.id, this.state.lastRecipe.title, this.state.lastRecipe.content, this.state.lastRecipe.type,this.state.lastRecipe.subtype)}
                    {this.cardElmentList(this.state.lastFeature)}


                    <img id="img-hands" className="icon-news" src={hands} width="68px" alt="" title="Scroll to see more information" />

                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <br /><br /><br /><br />
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <br /><br /><br /><br />
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <br /><br /><br /><br />
                    </div>
                </div>
            </div>


        );
    }

}

export default News;