import React, { Component } from 'react';
import "./css/login.css";

export default class Login extends Component{
    render(){
        return(
            <div className="container login-sec">
                <h3 className="text-center">Login</h3>
                <div className="row">
                    <div className="col-sm-8 col-md-6 col-lg-6 col-sm-push-2 col-md-push-3 col-lg-push-3 well">
                        <form role="form">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="userEmail" placeholder="example@abc.com" required/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" placeholder="1234" required/>
                            </div>
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}