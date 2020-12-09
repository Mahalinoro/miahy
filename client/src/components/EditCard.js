import React from 'react';
import {ReactComponent as Line} from '../assets/line.svg';

export default class EditCard extends React.Component{
    render() {
        return (          
            <div className="px-14 py-10">         
                <p className="text-3xl font-bold text-black text-opacity-70 mb-2 text-center">EDIT {this.props.user}</p>
                <div className="flex justify-center mb-8">
                    <Line />
                </div>   
                <form className="px-5">
                    <label className="text-opacity-80 text-black">full name</label>
                      <div className="mb-4">
                        <input className="border-b-2 border-opacity-50 bg-transparent w-80 mr-2 pl-2 py-1"></input>
                        <img className="h-auto w-5 inline" src="/user-transparent.png" alt="user"></img>
                      </div>
                      <label className="text-opacity-80 text-black">email address</label>
                      <div className="mb-4">
                        <input className="border-b-2 border-opacity-50 bg-transparent w-80 mr-2 pl-2 py-1"></input>
                        <img className="h-auto w-5 inline" src="/arroba.png" alt="mail"></img>
                      </div>

                      <label className="text-opacity-80 text-black">phone number</label>
                      <div className="mb-4">
                        <input className="border-b-2 border-opacity-50 bg-transparent w-80 mr-2 pl-2 py-1"></input>
                        <img className="h-auto w-5 inline" src="/phone.png" alt="phone"></img>
                      </div>

                      <label className="text-opacity-80 text-black">bio</label>
                      <div className="mb-4">
                        <textarea className="border bg-white w-full py-1 pl-2 h-16"></textarea>                    
                      </div>

                      <label className="text-opacity-80 text-black">interest</label>
                      <div className="mb-2">
                        <textarea className="border bg-white w-full py-1 pl-2 h-16"></textarea>                    
                      </div>

                      <button className="border-2 bg-primary rounded-md px-4 py-2 w-full text-white font-bold hover:bg-white hover:text-primary hover:border-primary">SUBMIT</button>
                    </form>
            </div>
        );
    }
}