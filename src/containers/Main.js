import React, { Component } from 'react';

import Nav from '../components/Nav';
import News from '../components/News';
import Post from '../components/Post';
import { Grid, Row, Col } from 'react-bootstrap';
import LanguageSelector from '../common/LanguageSelector';



class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            language: 'english'
        }
        this.selectGlobalLanguage = this.selectGlobalLanguage.bind(this);
    }

    selectGlobalLanguage(languageSelected) {
        this.setState({ language: languageSelected });
        localStorage.setItem('language-storage', languageSelected);
    }

    componentDidMount(){

        if(localStorage.getItem('language-storage') != null){
            this.setState({ language: localStorage.getItem('language-storage') });
        }else{
            localStorage.setItem('language-storage', this.state.language);
        }
    }

    render() {
        
        const childrenWithExtraProp = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
              language: this.state.language
            });
          });

        return (
            <div>
                <Nav language={this.state.language} classparam="nav-bar-style-blue" />
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <LanguageSelector selectGlobalLanguage={this.selectGlobalLanguage} />
                            <br />
                            {childrenWithExtraProp}
                            <br />
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="panelNews">
                                <News language={this.state.language} />
                            </div>
                        </Col>
                    </Row>

                </Grid>

            </div>

        );

    }


}
export default Main;