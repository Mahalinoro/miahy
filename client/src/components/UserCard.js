import React from 'react';

export default class UserCard extends React.Component{
    render() {
        return (          
            <div className="p-14">          
                <img className="rounded-full w-48 h-auto mx-auto" alt="profile" src="/default-profile.png"></img>
                <p className="text-black font-medium text-opacity-50 text-base text-center">John Doe</p>
                <p className="text-black font-light text-opacity-50 text-sm text-center">j.doe@gmail.com</p>
                <p className="text-black font-light text-opacity-50 text-sm mb-5 text-center">+261 32 46 519 95</p>
                <p className="text-black font-medium text-opacity-50 text-xl mb-2">Bio</p>
                <p className="text-black font-light text-opacity-50 text-sm mb-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <p className="text-black font-medium text-opacity-50 text-xl mb-2">Interests</p>
                <p className="text-black font-light text-opacity-50 text-sm text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
        );
    }
}