import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import "./css/navbar.css";
import logo from "./images/web_icon.png";

export default class Navbar extends Component{
    constructor(props){
        super(props);
        this.login = <ul className="nav navbar-nav navbar-right">
                        <li>
                            <NavLink to="/sign-up">
                                <span className="glyphicon glyphicon-user"></span> Sign Up
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">
                                <span className="glyphicon glyphicon-log-in"></span> Login
                            </NavLink>
                        </li>
                    </ul>;
        if(this.props.isUserAuth.auth){
            this.login=<ul className="nav navbar-nav navbar-right">
                            <li>
                                <NavLink to="/user-profile">
                                    <span className="glyphicon glyphicon-user"></span> {this.props.isUserAuth.userName}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/logout">
                                    <span className="glyphicon glyphicon-log-in"></span> Logout
                                </NavLink>
                            </li>
                        </ul>;
        }
    }
    render(){
        return(
            <nav className="navbar navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span> 
                        </button>
                        <NavLink to="/" className="navbar-brand" isActive={()=>{return false;}}>
                            <img src={logo} alt="logo"/>
                            <span>
                                Hut_Reservation
                            </span>
                        </NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-main">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/view-huts">View Huts</NavLink>
                            </li>
                        </ul>
                        {
                            this.login
                        }
                    </div>
                </div>
            </nav>
        );
    }
}