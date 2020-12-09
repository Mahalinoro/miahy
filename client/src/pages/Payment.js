import React from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as Line} from '../assets/line.svg';

export default class Payment extends React.Component{
    constructor(props){
        super(props);
        this.state = {isSubmitted: false};
    }
    
    handleOnClickSubmit(){
        this.setState({isSubmitted: true});
    }

    render() {
        let content;
        if(this.state.isSubmitted){
            content = (
            <div className="flex justify-between">
                <div className="h-auto w-1/2 mx-auto py-10 px-5">
                <p className="text-3xl font-medium text-black text-opacity-70 mb-2 text-center">Hi <span className="text-primary">John Doe</span>!</p>
                <div className="flex justify-center mb-8">
                    <Line />
                </div>
                
                    <p className="text-black text-opacity-80 font-normal text-center mb-4">Thanks for you interest in joining Miahy for the role of Counsellor, your application has been successfully submitted.</p>     
                    <p className="text-black text-opacity-80 font-normal text-center mb-4">We will get in touch with you soon via email or phone call.</p>
                    
                    <NavLink to="/" className="inline-block text-center border-2 bg-primary rounded-md px-4 py-2 w-full text-white font-bold hover:bg-white hover:text-primary hover:border-primary">GO BACK TO HOME</NavLink>
                
                </div>
            </div>
            );
        }else{
            content = (
                <div className="flex justify-between">
                <div className="px-10 py-6 w-1/2"> 
                    <p className="text-3xl font-bold text-black text-opacity-70 mb-4">Confirm and Pay</p>
                    <div className="px-5 py-2">
                        <p className="text-black font-medium text-opacity-80 text-base">Booking Details</p>
                        <p className="text-black font-light text-opacity-50 text-sm mb-2">#0001-CS-A</p>
                        <p className="text-black font-medium text-opacity-80 text-base mb-1">Counsellor Name</p>
                        <p className="text-black font-light text-opacity-50 text-sm mb-2">John Doe</p>
                        <p className="text-black font-medium text-opacity-80 text-base mb-1">Counselling Type</p>
                        <p className="text-black font-light text-opacity-50 text-sm mb-2">Complete Counselling</p>
                        <p className="text-black font-medium text-opacity-80 text-base mb-1">Date</p>
                        <p className="text-black font-light text-opacity-50 text-sm mb-2">22/11/2020</p>
                        <p className="text-black font-medium text-opacity-80 text-base mb-1">Time</p>
                        <p className="text-black font-light text-opacity-50 text-sm mb-5">From 11:00 to 12:30</p>
                        
                        <div className="flex justify-between border-t-4 items-center">
                            <p className="text-black font-medium text-opacity-80 text-xl">TOTAL</p>
                            <p className="text-black font-light text-opacity-50 text-sm">$10</p>
                        </div>
                    </div>
                    
                </div>

                <div className="bg-blue-50 w-1/2">
                    <div className="px-14 py-10">         
                        <p className="text-3xl font-bold text-black text-opacity-70 text-center mb-2">PAYMENT DETAILS</p>
                        <div className="flex justify-center mb-8">
                            <Line />
                        </div>   
                        <form className="px-5">
                            <label className="text-opacity-80 text-black">full name</label>
                            <div className="mb-4">
                                <input className="text-black text-opacity-50 font-light border-b-2 border-opacity-50 bg-transparent w-full pl-2 py-1"></input>
                            </div>
                            <label className="text-opacity-80 text-black">card number</label>
                            <div className="mb-4">
                                <input className="text-black text-opacity-50 font-light border-b-2 border-opacity-50 bg-transparent w-full pl-2 py-1"></input>
                            </div>

                            <div className="flex justify-between mb-6">
                                <div>
                                    <label className="text-opacity-80 text-black">expiration date</label>
                                    <div className="mb-4">
                                        <input className="text-black text-opacity-50 font-light border-b-2 border-opacity-50 bg-transparent w-32 pl-2 py-1"></input>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-opacity-80 text-black">cvv</label>
                                    <div>
                                        <input className="text-black text-opacity-50 font-light border-b-2 border-opacity-50 bg-transparent w-32 pl-2 py-1"></input>
                                    </div>
                                </div>
                            </div>

                            <button onClick={() => {this.handleOnClickSubmit()}} className="border-2 bg-primary rounded-md px-4 py-2 w-full text-white font-bold hover:bg-white hover:text-primary hover:border-primary">PAY $40</button>
                        </form>
                    </div>               
                </div>
            </div>
            );
        }
        return (          
            <div className="w-screen absolute">
                <div className="w-3/5 h-auto shadow-lg mx-auto mt-40">
                    {content}
                </div>                
            </div>
        );
    }
}