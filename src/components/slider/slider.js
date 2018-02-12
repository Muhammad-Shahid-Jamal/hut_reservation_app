import React, { Component } from 'react';
import $ from "jquery";
import "./css/slider.css";
import "animate.css";
export default class Slider extends Component{
    constructor(props){
        super(props);
        let indexNumber = 1;
        setInterval(()=>{
            $(".slider span").removeClass("show-slide");
            $(".slider span p").removeClass("bounceInDown");
            $(".slider span h1").removeClass("bounceInUp");
            $($(".slider span")[indexNumber]).addClass("show-slide");
            setTimeout(()=>{
                $(".show-slide p").addClass("bounceInDown");
                $(".show-slide h1").addClass("bounceInUp");
            },500);
            indexNumber++;
            if(indexNumber> $(".slider span").length-1){
                indexNumber=0;
            }
        },6000);
    }
    render(){
        return(
            <section className="slider">
                <span className="slide1 show-slide">
                    <div className="slide-content">
                        <div className="container">
                            <p className="animated bounceInDown">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <h1 className="animated bounceInUp">Lorem Ipsum</h1>
                        </div>
                    </div>
                </span>
                <span className="slide2">
                    <div className="slide-content">
                        <div className="container">
                            <p className="animated">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <h1 className="animated">Lorem Ipsum</h1>
                        </div>
                    </div>
                </span>
                <span className="slide3">
                    <div className="slide-content">
                        <div className="container">
                            <p className="animated">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <h1 className="animated">Lorem Ipsum</h1>
                        </div>
                    </div>
                </span>
            </section>
        );
    }
}