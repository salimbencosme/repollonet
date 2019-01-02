import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import { countActiveInfo, getPostByType, getLastInfo, getLastsInfo } from '../common/ApiServices';
import tips from '../resources/img/tips.png';
import diduknow from '../resources/img/questions.png';
import recipes from '../resources/img/recipes.png';
import features from '../resources/img/feature.png';
import mark from '../resources/img/mark.png';
import { Link } from "react-router-dom";
import { beautyString, encryptKey } from '../common/Utils';
import recipesdrinks from '../resources/img/recipes-drinks.png';
import { manageLanguage, getTextWithoutHtmlTags } from '../common/Utils';

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
            lastFeature: [],
            language: 'english'
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ language: nextProps.language });
    }

    componentDidMount() {
        let totalTipsCounter = 0;
        let totalRecipesCounter = 0;
        let totalDidUKnowCounter = 0;
        let totalFeaturesCounter = 0;
        let currentComponent = this;
        currentComponent.setState({ language: this.props.language });

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
                return manageLanguage(this.state.language, 'ÚLTIMA RECETA', 'LAST RECIPE');

            case 'didyouknow':
                return manageLanguage(this.state.language, 'ÚLTIMA SABIAS QUE?', 'LAST DID YOU KNOW?');

            case 'tips':
                return manageLanguage(this.state.language, 'ÚLTIMO CONSEJO', 'LAST TIPS');

            case 'information':
                return manageLanguage(this.state.language, 'NUEVA FUNCIONALIDAD', 'NEW FEATURE');
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

    cardElement(id, title, title_es, content, content_es, type, subtype) {

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
                                <h3>{manageLanguage(this.state.language, title_es, title)}</h3>
                                <p>{beautyString(manageLanguage(this.state.language, content_es, content), 200)}...</p>
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
                                        <img className="icon-news" src={this.getImageType(element.type, element.subtype)} width="68px" alt="" />
                                    </div>
                                    <div class="our-services-text">
                                        <h4>{this.getTitleType(element.type)}</h4>
                                        <h3>{manageLanguage(this.state.language, element.title_es, element.title)}</h3>
                                        <p>{beautyString(manageLanguage(this.state.language, getTextWithoutHtmlTags(element.content_es), getTextWithoutHtmlTags(element.content)), 200)}...</p>
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
            <div class="news-panel">
                <h2 class="title-news">{manageLanguage(this.state.language, 'RESUMEN DEL CONTENIDO', 'SUMMARY CONTENT')}</h2>

                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <ul id="menu">
                            <li><Link to="/post/all"><span class="badge-name">{manageLanguage(this.state.language, 'Ver todos', 'Read all')}</span> <Badge>{this.state.totalTips + this.state.totalRecipes + this.state.totalDidUKnow + this.state.totalFeatures}</Badge></Link></li>
                            <li><Link to="/post/tips"> <span class="badge-name">{manageLanguage(this.state.language, 'Consejos', 'Tips')}</span> <Badge>{this.state.totalTips}</Badge></Link></li>
                            <li><Link to="/post/didyouknow"><span class="badge-name">{manageLanguage(this.state.language, 'Sabias que?', 'Did you know?')}</span> <Badge>{this.state.totalDidUKnow}</Badge></Link></li>
                            <li><Link to="/post/recipe"><span class="badge-name">{manageLanguage(this.state.language, 'Recetas', 'Recipes')}</span> <Badge>{this.state.totalRecipes}</Badge></Link></li>
                            <li><Link to="/post/information"><span class="badge-name">{manageLanguage(this.state.language, 'Nuevas funcionalidades', 'New features')}</span> <Badge>{this.state.totalFeatures}</Badge></Link></li>
                        </ul>
                    </div>
                </div>

                <div class="row scrollable-div">
                    {this.cardElement(this.state.lastTips.id, this.state.lastTips.title, this.state.lastTips.title_es, getTextWithoutHtmlTags(this.state.lastTips.content), getTextWithoutHtmlTags(this.state.lastTips.content_es), this.state.lastTips.type, this.state.lastTips.subtype)}
                    {this.cardElement(this.state.lastDidUKnow.id, this.state.lastDidUKnow.title, this.state.lastDidUKnow.title_es, getTextWithoutHtmlTags(this.state.lastDidUKnow.content), getTextWithoutHtmlTags(this.state.lastDidUKnow.content_es), this.state.lastDidUKnow.type, this.state.lastDidUKnow.subtype)}
                    {this.cardElement(this.state.lastRecipe.id, this.state.lastRecipe.title, this.state.lastRecipe.title_es, getTextWithoutHtmlTags(this.state.lastRecipe.content), getTextWithoutHtmlTags(this.state.lastRecipe.content_es), this.state.lastRecipe.type, this.state.lastRecipe.subtype)}
                    {this.cardElmentList(this.state.lastFeature)}

                    <Link className="btn btn-primary" to="/about" >
                        <img id="img-hands" className="icon-news" src={mark} width="68px" alt="" />
                    </Link>

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