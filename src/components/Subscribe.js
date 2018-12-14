import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { saveSubscribe } from '../common/ApiServices';
import { currentDateWithFormat, manageLanguage, getSelectedLanguage } from '../common/Utils';
import themeHandler from '../common/ThemeHandler';
import hands from '../resources/img/hand.svg';

var hansStyle={
    width: '50px',
    float: 'left',
    position: 'relative',
    top: '-13px'
}

class Subscribe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            language: 'english'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ language: getSelectedLanguage() });
    }

    componentDidMount() {
        themeHandler("default");
        this.setState({ language: getSelectedLanguage() });
    }

    handleChange(event) {
        this.setState(
            {
                email: (event.target.id === 'email') ? event.target.value : this.state.email
            }
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        let info = {
            date_created: currentDateWithFormat(),
            email: this.state.email
        }

        try {
            saveSubscribe(info);
            this.setState(
                {
                    email: ''
                }
            );

            NotificationManager.success(manageLanguage(this.state.language, 'Suscrito exitosamente', 'Successfully subscribed'));
        } catch (e) {
            NotificationManager.error(manageLanguage(this.state.language, 'No se pudo guardar la información.', 'Could not save the information'));
        }

    }

    getCurrentDateWithFormat() {
        let dateCustom = new Date();
        let day = dateCustom.getDate();
        let month = dateCustom.getUTCMonth() + 1;
        let year = dateCustom.getUTCFullYear();
        let hours = dateCustom.getUTCHours();
        let minutes = dateCustom.getUTCMinutes();
        let seconds = dateCustom.getUTCMinutes();

        if (day < 10) { day = '0' + day; }

        if (month < 10) { month = '0' + month; }

        return day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;

    }



    render() {
        return (
            <div class="div-container-scroll">
                <div class="pull-left">
                    <h2 id="titlePost" class="titleDetails">{manageLanguage(this.state.language, 'SUSCRIBIR', 'SUBSCRIBE')}</h2>
                </div>
                <br />
                <br />
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-12 col-lg-12 pb-5">

                            <form onSubmit={this.handleSubmit}>
                                <div class="card-contact border-primary rounded-0">
                                    <div class="card-header p-0">
                                        <div id="custom-card" class="bg-info text-white text-center py-2">
                                            <h3><i class="fa fa-envelope"></i> <img style={hansStyle} src={hands} /></h3>
                                            <p class="m-0 color-white" style={{'font-size': '15px'}}>{manageLanguage(this.state.language, 'Queremos informarle sobre el nuevo contenido y los nuevos cambios en la aplicación.', 'We want to inform you about the new content and the new changes in the application.')}</p>
                                        </div>
                                    </div>
                                        <br/>

                                    <div class="card-body p-3">

                                        <center>

                                            <div class="form-group">
                                                <div>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                                    </div>
                                                    <input type="email" class="form-control" id="email" name="email" placeholder={manageLanguage(this.state.language, 'ejemplo@gmail.com', 'example@gmail.com')} value={this.state.email} onChange={this.handleChange} required />
                                                </div>
                                            </div>

                                            <div class="pull-right space-button">
                                                <input type="submit" value={manageLanguage(this.state.language, 'Suscribir', 'Subscribe')} class="btn btn-info btn-block rounded-0 py-2" />
                                            </div>
                                            <br />
                                            <br />
                                        </center>

                                    </div>
                                </div>


                            </form>


                        </div>
                    </div>
                </div>



                <NotificationContainer />

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


export default Subscribe;