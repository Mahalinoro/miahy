import React from 'react';
import Applicant from './Applicant.js';

export default class Overview extends React.Component{
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
            <div onClick={() => this.handleClickClose()} className='modal'>
              <div className='modal-inner bg-white w-1/3 rounded-sm shadow-lg '>
                <Applicant />
              </div>
            </div>
          );
        }

        return (
            <div className="p-14">   
            <p className="font-medium text-black text-opacity-80 text-5xl mb-2">Overview</p>
            <p className="font-medium text-black text-opacity-80 text-xl mb-6">New Applications</p>

            <div className="flex space-x-8">
                <div className="flex-1">
                    <table className="shadow-md rounded">
                        <tr className="bg-blue-50">
                            <th className="text-black text-opacity-80 text-xl font-normal py-6 px-14 text-center">No.</th>
                            <th className="text-black text-opacity-80 text-xl font-normal py-6 px-14 text-center">Full Name</th>
                            <th className="py-6 px-12"></th>
                            <th className="py-6 px-12"></th>
                            <th className="py-6 px-12"></th>
                        </tr>

                        <tr className="border-b-2 bg-white">
                            <td className="text-black text-opacity-50 font-normal py-6 px-14 text-sm text-center">01</td>
                            <td className="text-black text-opacity-50 font-normal py-6 px-14 text-sm text-center">Anne Doe</td>
                            <td className="font-normal text-sm text-center">
                                <button onClick={() => {this.handleClickModal()}} className="border border-primary bg-primary rounded-md px-6 py-2 text-white font-bold hover:bg-white hover:text-primary hover:border-primary">View</button>
                            </td>
                            <td className="font-normal text-sm text-center">
                                <button className="border border-green-400 bg-green-400 rounded-md px-6 py-2 text-white font-bold hover:bg-white hover:text-green-400 hover:border-green-400">Add</button>
                            </td>
                            <td className="font-normal text-sm text-center pr-14">
                                <button className="border border-red-400 bg-red-400 rounded-md px-3 py-2 text-white font-bold hover:bg-white hover:text-red-400 hover:border-red-400">Remove</button>
                            </td>
                        </tr>

                    </table>
                    {modal}
                </div>

                <div className="flex-shrink-0 w-64 h-32 p-5 bg-white rounded shadow-md">
                    <div className="flex justify-between items-center mb-1">
                        <p className="text-black text-opacity-80 text-sm font-medium">Patients Registered:</p> 
                        <p className="text-primary font-bold text-sm bg-blue-50 p-1 rounded">25</p>
                    </div>

                    <div className="flex justify-between items-center mb-1">
                        <p className="text-black text-opacity-80 text-sm font-medium">Counselors Registered:</p>
                        <p className="text-primary font-bold text-sm bg-blue-50 p-1 rounded">10</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="text-black text-opacity-80 text-sm font-medium">Total Bookings:</p>
                        <p className="text-primary font-bold text-sm bg-blue-50 p-1 rounded">12</p>
                    </div>
                </div>
                
            </div>
        </div>
        );
    }
}