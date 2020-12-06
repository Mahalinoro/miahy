import React from 'react';
import CounselorCard from '../components/CounselorCard.js';

export default class CounselorBooking extends React.Component{
    render() {
        return (          
            <div className="w-screen">
                <div className="booking-bg bg-center bg-cover h-96 bg-no-repeat">
                    <div className="bg-primary bg-cover h-96 w-screen bg-no-repeat bg-opacity-50">
                        <div className="pt-40">
                            <p className="text-center capitalize font-normal text-4xl text-black text-opacity-80 mb-2">“You Don’t have to struggle in silence”</p>
                            <p className="text-center capitalize font-normal text-3xl text-black text-opacity-80 mb-1">your mental health is a priority</p>
                            <p className="text-center capitalize font-bold text-3xl text-black text-opacity-80">Book a counsellor now!</p>
                        </div>
                    </div>                  
                </div>

                <div className="mt-20 mb-10 px-20">
                    <div className="flex flex-wrap justify-between">                        
                        <CounselorCard />
                        <CounselorCard />
                        <CounselorCard />
                        <CounselorCard />
                        <CounselorCard />
                        <CounselorCard />
                    </div>
                </div>
            </div>
        );
    }
}