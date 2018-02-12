import React, { Component } from 'react';
import Hut from "../hut/hut";
import "./css/view_huts.css";
import dumyImg from "../slider/images/slide-1.jpg";
export default class extends Component{
    render(){
        return(
            <div className="container view-huts">
                <div className="row row-equal">
                    <Hut hutImage={dumyImg} hutName="Sea View" hutId="1"/>
                    <Hut hutImage={dumyImg} hutName="Sea View" hutId="1"/>
                    <Hut hutImage={dumyImg} hutName="Sea View" hutId="1"/>
                    <Hut hutImage={dumyImg} hutName="Sea View" hutId="1"/>
                    <Hut hutImage={dumyImg} hutName="Sea View" hutId="1"/>
                </div>
            </div>
        )
    }
}