import React from 'react';
import UserCard from './UserCard.js';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class PatientBooking extends React.Component{
    constructor() {
        super();
        this.state = {isModalOpen: false};
      }
    
      handleClickModal() {
        this.setState({isModalOpen: true});
      }
    
      handleClickClose() {
        this.setState({isModalOpen: false});
      }
    
    render() {
        const { user } = this.props.auth;
        let modal, bookings;
        if (this.state.isModalOpen) {
          modal = (
            <div onClick={() => this.handleClickClose()} className='modal'>
              <div className='modal-inner bg-white w-1/3 rounded-sm shadow-lg '>
                <UserCard />
              </div>
            </div>
          );
        }

        if(user.bookings === []){
          bookings = (
            <tr className="border-b-2">
                <p className="w-full text-black text-opacity-50 font-normal py-6 px-14 text-sm text-center">No Bookings History</p>
            </tr>
          );
        }else{
          bookings = (
            <tr onClick={() => {this.handleClickModal()}} className="border-b-2 cursor-pointer">
              <td className="text-black text-opacity-50 font-normal py-6 px-14 text-sm text-center">01</td>
              <td className="text-black text-opacity-50 font-normal py-6 px-14 text-sm text-center">Anne Doe</td>
              <td className="text-black text-opacity-50 font-normal py-6 px-14 text-sm text-center">Simple Session</td>
              <td className="text-black text-opacity-50 font-normal py-6 px-14 text-sm text-center">11-12-2020</td>
              <td className="text-black text-opacity-50 font-normal py-6 px-14 text-sm text-center">11:00 - 12:30</td>
            </tr>
          );
        }

        return (          
            <div className="p-14">   
                <p className="font-medium text-black text-opacity-80 text-5xl mb-6">Bookings History</p>

                <div>
                    <table className="shadow-md rounded bg-white">
                        <tr className="bg-blue-50">
                            <th className="text-black text-opacity-80 text-xl font-normal py-6 px-14 text-center">No.</th>
                            <th className="text-black text-opacity-80 text-xl font-normal py-6 px-14 text-center">Full Name</th>
                            <th className="text-black text-opacity-80 text-xl font-normal py-6 px-14 text-center">Type</th>
                            <th className="text-black text-opacity-80 text-xl font-normal py-6 px-14 text-center">Date</th>
                            <th className="text-black text-opacity-80 text-xl font-normal py-6 px-14 text-center">Time</th>
                        </tr>

                        {bookings}

                    </table>
                </div>
                {modal}
            </div>
        );
    }
}

PatientBooking.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
mapStateToProps,
{ logoutUser }
)(PatientBooking);