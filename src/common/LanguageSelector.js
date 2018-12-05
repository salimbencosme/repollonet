import React, { Component } from 'react';
import spanish from '../resources/img/spanish.png';
import english from '../resources/img/english.png';

var icons = {
    'width': '40px',
    'margin': '5px',
    'position': 'relative',
    'float': 'right',
    'z-index': '10000000000000',
}

class LanguageSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedEnglish: true,
            selectedSpanish: false,
        }
        this.selectLanguage = this.selectLanguage.bind(this);
    }

    componentDidMount(){
        
        if(localStorage.getItem('language-storage') != null){
            this.setLanguage(localStorage.getItem('language-storage'));
        }
    }

    selectLanguage(event) {
        console.log("ENTROQ");
        console.log(event.target.id);
        this.setLanguage(event.target.id);
    }

    setLanguage(languageParam){

        switch (languageParam) {
        
            case 'english':
                this.setState(
                    {
                        selectedEnglish: true,
                        selectedSpanish: false,
                    }
                );
                break
            case 'spanish':
                this.setState(
                    {
                        selectedEnglish: false,
                        selectedSpanish: true,
                    }
                );
                break
        }
        this.props.selectGlobalLanguage(languageParam);
    }

    render() {
        return (
            <div class="pull-right">
                <img id="english" className={this.state.selectedEnglish ? 'languageSelected' : ''} style={icons} src={english} onClick={this.selectLanguage} />
                <img id="spanish" className={this.state.selectedSpanish ? 'languageSelected' : ''} style={icons} src={spanish} onClick={this.selectLanguage}  />
            </div>
        );
    }
}
export default LanguageSelector;