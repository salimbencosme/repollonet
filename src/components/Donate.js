import React, { Component } from 'react';
import themeHandler from '../common/ThemeHandler';
import img from '../resources/img/donation.png';

var pcustom = {
    'font-size': '2em',
    'line-height': '45px'
}

class Donate extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        themeHandler("default");
    }

    render() {
        return (

            <div>
                <br />
                <br />

                <center>

                    <img className="img-small" src={img} />

                    <p style={pcustom}>
                        Help us improve this project so that it is always available and has a team of writers improving and entering new recipes, tips, Did you know and other information.
                </p>

                    <p style={pcustom}>
                        Your contribution can help this project reach more people and in the best of cases, change the lives of others.
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
            </div>
        );
    }

}


export default Donate;