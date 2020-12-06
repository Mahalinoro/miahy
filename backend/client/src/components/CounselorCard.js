import React from 'react';
import {ReactComponent as Line} from '../assets/line.svg';

export default class CounselorCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isModalOpen: false};
      }
      
      handleClickModal() {
        this.setState({isModalOpen: true});
      }
    
      handleClickClose() {
        this.setState({isModalOpen: false});
      }
        
        
    render() {
        let modal;
        if (this.state.isModalOpen) {
            modal = (
            <div className='modal'>
                <div onClick={() => this.handleClickClose()} className="w-screen h-full"></div>
                <div className='modal-inner bg-white w-1/3 rounded-sm shadow-lg '>
                    <div className="px-14 py-10">         
                        <p className="text-3xl font-bold text-black text-opacity-70 mb-2 text-center">CHOOSE YOUR OPTION</p>
                        <div className="flex justify-center mb-8">
                            <Line />
                        </div>   
                        <form className="px-5">
                            <label className="text-opacity-80 text-black">counselling type</label>
                            <div className="mb-4">
                                <select className="text-black text-opacity-50 font-light border-b-2 border-opacity-50 bg-transparent w-full pl-2 py-2" id="counselling" name="counselling">
                                    <option value="Simple Session">Simple Session</option>
                                    <option value="Complete Session">Complete Session</option>
                                </select>
                            </div>
                            <label className="text-opacity-80 text-black">date</label>
                            <div className="mb-4">
                                <input type="date" className="text-black text-opacity-50 font-light border-b-2 border-opacity-50 bg-transparent w-full pl-2 py-1"></input>
                                {/* <img className="h-auto w-5 inline" src="/calendar.png"></img> */}
                            </div>

                            <div className="flex justify-between mb-6">
                                <div>
                                    <label className="text-opacity-80 text-black">from</label>
                                    <div className="mb-4">
                                        <input type="time" className="text-black text-opacity-50 font-light border-b-2 border-opacity-50 bg-transparent w-32 pl-2 py-1"></input>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-opacity-80 text-black">to</label>
                                    <div>
                                        <input type="time" className="text-black text-opacity-50 font-light border-b-2 border-opacity-50 bg-transparent w-32 pl-2 py-1"></input>
                                    </div>
                                </div>
                            </div>

                            <button className="border-2 bg-primary rounded-md px-4 py-2 w-full text-white font-bold hover:bg-white hover:text-primary hover:border-primary">PROCEED</button>
                        </form>
                    </div>                
                </div>
            </div>
            );
        }

        return (          
            <div className="w-96 p-12 rounded-sm shadow-md mb-10 border-t-8 border-primary border-opacity-50">          
                <img className="rounded-full w-48 h-auto mx-auto" alt="profile" src="/default-profile.png"></img>
                <p className="text-black font-medium text-opacity-50 text-base text-center">John Doe</p>
                <p className="text-black font-light text-opacity-50 text-sm text-center">j.doe@gmail.com</p>
                <p className="text-black font-light text-opacity-50 text-sm mb-5 text-center">+261 32 46 519 95</p>
                <p className="text-black font-medium text-opacity-50 text-xl mb-2">Bio</p>
                <p className="text-black font-light text-opacity-50 text-sm mb-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <p className="text-black font-medium text-opacity-50 text-xl mb-2">Interests</p>
                <p className="text-black font-light text-opacity-50 text-sm text-justify mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div className="flex justify-center">
                    <button onClick={() => this.handleClickModal()} className="border border-primary bg-primary rounded-md px-6 py-2 text-white font-bold hover:bg-white hover:text-primary hover:border-primary">Book</button>
                </div>
                {modal}
            </div>
        );
    }
}