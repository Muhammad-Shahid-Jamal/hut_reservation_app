import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/header/navbar/navbar";
import Slider from "./components/slider/slider";
import SignUp from "./components/signup/signup";
import Login from "./components/login/login";
import ViewHuts from "./components/view_huts/view_huts";
import ViewDetail from "./components/view_detail/view_detail";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    // let users = JSON.stringify([
    //   {
    //     userName:"shahid",
    //     userEmail:"shahid@abc.com",
    //     userPassword:"abc123"
    //   }
    // ]);
    // window.localStorage.setItem("users",users);
    this.state = {
      auth:false,
      userName:null
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar isUserAuth={this.state}/>
          <Route exact path="/" component={Slider}/>
          <Route exact path="/sign-up" component={SignUp}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/view-huts" component={ViewHuts}/>
          <Route exact path="/view_detail/:id" component={ViewDetail}/>
        </div>
      </Router>
    );
  }
}

export default App;
