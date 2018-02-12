import React, { Component } from 'react';
import {Link} from "react-router-dom";
import $ from "jquery";
import "./css/hut.css";

export default class Hut extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="col-sm-4 col-md-4 col-lg-4 single-hut">
                <div className="hut-image">
                    <img src={this.props.hutImage} className="img-responsive"/>
                </div>
                <h3 className="hutname-details">
                    <Link to={"/view_detail/"+this.props.hutId} >
                        {this.props.hutName}
                    </Link>
                </h3>
            </div>
        )
    }
}