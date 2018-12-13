import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { saveContact } from '../common/ApiServices';
import { currentDateWithFormat, manageLanguage, getSelectedLanguage } from '../common/Utils';
import themeHandler from '../common/ThemeHandler';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            title: '',
            content: '',
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
                fullname: (event.target.id === 'fullname') ? event.target.value : this.state.fullname,
                email: (event.target.id === 'email') ? event.target.value : this.state.email,
                title: (event.target.id === 'title') ? event.target.value : this.state.title,
                content: (event.target.id === 'content') ? event.target.value : this.state.content
            }
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        let info = {
            content: this.state.content,
            date_created: currentDateWithFormat(),
            email: this.state.email,
            fullname: this.state.fullname,
            title: this.state.title
        }

        try {
            saveContact(info);
            this.setState(
                {
                    fullname: '',
                    email: '',
                    title: '',
                    content: ''
                }
            );
            NotificationManager.success(manageLanguage(this.state.language, 'Mensaje enviado con éxito', 'Message sent succesfully'));
        } catch (e) {
            NotificationManager.error(manageLanguage(this.state.language, 'No se pudo guardar la información.', 'Could not save the information'));
        }


    }

    render() {

        return (
            <div class="div-container-scroll">
                <div class="container">

                    <div class="row justify-content-center">
                        <div class="col-12 col-md-12 col-lg-12 pb-5">

                            <form onSubmit={this.handleSubmit}>
                                <div class="card-contact border-primary rounded-0">
                                    <div class="card-header p-0">
                                        <div class="bg-info text-white text-center py-2">
                                            <h3><i class="fa fa-envelope"></i> {manageLanguage(this.state.language, 'Contáctenos', 'Contact Us')}</h3>
                                            <p class="m-0 color-white">{manageLanguage(this.state.language, 'Escríbenos, estamos ansiosos por escucharte.', 'Write us, we are eager to hear you')}</p>
                                        </div>
                                    </div>


                                    <div class="card-body p-3">
                                        <label class="required-symbol-style">{manageLanguage(this.state.language, 'Campos requeridos(*)', 'Requiered fields(*)')}</label>

                                        <center>
                                            <div class="form-group">
                                                <div>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                                    </div>

                                                    <div>
                                                        <input type="text" class="form-control" id="fullname" name="fullname" placeholder={manageLanguage(this.state.language, 'Nombre completo*', 'Fullname*')} value={this.state.fullname} onChange={this.handleChange} required />
                                                    </div>


                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                                    </div>
                                                    <span class="text-indicator-contact">{manageLanguage(this.state.language, '(Deje escrito su correo electrónico si desea que le respondamos o contactarnos con usted)', '(leave your email if you want us to respond back or to contact you)')}</span>
                                                    <input type="email" class="form-control" id="email" name="email" placeholder={manageLanguage(this.state.language, 'ejemplo@gmail.com', 'example@gmail.com')} value={this.state.email} onChange={this.handleChange} />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                                    </div>
                                                    <input type="text" class="form-control" id="title" name="title" placeholder={manageLanguage(this.state.language, 'Título*', 'Title*')} value={this.state.title} onChange={this.handleChange} required />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="fa fa-comment text-info"></i></div>
                                                    </div>
                                                    <textarea id="content" name="content" rows="16" class="form-control" placeholder={manageLanguage(this.state.language, 'Envíanos tu mensaje *', 'Send us your message*')} value={this.state.content} onChange={this.handleChange} required></textarea>
                                                </div>
                                            </div>


                                            <div class="pull-right space-button">
                                                <input type="submit" value={manageLanguage(this.state.language, 'Enviar', 'Send')} class="btn btn-info btn-block rounded-0 py-2" />
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

export default Contact;