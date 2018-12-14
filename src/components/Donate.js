import React, { Component } from 'react';
import themeHandler from '../common/ThemeHandler';
import { manageLanguage, getSelectedLanguage } from '../common/Utils';
import imgBlueLight from '../resources/img/donation.png';
import imgBlueDark from '../resources/img/donation-blue.png';
import imgRed from '../resources/img/donation-red.png';
import imgOrange from '../resources/img/donation-orange.png';
import imgPurple from '../resources/img/donation-purple.png';
import imgYellow from '../resources/img/donation-yellow.png';

var pcustom = {
    'font-size': '2em',
    'line-height': '45px'
}

class Donate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: 'english',
            cont: 0
        }

        this.handleClick = this.handleClick.bind(this);
        setInterval(this.handleClick, 1000);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ language: getSelectedLanguage() });
    }

    componentDidMount() {
        themeHandler("default");
        this.setState({ language: getSelectedLanguage() });
    }

    handleClick() {
        if (this.state != undefined) {
            let contArray = this.state.cont + 1;

            if (contArray === 6) {
                this.setState({ cont: 0 });
            } else {
                this.setState({ cont: contArray });
            }
        }
    }

    changePic() {

        switch (this.state.cont) {
            case 0:
                return imgBlueLight;
            case 1:
                return imgRed;
            case 2:
                return imgBlueDark;
            case 3:
                return imgOrange;
            case 4:
                return imgPurple;
            case 5:
                return imgYellow;
        }

    }




    render() {
        return (

            <div class="div-container-scroll">
                <div class="pull-left">
                    <h2 id="titlePost" class="titleDetails">{manageLanguage(this.state.language, 'DONAR', 'DONATE')}</h2>
                </div>
                <br />
                <br />
                <center>

                    <img className="img-small" src={this.changePic()} />

                    <p style={pcustom}>
                        {manageLanguage(this.state.language, 'Ayúdenos a mejorar este proyecto para que esté siempre disponible y tenga un equipo de escritores que estén mejorando e ingresando nuevas recetas, consejos, ¿Sabía que? y otra información.', 'Help us improve this project so that it is always available and has a team of writers improving and entering new recipes, tips, Did you know and other information.')}
                    </p>

                    <p style={pcustom}>
                        {manageLanguage(this.state.language, 'Su contribución puede ayudar a este proyecto a llegar a más personas y, en el mejor de los casos, cambiar la vida de los demás.', 'Your contribution can help this project reach more people and in the best of cases, change the lives of others.')}
                    </p>

                    <br />
                    <br />
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value="8SHHC3N4BYGQE" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/en_DO/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                </center>

                <br />

                <br />
                <br />

                <br />
                <br />

                <br />
                <br />
            </div>
        );
    }

}


export default Donate;