import React from 'react';
import UserCard from './UserCard.js';
import EditCard from './EditCard.js';

export default class Counselors extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isModalOpen: false, isEditOpen: false};
      }
      
      handleClickEditModal(){
        this.setState({isEditOpen: true});
      }

      handleClickEditModalClose(){
        this.setState({isEditOpen: false});
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
                <UserCard />
              </div>
            </div>
          );
        }else if(this.state.isEditOpen){
            modal = (
            <div className='modal'>
              <div onClick={() => this.handleClickEditModalClose()} className="w-screen h-full"></div>
              <div className='modal-inner bg-white w-1/3 rounded-sm shadow-lg '>
                <EditCard user="COUNSELOR"/>
              </div>
            </div>
            )
        }

        return (
            <div className="p-14">   
            <p className="font-medium text-black text-opacity-80 text-5xl mb-6">Patients</p>

            <div>
                <div>
                    <table className="shadow-md rounded">
                        <tr className="bg-blue-50">
                            <th className="text-black text-opacity-80 text-xl font-normal py-6 px-14 text-center">No.</th>
                            <th className="text-black text-opacity-80 text-xl font-normal py-6 px-14 text-center">Full Name</th>
                            <th className="text-black text-opacity-80 text-xl font-normal py-6 px-14 text-center">Email</th>
                            <th className="text-black text-opacity-80 text-xl font-normal py-6 px-14 text-center">Total Balance</th>
                            <th className="py-6 px-12"></th>
                            <th className="py-6 px-12"></th>
                            <th className="py-6 px-12"></th>
                        </tr>

                        <tr className="border-b-2 bg-white">
                            <td className="text-black text-opacity-50 font-normal py-6 px-14 text-sm text-center">01</td>
                            <td className="text-black text-opacity-50 font-normal py-6 px-14 text-sm text-center">Anne Doe</td>
                            <td className="text-black text-opacity-50 font-normal py-6 px-14 text-sm text-center">a.doe@gmail.coom</td>
                            <td className="text-black text-opacity-50 font-normal py-6 px-14 text-sm text-center">$110</td>
                            <td className="font-normal text-sm text-center">
                                <button onClick={() => {this.handleClickModal()}} className="border border-primary bg-primary rounded-md px-6 py-2 text-white font-bold hover:bg-white hover:text-primary hover:border-primary">View</button>
                            </td>
                            <td className="font-normal text-sm text-center">
                                <button onClick={() => {this.handleClickEditModal()}} className="border border-green-400 bg-green-400 rounded-md px-6 py-2 text-white font-bold hover:bg-white hover:text-green-400 hover:border-green-400">Edit</button>
                            </td>
                            <td className="font-normal text-sm text-center py-6 pr-14">
                                <button className="border border-red-400 bg-red-400 rounded-md px-3 py-2 text-white font-bold hover:bg-white hover:text-red-400 hover:border-red-400">Remove</button>
                            </td>
                        </tr>

                    </table>
                    {modal}
                </div>                
            </div>
        </div>
        );
    }
}