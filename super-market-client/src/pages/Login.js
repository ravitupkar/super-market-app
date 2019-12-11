import React, { Component } from 'react'
import UserApi from "../UserApi";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isAuthenticated: false, 
            email : '', 
            password :'',
            message : ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
      handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        const payload = { email, password };
        await UserApi.UserLogin(payload).then(res => {
          console.log(`Your are Login successfully`);
          // window.alert(`Your are register successfully`);
          // console.log(JSON.stringify(res.data.result));
          // console.log(JSON.stringify(res.data.token));
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          this.setState({
            email : '', 
            password :'', 
            isAuthenticated: true,
            message : "Your are Login successfully",
          });
          localStorage.setItem("isAuthenticated", this.state.isAuthenticated);
        }).catch(err => {
          console.log("err");
        })
        if (this.state.isAuthenticated) {
          console.log(JSON.parse(localStorage.getItem("userInfo")));
        }
      }

  render() {
    return (
      <>
        <div className="breadcrumbs">
            <div className="container">
                <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                    <li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
                    <li className="active">Login Page</li>
                </ol>
            </div>
        </div>
        <div className="login">
            <div className="container">
                <h2>Login Form</h2>
            
                <div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
                    <form onSubmit={this.handleSubmit}>
                        <input type="email" name="email" placeholder="Email Address" required="" value={this.state.email}
onChange={this.handleInputChange}/>
                        <input type="password" name="password" placeholder="Password" required="" value={this.state.password}
onChange={this.handleInputChange}/>
                        <div className="forgot">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <input type="submit" value="Login"/>
                    </form>
                </div>
                <h4>For New People</h4>
                <p><a href="registered.html">Register Here</a> (Or) go back to <a href="index.html">Home<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></p>
            </div>
        </div>
      </>
    )
  }
}
