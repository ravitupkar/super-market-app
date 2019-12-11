import React, { Component } from 'react'
import UserApi from "../UserApi";

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isAuthenticated: false, 
            fName : '', 
            lName : '', 
            subscribe : false , 
            email : '', 
            password :'', 
            cpassword : '',
            termsandconditions : ''
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
      handleSubmit  = async (event) => {
        alert('Your favorite flavor is: ' + this.state);
        console.log(this.state);
        const { fName, lName, subscribe, email, password, cpassword,termsandconditions} = this.state;
        const payload = { fName, lName, subscribe, email, password, cpassword,termsandconditions};
        await UserApi.UserLogin(payload).then(res => {
          window.alert(`Movie inserted successfully`)
          this.setState({
            fName : '', 
            lName : '', 
            subscribe : false , 
            email : '', 
            password :'', 
            cpassword : '',
            termsandconditions : ''
          })
        })
        event.preventDefault();
      }

      

  render() {
    return (
      <>
        <div className="breadcrumbs">
                <div className="container">
                    <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                        <li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
                        <li className="active">Register Page</li>
                    </ol>
                </div>
            </div>

            <div className="register">
                <div className="container">
                    <h2>Register Here</h2>
                    <div className="login-form-grids">
                        <h5>profile information</h5>
                        <form onSubmit={this.handleSubmit} method="post">
                            <input type="text" name="fName" placeholder="First Name..." required="" value={this.state.fName}
onChange={this.handleInputChange}/>
                            <input type="text" name="lName" placeholder="Last Name..." required="" value={this.state.lName}
onChange={this.handleInputChange}/>
                       
                        <div className="register-check-box">
                            <div className="check">
                                <label className="checkbox"><input type="checkbox" name="subscribe" checked={this.state.subscribe}
            onChange={this.handleInputChange} /><i> </i>Subscribe to Newsletter</label>
                            </div>
                        </div>
                        <h6>Login information</h6>
<input type="email" name="email" placeholder="Email Address" required="" value={this.state.email}
onChange={this.handleInputChange}/>
<input type="password" name="password" placeholder="Password" required="" value={this.state.password}
onChange={this.handleInputChange}/>
<input type="password" name="cpassword" placeholder="Password Confirmation" required="" value={this.state.cpassword}
onChange={this.handleInputChange}/>
<div className="register-check-box">
<div className="check">
    <label className="checkbox"><input type="checkbox" name="termsandconditions" checked={this.state.termsandconditions}
            onChange={this.handleInputChange} /><i> </i>I accept the terms and conditions</label>
</div>
</div>
<input type="submit" value="Register"/>
</form>
                    </div>
                    <div className="register-home">
                        <a href="/">Home</a>
                    </div>
                </div>
            </div>
      </>
    )
  }
}
