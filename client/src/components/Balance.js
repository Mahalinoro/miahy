import React from 'react';

export default class PatientBooking extends React.Component{
    render() {
        return (          
            <div className="p-14">   
                <p className="font-medium text-black text-opacity-80 text-5xl mb-6">Balance</p>

                <div className="flex space-x-8">
                    <div className="flex-1">
                        <table className="shadow-md rounded">
                            <tr className="bg-blue-50">
                                <th className="text-black text-opacity-80 text-xl font-normal py-6 px-14 text-center">No.</th>
                                <th className="text-black text-opacity-80 text-xl font-normal py-6 px-14 text-center">Booking ID</th>
                                <th className="text-black text-opacity-80 text-xl font-normal py-6 px-14 text-center">Earning</th>
                                <th className="text-black text-opacity-80 text-xl font-normal py-6 px-14 text-center">Date</th>
                            </tr>

                            <tr className="border-b-2 bg-white">
                                <td className="text-black text-opacity-50 font-normal py-6 px-14 text-sm text-center">01</td>
                                <td className="text-black text-opacity-50 font-normal py-6 px-14 text-sm text-center">0001-SS-A</td>
                                <td className="text-black text-opacity-50 font-medium py-6 px-14 text-sm text-center">$40</td>
                                <td className="text-black text-opacity-50 font-normal py-6 px-14 text-sm text-center">11-12-2020</td>
                            </tr>

                        </table>
                    </div>

                    <div className="flex-shrink-0 w-48 h-28 p-5 bg-white rounded shadow-md">
                        <div className="flex justify-between items-center mb-1">
                            <p className="text-black text-opacity-80 text-sm font-medium">Earnings:</p> 
                            <p className="text-black text-opacity-50 font-normal text-sm">$ 110</p>
                        </div>

                        <div className="flex justify-between items-center mb-1">
                            <p className="text-black text-opacity-80 text-sm font-medium">Fees:</p>
                            <p className="text-black text-opacity-50 font-normal text-sm">$ 10</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-primary text-opacity-80 text-sm font-medium">Total Net:</p>
                            <p className="text-black text-opacity-80 font-normal text-sm">$ 100</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}