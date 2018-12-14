import React, { Component } from 'react';
import img from '../resources/img/thankyou.png';
import imgES from '../resources/img/thankyou-es.png';
import { Link } from "react-router-dom";
import themeHandler from '../common/ThemeHandler';
import {getSelectedLanguage } from '../common/Utils';

class DonateThanks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: 'english'
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ language: getSelectedLanguage() });
    }

    componentDidMount() {
        themeHandler("default");
        this.setState({ language: getSelectedLanguage() });
    }

    render() {
        return (
            <Link to="/post/all">
                <center>
                    <img style={{ width: '600px'}} className="img-welcome" src={this.state.language === 'english' ?  img : imgES} />
                </center>
            </Link>
        );
    }
}


export default DonateThanks;