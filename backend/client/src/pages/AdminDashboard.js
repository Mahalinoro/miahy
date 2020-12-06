import React from 'react';
import Counselors from '../components/Counselors';
import Overview from '../components/Overview';
import Patients from '../components/Patients';

export default class AdminDashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isOverviewActive: true, isPatientsActive: false, isCounselorsActive: false};
    }
    
    handleClickOverview() {
        this.setState({isOverviewActive: true, isPatientsActive: false, isCounselorsActive: false});
    }
    
    handleClickPatients() {
        this.setState({isOverviewActive: false, isPatientsActive: true, isCounselorsActive: false});
    }

    handleClickCounselors() {
        this.setState({isOverviewActive: false, isPatientsActive: false, isCounselorsActive: true});
    }

    render() {
        let content, overview, patients, counselors;
        if(this.state.isOverviewActive){
            content = (
                <Overview />
            );
            overview = (
                <li className="py-6 px-14 bg-blue-50" onClick={() => {this.handleClickOverview()}}>
                    <button className="flex items-center">
                        <img className="h-auto w-6 inline mr-5" alt="user" src="/user-blue.png"></img>
                        <span className="font-medium text-primary text-xl">Overview</span>
                    </button>
                </li>
            );
            patients = (
                <li className="py-6 px-14" onClick={() => {this.handleClickPatients()}}>
                <button className="flex items-center">
                <img className="h-auto w-6 inline mr-5" alt="bookings" src="/dashboard-grey.png"></img>
                <span className="font-medium text-gray-300 text-xl">Patients</span>
            </button></li>
            );
            counselors = (
                <li className="py-6 px-14" onClick={() => {this.handleClickCounselors()}}>
                <button className="flex items-center">
                <img className="h-auto w-6 inline mr-5" alt="bookings" src="/balance-grey.png"></img>
                <span className="font-medium text-gray-300 text-xl">Counselors</span>
            </button></li>
            );
        }
        else if(this.state.isPatientsActive){
            content = (
                <Patients />
            );
            overview = (
                <li className="py-6 px-14" onClick={() => {this.handleClickOverview()}}>
                    <button className="flex items-center">
                        <img className="h-auto w-6 inline mr-5" alt="user" src="/user-grey.png"></img>
                        <span className="font-medium text-gray-300 text-xl">Overview</span>           
                    </button>
                </li>
            );
            patients = (
                <li className="py-6 px-14 bg-blue-50" onClick={() => {this.handleClickPatients()}}>
                    <button className="flex items-center">
                        <img className="h-auto w-6 inline mr-5" alt="bookings" src="/dashboard-blue.png"></img>
                        <span className="font-medium text-primary text-xl">Patients</span>
                    </button>
                </li>
            );
            counselors = (
                <li className="py-6 px-14" onClick={() => {this.handleClickCounselors()}}>
                <button className="flex items-center">
                <img className="h-auto w-6 inline mr-5" alt="bookings" src="/balance-grey.png"></img>
                <span className="font-medium text-gray-300 text-xl">Counselors</span>
            </button></li>
            );
        } else if(this.state.isCounselorsActive){
            content = (
                <Counselors />
            );
            overview = (
                <li className="py-6 px-14" onClick={() => {this.handleClickOverview()}}>
                    <button className="flex items-center">
                        <img className="h-auto w-6 inline mr-5" alt="user" src="/user-grey.png"></img>
                        <span className="font-medium text-gray-300 text-xl">Overview</span>           
                    </button>
                </li>
            );
            patients = (
                <li className="py-6 px-14" onClick={() => {this.handleClickPatients()}}>
                    <button className="flex items-center">
                        <img className="h-auto w-6 text-gray-300 inline mr-5" alt="bookings" src="/dashboard-grey.png"></img>
                        <span className="font-medium text-gray-300 text-xl">Patients</span>
                    </button>
                </li>
            );
            counselors = (
                <li className="py-6 px-14 bg-blue-50" onClick={() => {this.handleClickCounselors()}}>
                <button className="flex items-center">
                <img className="h-auto w-6 inline text-gray-300 mr-5" alt="balance" src="/balance-blue.png"></img>
                <span className="font-medium text-primary text-xl">Counselors</span>
            </button></li>
            );
        }

        return (          
            <div className="w-screen bg-blue-50 bg-opacity-20 h-screen">
                <div className="bg-white border-b-2 bg-cover h-24 bg-no-repeat"></div>
                    <div className="flex h-full">
                        <div className="flex-shrink-0 w-1/7 border-r-2 bg-white">
                            <ul>
                                {overview}
                                {patients}
                                {counselors}
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