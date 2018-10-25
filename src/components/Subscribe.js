import React, {Component} from 'react';

class Subscribe extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-12 col-lg-12 pb-5">

                        <form action="mail.php" method="post">
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
                                            <input type="email" class="form-control" id="nombre" name="email" placeholder="example@gmail.com" required />
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






        </div>
        );
    }

}


export default Subscribe;