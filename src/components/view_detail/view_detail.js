import React, { Component } from 'react';

export default class ViewDetail extends Component{
    constructor(props){
        super(props);
        console.log(this.props.match.params);
    }
    render(){
        return(
            <div className="container view-details">
                
            </div>
        );
    }
}