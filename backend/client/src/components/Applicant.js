import React from 'react';

export default class Applicant extends React.Component{
    render() {
        return (          
            <div className="p-14">          
                <p className="text-black font-medium text-opacity-50 text-xl mb-2">Full Name</p>
                <p className="text-black font-light text-opacity-50 text-sm mb-5 text-justify">John Doe</p>
                <p className="text-black font-medium text-opacity-50 text-xl mb-2">Email Address</p>
                <p className="text-black font-light text-opacity-50 text-sm mb-5 text-justify">j.doe@gmail.com</p>
                <p className="text-black font-medium text-opacity-50 text-xl mb-2">Phone Number</p>
                <p className="text-black font-light text-opacity-50 text-sm mb-5 text-justify">+261 32 46 519 95</p>
                <p className="text-black font-medium text-opacity-50 text-xl mb-2">Introduction | Motivations</p>
                <p className="text-black font-light text-opacity-50 text-sm mb-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
        );
    }
}