import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-12 col-lg-12 pb-5">

                            <form action="mail.php" method="post">
                                <div class="card-contact border-primary rounded-0">
                                    <div class="card-header p-0">
                                        <div class="bg-info text-white text-center py-2">
                                            <h3><i class="fa fa-envelope"></i> Contact Us</h3>
                                            <p class="m-0 color-white">Write us, we are eager to hear you</p>
                                        </div>
                                    </div>


                                    <div class="card-body p-3">
                                        <center>
                                        <div class="form-group">
                                            <div>
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                                </div>
                                                <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Fullname" required />
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div>
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                                </div>
                                                <input type="email" class="form-control" id="nombre" name="email" placeholder="example@gmail.com" required />
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div>
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="fa fa-comment text-info"></i></div>
                                                </div>
                                                <textarea rows="16" class="form-control" placeholder="Send us your message" required></textarea>
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






            </div>
        );
    }

}

export default Contact;