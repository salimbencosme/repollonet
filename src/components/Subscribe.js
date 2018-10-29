import React, {Component} from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {saveSubscribe} from '../common/ApiServices';
import {currentDateWithFormat} from '../common/Utils';

class Subscribe extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event){
        this.setState(
            {
                email: (event.target.id === 'email') ? event.target.value : this.state.email
            }
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        let info =   {
            date_created: currentDateWithFormat(),
            email: this.state.email
        }

        try{
            saveSubscribe(info);
            this.setState(
                {
                    email: ''
                }
            );
    
            NotificationManager.success('Successfully subscribed');   
        }catch(e){
            NotificationManager.error('Could not save the information');
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



    render(){
        return(
            <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-12 col-lg-12 pb-5">

                        <form onSubmit={this.handleSubmit}>
                            <div class="card-contact border-primary rounded-0">
                                <div class="card-header p-0">
                                    <div class="bg-info text-white text-center py-2">
                                        <h3><i class="fa fa-envelope"></i> Subscribe</h3>
                                        <p class="m-0 color-white">We want to inform you about the new content and the new changes in the application</p>
                                    </div>
                                </div>


                                <div class="card-body p-3">
                                
                                    <center>
                    
                                    <div class="form-group">
                                        <div>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                            </div>
                                            <input type="email" class="form-control" id="email" name="email" placeholder="example@gmail.com" value={this.state.email} onChange={this.handleChange} required />
                                        </div>
                                    </div>

                                    <div class="text-center">
                                        <input type="submit" value="Subscribe" class="btn btn-info btn-block rounded-0 py-2" />
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


export default Subscribe;