import React,{Component} from 'react';
import themeHandler from '../common/ThemeHandler';

class Donate extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount() {
        themeHandler("default");
    }

    render(){
        return(
            <h1>Donations are here</h1>
        );
    }

}


export default Donate;