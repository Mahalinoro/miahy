import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {ReactComponent as Line} from '../assets/line.svg';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";

class SignUp extends React.Component{
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      succesfully: false,
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/patient-dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  HandleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  HandleOnSubmit = e =>{
    e.preventDefault();
    const newUser = {
        name: this.state.name,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        password: this.state.password
      };

    this.props.registerUser(newUser, this.props.history); 
    this.setState({success: true});    
  };
   
    render() {
      const { errors } = this.state;

      let content;
      if(this.state.success){
        content = (
          <div className="bg-primary z-0 bg-cover h-96 w-screen bg-no-repeat bg-opacity-50 pt-52">
          <div className="sign-form h-auto w-1/3 mx-auto py-10 px-14">
            <p className="text-3xl font-medium text-black text-opacity-70 mb-2 text-center">Hi <span className="text-primary">{this.state.name}</span>!</p>
            <div className="flex justify-center mb-8">
              <Line />
            </div>
            <p className="text-black text-opacity-80 font-normal text-center mb-4">Thanks for signing up with Miahy, your account has been created succesfully! You can now sign in to your account to start using it.</p>
            <NavLink to="/sign-in" className="inline-block text-center border-2 bg-primary rounded-md px-4 py-2 w-full text-white font-bold hover:bg-white hover:text-primary hover:border-primary">SIGN IN</NavLink>
            
          </div>
          </div>

        );
      }else{
        content = (
          <div className="bg-primary z-0 bg-cover h-96 w-screen bg-no-repeat bg-opacity-50 pt-52">
                <div className="sign-form h-auto w-1/3 mx-auto py-10 px-14">
                  <p className="text-5xl font-bold text-black text-opacity-70 mb-2 text-center">SIGN UP</p>
                  <div className="flex justify-center mb-8">
                    <Line />
                  </div>
                  
                  <form noValidate onSubmit={this.HandleOnSubmit} className="px-5">
                    <label className="text-opacity-80 text-black">full name</label>
                    <span className="text-sm text-red-400 font-bold inline-block">{errors.name}</span>
                    <div className="mb-4">
                      <input className="border-b-2 border-opacity-50 bg-transparent w-80 mr-2 pl-2 py-1" 
                      onChange={this.HandleOnChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text" placeholder="eg. John Doe"></input>
                      <img alt="user" className="h-auto w-5 inline" src="/user-transparent.png"></img>
                    </div>

                    <label className="text-opacity-80 text-black">email address</label>
                    <span className="text-sm text-red-400 font-bold inline-block">{errors.email}</span>
                    <div className="mb-4">
                      <input className="border-b-2 border-opacity-50 bg-transparent w-80 mr-2 pl-2 py-1"
                      onChange={this.HandleOnChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email" placeholder="eg. j.doe@gmail.com"></input>
                      <img alt="mail" className="h-auto w-5 inline" src="/arroba.png"></img>
                    </div>

                    <label className="text-opacity-80 text-black">phone number</label>
                    <span className="text-sm text-red-400 font-bold inline-block">{errors.phoneNumber}</span>
                    <div className="mb-4">
                      <input className="border-b-2 border-opacity-50 bg-transparent w-80 mr-2 pl-2 py-1"
                      onChange={this.HandleOnChange}
                      value={this.state.phoneNumber}
                      error={errors.phoneNumber}
                      id="phoneNumber"
                      type="tel" placeholder="eg. +261324651995"></input>
                      <img alt="phone" className="h-auto w-5 inline" src="/phone.png"></img>
                    </div>

                    <label className="text-opacity-80 text-black">password</label>
                    <span className="text-sm text-red-400 font-bold inline-block">{errors.password}</span>
                    <div className="mb-8">
                      <input className="border-b-2 border-opacity-50 bg-transparent w-80 mr-2 pl-2 py-1" 
                      onChange={this.HandleOnChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password" autocomplete="on" placeholder="Min. 6 characters"></input>
                      <img alt="padlock" className="h-auto w-5 inline" src="/padlock.png"></img>
                    </div>

                    <button type="submit" className="border-2 bg-primary rounded-md px-4 py-2 w-full text-white font-bold hover:bg-white hover:text-primary hover:border-primary">SIGN UP</button>
                    
                  </form>
                </div>

                <div className="sign-form h-auto w-1/3 mx-auto py-5 px-7 my-6">
                  <p className="text-center text-base text-opacity-80 text-black">Already Have An Account? <span><NavLink to="/sign-in" className="text-primary font-bold">SIGN IN</NavLink></span></p>
                </div>
              </div>

        );
      }

        return (          
          <div className="w-screen">
            <div className="signup-bg bg-cover bg-center h-96 bg-no-repeat">
              {content}
            </div>

          </div>
          
        );
    }
}


SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUp));
