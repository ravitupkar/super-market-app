import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        };
        var userInfo = JSON.parse(localStorage.getItem("userInfo"));

        console.log(userInfo.token);
    };
    
    
  render() {
    return (
      <>
        Profile
      </>
    )
  }
}
