import React from 'react';
import Home from './pages/Home.js';
import BecomeCounselor from './pages/BecomeCounselor.js';
import LearnMore from './pages/LearnMore.js';
import SignUp from './pages/SignUp.js';
import ContactUs from './pages/ContactUs.js';
import Nav from './components/Nav.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './pages/SignIn.js';
import PatientDashboard from './pages/PatientDashboard.js';
import CounselorDashboard from './pages/CounselorDashboard.js';
import AdminDashboard from './pages/AdminDashboard.js';
import CounselorBooking from './pages/CounselorBooking.js';
import Payment from './pages/Payment.js';
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


export default class App extends React.Component{
  render() {
    return (
    <Provider store={store}>
      <Router>
        <div className="absolute z-20 w-screen"> 
            <Nav /> 
        </div>
        <div>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/learn-more">
            <LearnMore />
          </Route>

          <Route path="/sign-up">
            <SignUp />
          </Route>

          <Route exact path="/sign-in">
            <SignIn />
          </Route>

          <Route path="/contact-us">
            <ContactUs />
          </Route>

          <Route path="/become-a-counselor">
            <BecomeCounselor />
          </Route>

          <Route path="/book">
            <CounselorBooking />
          </Route>   

          <Route path="/checkout">
            <Payment />
          </Route>     

            
          <Switch>
              <PrivateRoute exact path="/patient-dashboard" component={PatientDashboard} />
              <PrivateRoute exact path="/counselor-dashboard" component={CounselorDashboard} />
              <PrivateRoute exact path="/admin-dashboard" component={AdminDashboard} />
          </Switch>

        </div>
      </Router>
    </Provider>
    );
  }
}
