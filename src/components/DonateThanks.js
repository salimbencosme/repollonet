import React, { Component } from 'react';
import img from '../resources/img/thankyou.png';
import { Link } from "react-router-dom";

class DonateThanks extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Link to="/post/all">
                <center>
                    <img className="img-welcome" src={img} />
                </center>
            </Link>
        );
    }
}


export default DonateThanks;