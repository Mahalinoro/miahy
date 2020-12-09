import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component{
    render() {
        return (          
            <div className="home-bg bg-cover h-screen bg-no-repeat">
              <div className="z-10 bg-white absolute h-screen bg-no-repeat w-1/2 bg-opacity-25 home-blur pr-20">
                <div className="px-20 mt-52 mb-28">
                  <p className="text-5xl font-bold text-black text-opacity-70 mb-2">Your mental health matters to us</p>
                  <p className="text-xl font-medium text-black text-opacity-70 mb-6 text-justify">Based in Madagascar, MIAHY is an initiative that aims at breaking the stigma around mental health in the malagasy community.</p>
                  <p className="text-base text-black text-opacity-70 text-justify mb-6">We are a group of dedicated young people motivated to raise awareness on the existing mental disorders, while providing tools to promote mental wellness.</p>  
                  <NavLink to="/learn-more" className="inline-block border border-primary bg-primary rounded-md px-6 py-3 text-white font-bold hover:bg-white hover:text-primary hover:border-primary">Learn More</NavLink>
                </div>  
                <div className="m-auto w-1/2">
                  <ul className="flex items-center space-evenly m-auto w-1/2">
                    <li className="mr-8">
                      <a href="#"><img alt="facebook" className="h-auto w-6" src="/facebook.png"></img></a>
                    </li>
                    <li className="mr-8">
                      <a href="#"><img alt="twitter" className="h-auto w-6" src="/twitter.png"></img></a>
                    </li>
                    <li className="mr-8">
                      <a href="#"><img alt="instagram" className="h-auto w-6" src="/instagram.png"></img></a>
                    </li>
                  </ul>
                </div>            
              </div>  
              <div className="bg-primary z-0 bg-cover h-screen w-screen bg-no-repeat bg-opacity-80"></div>
          </div>  
        );
    }
}