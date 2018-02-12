import React, { Component } from 'react';
import $ from "jquery";
import "./css/signup.css";

export default class SignUp extends Component{
    constructor(props){
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(e){
        e.preventDefault();
        let form = e.target;
        console.log("submit");
        let formData = {};
        $(form).serializeArray().forEach(x=>{
            formData[x.name] = x.value;
        });
        $(form).trigger("reset");
        let localStorage = window.localStorage;
        console.log(localStorage.getItem("users"));
    }
    render(){
        return(
            <div className="container signup-sec">
                <h3 className="text-center">SignUp</h3>
                <div className="row">
                    <div className="col-sm-8 col-md-6 col-lg-6 col-sm-push-2 col-md-push-3 col-lg-push-3 well">
                        <form role="form" onSubmit={this.submitForm}>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" className="form-control" name="userName" placeholder="Shahid" required/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="userEmail" placeholder="example@abc.com" required/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" placeholder="1234" required/>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" name="confirmPassword" placeholder="1234" required/>
                            </div>
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}