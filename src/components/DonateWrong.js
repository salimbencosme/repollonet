import React,{Component} from 'react';
import img from '../resources/img/cancel.png';
import { Link } from "react-router-dom";

var linkStyle = {
    'text-decoration':'underline'
  };

var label={
    'font-size': '2em',
    'color': '#f30108'
}

class DonateWrong extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <center>
                <img className="img-small" src={img} />
                <label style={label}>We regret that you have canceled your donation, if something happened or you have something to communicate, please do not hesitate to contact us.  <Link style={linkStyle} to="contact">Click here to tell us</Link></label>
                </center>
            </div>
        );
    }
}


export default DonateWrong;