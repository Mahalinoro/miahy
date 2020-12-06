import React from 'react';
import {ReactComponent as Line} from '../assets/line.svg';

export default class ContactUs extends React.Component{
    render() {
        return (          
          <div className="w-screen">
            <div className="contactus-bg bg-cover h-96 bg-no-repeat">
              <div className="bg-primary z-0 bg-cover h-96 w-screen bg-no-repeat bg-opacity-50 pt-52">
                <div className="flex justify-center mb-14">
                  <div className="sign-form h-auto w-1/3 py-10 px-14 mr-6">
                    <p className="text-5xl font-bold text-black text-opacity-70 mb-2 text-center">Contact Us</p>
                    <div className="flex justify-center mb-8">
                      <Line />
                    </div>      

                    <form className="px-5">
                      <label className="text-opacity-80 text-black">email address</label>
                      <div className="mb-4">
                        <input className="border-b-2 border-opacity-50 bg-transparent w-80 mr-2 pl-2 py-1"></input>
                        <img className="h-auto w-5 inline" src="/arroba.png" alt="mail"></img>
                      </div>

                      <label className="text-opacity-80 text-black">password</label>
                      <div className="mb-8">
                        <input className="border-b-2 border-opacity-50 bg-transparent w-80 mr-2 pl-2 py-1"></input>
                        <img className="h-auto w-5 inline" src="/padlock.png" alt="padlock"></img>
                      </div>

                      <label className="text-opacity-80 text-black">message</label>
                      <div className="mb-4">
                        <textarea className="border bg-white w-full py-1 pl-2 h-32"></textarea>                    
                      </div>

                      <button className="border-2 bg-primary rounded-md px-4 py-2 w-full text-white font-bold hover:bg-white hover:text-primary hover:border-primary">SUBMIT</button>
                    </form>
                  </div>

                  <div className="w-1/3 px-24 mt-64">
                    <div className="flex items-center mb-6">
                      <img className="h-auto w-6 inline mr-4" src="/mobile.png" alt="mobile"></img>
                      <div>
                        <p className="text-opacity-80 text-black">+261 32 46 519 95</p>
                        <p className="text-opacity-80 text-black">+261 34 01 579 86</p>
                      </div>
                    </div>

                    <div className="flex mb-6">
                      <img className="h-auto w-6 inline mr-4" src="/email.png" alt="email"></img>
                      <p className="text-opacity-80 text-black">miahy@gmail.com</p>
                    </div>

                    <div className="flex mb-6">
                      <img className="h-auto w-6 inline mr-4" src="/placeholder.png" alt="location"></img>
                      <p className="text-opacity-80 text-black">Antananarivo, Madagascar</p>
                    </div>                   
                  </div>
                </div>
                
                </div>
              </div>

          </div>
          
        );
    }
}