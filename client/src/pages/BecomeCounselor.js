import React from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as Line} from '../assets/line.svg';

export default class BecomeCounselor extends React.Component{
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
        <div className="h-auto w-2/5 mx-auto my-auto py-10 px-24 border shadow-md">
              <p className="text-3xl font-medium text-black text-opacity-70 mb-2 text-center">Hi <span className="text-primary">John Doe</span>!</p>
              <div className="flex justify-center mb-8">
                <Line />
              </div>
             
                <p className="text-black text-opacity-80 font-normal text-center mb-4">Thanks for you interest in joining Miahy for the role of Counsellor, your application has been successfully submitted.</p>     
                <p className="text-black text-opacity-80 font-normal text-center mb-4">We will get in touch with you soon via email or phone call.</p>
                
                <NavLink to="/" className="inline-block text-center border-2 bg-primary rounded-md px-4 py-2 w-full text-white font-bold hover:bg-white hover:text-primary hover:border-primary">GO BACK TO HOME</NavLink>
              
            </div>
      );
    }else{
      content = (
        <div className="h-auto w-2/5 mx-auto my-auto py-10 px-14">
              <p className="text-5xl font-bold text-black text-opacity-70 mb-2 text-center">JOIN US</p>
              <div className="flex justify-center mb-8">
                <Line />
              </div>
              
              <form className="px-5">
                <label className="text-opacity-80 text-black">full name</label>
                <div className="mb-4">
                  <input className="border-b-2 border-opacity-50 bg-transparent w-96 mr-5 pl-2 py-1"></input>
                  <img alt="user" className="h-auto w-5 inline" src="/user-transparent.png"></img>
                </div>

                <label className="text-opacity-80 text-black">email address</label>
                <div className="mb-4">
                  <input className="border-b-2 border-opacity-50 bg-transparent w-96 mr-5 pl-2 py-1"></input>
                  <img alt="mail" className="h-auto w-5 inline" src="/arroba.png"></img>
                </div>

                <label className="text-opacity-80 text-black">phone number</label>
                <div className="mb-4">
                  <input className="border-b-2 border-opacity-50 bg-transparent w-96 mr-5 pl-2 py-1"></input>
                  <img alt="phone" className="h-auto w-5 inline" src="/phone.png"></img>
                </div>

                <label className="text-opacity-80 text-black ">tell us a bit about yourself and your motivations </label>
                <p className="text-opacity-50 text-black">200 words max.</p>
                    <div className="mb-4">
                      <textarea className="border bg-white w-full py-1 pl-2 h-32"></textarea>                    
                    </div>

                <button onClick={() => {this.handleOnClickSubmit()}} className="border-2 bg-primary rounded-md px-4 py-2 w-full text-white font-bold hover:bg-white hover:text-primary hover:border-primary">SUBMIT</button>
                
              </form>
            </div>

      );
    }
      return (          
        <div className="flex w-screen">
          {content}
          <div className="counselor-bg bg-cover h-screen w-1/2 bg-no-repeat float-right">
            <div className="bg-primary bg-cover h-screen w-full bg-no-repeat bg-opacity-50"></div>
          </div>

        </div>
        
      );
  }
}