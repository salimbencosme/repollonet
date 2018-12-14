import React,{Component} from 'react';
import img from '../resources/img/cancel.png';
import { Link } from "react-router-dom";
import themeHandler from '../common/ThemeHandler';
import { manageLanguage, getSelectedLanguage } from '../common/Utils';

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


    render(){
        return(
            <div>
                <center>
                <img className="img-small" src={img} />
                <label style={label}>{manageLanguage(this.state.language,'Lamentamos que haya cancelado su donación, si sucedió algo o si tiene algo que comunicar, no dude en ponerse en contacto con nosotros.','We regret that you have canceled your donation, if something happened or you have something to communicate, please do not hesitate to contact us.')}  <Link style={linkStyle} to="contact">{manageLanguage(this.state.language,'Haga clic aquí para decirnos','Click here to tell us')}</Link></label>
                </center>
            </div>
        );
    }
}


export default DonateWrong;