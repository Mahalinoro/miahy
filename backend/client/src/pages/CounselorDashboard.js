import React from 'react';
import PatientProfile from '../components/PatientProfile.js';
import PatientBooking from '../components/PatientBooking.js';
import Balance from '../components/Balance.js';

export default class CounselorDashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isProfileActive: true, isBookingActive: false, isBalanceActive: false};
    }
    
    handleClickProfile() {
        this.setState({isProfileActive: true, isBookingActive: false, isBalanceActive: false});
    }
    
    handleClickBooking() {
        this.setState({isProfileActive: false, isBookingActive: true, isBalanceActive: false});
    }

    handleClickBalance() {
        this.setState({isProfileActive: false, isBookingActive: false, isBalanceActive: true});
    }

    render() {
        let content, profile, booking, balance;
        if(this.state.isProfileActive){
            content = (
                <PatientProfile />
            );
            profile = (
                <li className="py-6 px-14 bg-blue-50" onClick={() => {this.handleClickProfile()}}>
                    <button className="flex items-center">
                        <img className="h-auto w-6 inline mr-5" alt="user" src="/user-blue.png"></img>
                        <span className="font-medium text-primary text-xl">Profile</span>
                    </button>
                </li>
            );
            booking = (
                <li className="py-6 px-14" onClick={() => {this.handleClickBooking()}}>
                <button className="flex items-center">
                <img className="h-auto w-6 inline mr-5" alt="bookings" src="/dashboard-grey.png"></img>
                <span className="font-medium text-gray-300 text-xl">Bookings</span>
            </button></li>
            );
            balance = (
                <li className="py-6 px-14" onClick={() => {this.handleClickBalance()}}>
                <button className="flex items-center">
                <img className="h-auto w-6 inline mr-5" alt="bookings" src="/balance-grey.png"></img>
                <span className="font-medium text-gray-300 text-xl">Balance</span>
            </button></li>
            );
        }
        else if(this.state.isBookingActive){
            content = (
                <PatientBooking />
            );
            profile = (
                <li className="py-6 px-14" onClick={() => {this.handleClickProfile()}}>
                    <button className="flex items-center">
                        <img className="h-auto w-6 inline mr-5" alt="user" src="/user-grey.png"></img>
                        <span className="font-medium text-gray-300 text-xl">Profile</span>           
                    </button>
                </li>
            );
            booking = (
                <li className="py-6 px-14 bg-blue-50" onClick={() => {this.handleClickBooking()}}>
                    <button className="flex items-center">
                        <img className="h-auto w-6 inline mr-5" alt="bookings" src="/dashboard-blue.png"></img>
                        <span className="font-medium text-primary text-xl">Bookings</span>
                    </button>
                </li>
            );
            balance = (
                <li className="py-6 px-14" onClick={() => {this.handleClickBalance()}}>
                <button className="flex items-center">
                <img className="h-auto w-6 inline mr-5" alt="bookings" src="/balance-grey.png"></img>
                <span className="font-medium text-gray-300 text-xl">Balance</span>
            </button></li>
            );
        } else if(this.state.isBalanceActive){
            content = (
                <Balance />
            );
            profile = (
                <li className="py-6 px-14" onClick={() => {this.handleClickProfile()}}>
                    <button className="flex items-center">
                        <img className="h-auto w-6 inline mr-5" alt="user" src="/user-grey.png"></img>
                        <span className="font-medium text-gray-300 text-xl">Profile</span>           
                    </button>
                </li>
            );
            booking = (
                <li className="py-6 px-14" onClick={() => {this.handleClickBooking()}}>
                    <button className="flex items-center">
                        <img className="h-auto w-6 text-gray-300 inline mr-5" alt="bookings" src="/dashboard-grey.png"></img>
                        <span className="font-medium text-gray-300 text-xl">Bookings</span>
                    </button>
                </li>
            );
            balance = (
                <li className="py-6 px-14 bg-blue-50" onClick={() => {this.handleClickBalance()}}>
                <button className="flex items-center">
                <img className="h-auto w-6 inline text-gray-300 mr-5" alt="balance" src="/balance-blue.png"></img>
                <span className="font-medium text-primary text-xl">Balance</span>
            </button></li>
            );
        }

        return (          
            <div className="w-screen bg-blue-50 bg-opacity-20 h-screen">
                <div className="bg-white border-b-2 bg-cover h-24 bg-no-repeat"></div>
                    <div className="flex h-full">
                        <div className="flex-shrink-0 w-1/7 border-r-2 bg-white">
                            <ul>
                                {profile}
                                {booking}
                                {balance}
                                <li className="py-6 px-14">
                                    <button className="flex items-center cursor-not-allowed">
                                        <img className="h-auto w-6 inline mr-5" alt="settings" src="/settings.png"></img>
                                        <span className="font-medium text-gray-300 text-xl">Settings</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        {content}
                    </div>
            </div>
        );
    }
}