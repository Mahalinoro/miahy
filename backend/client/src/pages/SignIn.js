import React from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as Line} from '../assets/line.svg';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";

class SignIn extends React.Component{
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      const { user } = this.state.auth;
      if(user.role === "patient"){
        this.props.history.push("/patient-dashboard"); // push user to dashboard when they login
      } else if(user.role === "counselor") {
        this.props.history.push("/counselor-dashboard");
      } else if(user.role === "admin"){
        this.props.history.push("/admin-dashboard");
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {

      const { user } = this.state.auth;
      if(user.role === "patient"){
        this.props.history.push("/patient-dashboard"); // push user to dashboard when they login
      } else if(user.role === "counselor") {
        this.props.history.push("/counselor-dashboard");
      } else if(user.role === "admin"){
        this.props.history.push("/admin-dashboard");
      }
    };
      
    if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };
  onSubmit = e => {
      e.preventDefault();
      const userData = {
        email: this.state.email,
        password: this.state.password
      };

  this.props.loginUser(userData);
  };

    render() {
      const { errors } = this.state;

        return (          
          <div className="w-screen">
            <div className="signup-bg bg-cover bg-center h-96 bg-no-repeat">
              <div className="bg-primary z-0 bg-cover h-96 w-screen bg-no-repeat bg-opacity-50 pt-52">
                <div className="sign-form h-auto w-1/3 mx-auto py-10 px-14">
                  <p className="text-5xl font-bold text-black text-opacity-70 mb-2 text-center">SIGN IN</p>
                  <div className="flex justify-center mb-8">
                    <Line />
                  </div>
                  
                  <form noValidate onSubmit={this.onSubmit} className="px-5">
                    <label className="text-opacity-80 text-black">email address</label>
                    <span className="text-sm text-red-200">
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
                    <div className="mb-4">
                      <input className="border-b-2 border-opacity-50 bg-transparent w-80 mr-2 pl-2 py-1"
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email" placeholder="eg. j.doe@gmail.com"></input>
                      <img alt="mail" className="h-auto w-5 inline" src="/arroba.png"></img>
                    </div>

                    <label className="text-opacity-80 text-black">password</label>
                    <span className="text-sm text-red-20">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                    <div className="mb-8">
                      <input className="border-b-2 border-opacity-50 bg-transparent w-80 mr-2 pl-2 py-1"
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password" placeholder="**********"></input>
                      <img alt="padlock" className="h-auto w-5 inline" src="/padlock.png"></img>
                    </div>

                    <button className="border-2 bg-primary rounded-md px-4 py-2 w-full text-white font-bold hover:bg-white hover:text-primary hover:border-primary">SIGN IN</button>
                    
                  </form>
                </div>

                <div className="sign-form h-auto w-1/3 mx-auto py-5 px-7 my-6">
                  <p className="text-center text-base text-opacity-80 text-black">Don't Have An Account? <span><NavLink to="/sign-up" className="text-primary font-bold">SIGN UP</NavLink></span></p>
                </div>
              </div>
            </div>

          </div>
          
        );
    }
}

SignIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(SignIn);