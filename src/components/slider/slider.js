import React, { Component } from 'react';
import $ from "jquery";
import "./css/slider.css";
export default class Slider extends Component{
    constructor(props){
        super(props);
        let indexNumber = 1;
        setInterval(()=>{
            $(".slider span").removeClass("show-slide");
            $($(".slider span")[indexNumber]).addClass("show-slide");
            indexNumber++;
            if(indexNumber> $(".slider span").length-1){
                indexNumber=0;
            }
        },6000);
    }
    render(){
        return(
            <section className="slider">
                <span className="slide1 show-slide"></span>
                <span className="slide2"></span>
                <span className="slide3"></span>
            </section>
        );
    }
}