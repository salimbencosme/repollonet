import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { saveContact } from '../common/ApiServices';
import { currentDateWithFormat } from '../common/Utils';

import { countPost } from '../common/ApiServices';


class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            title: '',
            content: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log("FROM CONTACT: "+countPost('recipe'));
        

        
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
            NotificationManager.success('Message sent succesfully');
        } catch (e) {
            NotificationManager.error('Could not save the information');
        }


    }

    render() {

        return (
            <div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-12 col-lg-12 pb-5">

                            <form onSubmit={this.handleSubmit}>
                                <div class="card-contact border-primary rounded-0">
                                    <div class="card-header p-0">
                                        <div class="bg-info text-white text-center py-2">
                                            <h3><i class="fa fa-envelope"></i> Contact Us</h3>
                                            <p class="m-0 color-white">Write us, we are eager to hear you</p>
                                        </div>
                                    </div>


                                    <div class="card-body p-3">
                                        <label class="required-symbol-style">Requiered fields(*)</label>

                                        <center>
                                            <div class="form-group">
                                                <div>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                                    </div>

                                                    <div>
                                                        <input type="text" class="form-control" id="fullname" name="fullname" placeholder="Fullname*" value={this.state.fullname} onChange={this.handleChange} required />
                                                    </div>


                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                                    </div>
                                                    <span class="text-indicator-contact">(leave your email if you want us to respond back or to contact you)</span>
                                                    <input type="email" class="form-control" id="email" name="email" placeholder="example@gmail.com" value={this.state.email} onChange={this.handleChange} />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                                    </div>
                                                    <input type="text" class="form-control" id="title" name="title" placeholder="Title*" value={this.state.title} onChange={this.handleChange} required />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="fa fa-comment text-info"></i></div>
                                                    </div>
                                                    <textarea id="content" name="content" rows="16" class="form-control" placeholder="Send us your message*" value={this.state.content} onChange={this.handleChange} required></textarea>
                                                </div>
                                            </div>


                                            <div class="text-center">
                                                <input type="submit" value="Send" class="btn btn-info btn-block rounded-0 py-2" />
                                            </div>
                                        </center>

                                    </div>
                                </div>


                            </form>


                        </div>
                    </div>
                </div>

                <NotificationContainer />

            </div>
        );
    }

}

export default Contact;