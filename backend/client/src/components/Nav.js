import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Nav extends React.Component{
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    let link;
    if (user.isAuthenticated) {
      link = (<li>
        <NavLink className="flex items-center" to="/sign-up">
          <img className="h-auto w-4 inline mr-2" alt="sign-up" src="/user.png"></img>
          <span className="font-normal text-black text-opacity-80 text-sm">Sign Up</span>
        </NavLink>
      </li>);
    } else {
      link = (<li>
        <NavLink className="flex items-center" to="/" onClick={this.onLogoutClick}>
          <img className="h-auto w-4 inline mr-2" alt="logout" src="/exit.png"></img>
          <span className="font-normal text-black text-opacity-80 text-sm">Log Out</span>
        </NavLink>
      </li>);
    }

      return (
        <nav className="px-20 py-5 bg-transparent">
          <div className="flex justify-between items-center">
              <div className="h-auto w-36">
                <NavLink to="/">
                  <img alt="Miahy" src="/full-logo.png"></img>
                </NavLink>
              </div>

              <div>
                <ul className="flex items-center space-evenly">
                  <li className="mr-5">
                    <NavLink to="/become-a-counselor" className="flex items-center">
                      <img className="h-auto w-4 inline mr-2" alt="become-a-counselor" src="/group.png"></img>
                      <span className="font-normal text-black text-opacity-80 text-sm">Become a Counselor</span>
                    </NavLink>
                  </li>

                  <li className="mr-5">
                    <NavLink className="flex items-center" to="/contact-us">
                      <img className="h-auto w-4 inline mr-2" alt="contact-us" src="/mail.png"></img>
                      <span className="font-normal text-black text-opacity-80 text-sm">Contact Us</span>
                    </NavLink>
                  </li>

                  {link}
                </ul>
              </div>
          </div>

          
        </nav>
      );
  }
}

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Nav);