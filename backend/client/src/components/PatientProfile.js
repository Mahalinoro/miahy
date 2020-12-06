import React from 'react';

export default class PatientDashboard extends React.Component{
    render() {
        return (          
            <div className="p-14">   
                <p className="font-medium text-black text-opacity-80 text-5xl mb-6">Profile</p>

                <div className="flex space-x-10">
                    <div className="flex-grow-0 flex flex-col w-2/3 space-y-6">
                        <div className="flex-grow-0 bg-white shadow-lg rounded-lg p-12">
                            <div className="flex justify-end">
                                <button className="block text-primary font-normal text-xl mb-2">Edit Profile</button>
                            </div>
                            
                            <p className="text-black font-medium text-opacity-80 text-xl mb-2">Full Name</p>
                            <p className="text-black font-light text-opacity-50 text-sm mb-2">John Doe</p>
                            <p className="text-black font-medium text-opacity-80 text-xl mb-2">Email Address</p>
                            <p className="text-black font-light text-opacity-50 text-sm mb-2">j.doe@gmail.com</p>
                            <p className="text-black font-medium text-opacity-80 text-xl mb-2">Phone Number</p>
                            <p className="text-black font-light text-opacity-50 text-sm">+261 32 46 519 95</p>
                        </div>

                        <div className="flex-grow-0 bg-white shadow-lg rounded-lg p-12">
                            <form>
                                <div className="flex justify-end">
                                    <button className="block text-primary font-normal text-xl mb-2">Edit Password</button>
                                </div>
                                <label className="text-black font-medium text-opacity-80 text-xl mb-2">Password</label>
                                <div className="mb-4">
                                    <input className="border-b-2 border-opacity-50 bg-transparent w-4/5 mr-2 pl-2 py-1"></input>
                                    <img alt="padlock" className="h-auto w-5 inline" src="/padlock.png"></img>
                                </div>
                                <label className="text-black font-medium text-opacity-80 text-xl mb-2">Confirm Password</label>
                                <div className="mb-2">
                                    <input className="border-b-2 border-opacity-50 bg-transparent w-4/5 mr-2 pl-2 py-1"></input>
                                    <img alt="padlock" className="h-auto w-5 inline" src="/padlock.png"></img>
                                </div>
                            </form>
                        </div>
                    </div>
                    

                    <div className="flex-grow-0 h-4/5 bg-white shadow-lg rounded-lg p-12 w-1/3">
                        <img className="rounded-full w-48 h-auto mx-auto" alt="profile" src="/default-profile.png"></img>
                        <p className="text-black font-medium text-opacity-80 text-xl mb-2">Bio</p>
                        <p className="text-black font-light text-opacity-50 text-sm mb-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <p className="text-black font-medium text-opacity-80 text-xl mb-2">Interests</p>
                        <p className="text-black font-light text-opacity-50 text-sm mb-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <div className="flex justify-center">
                            <button className="border border-primary bg-primary rounded-md px-6 py-2 text-white font-bold hover:bg-white hover:text-primary hover:border-primary">Edit</button>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}