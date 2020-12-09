import React from 'react';
import {ReactComponent as Line} from '../assets/line.svg';
import {ReactComponent as Rectangle} from '../assets/rectangle.svg';
import Footer from '../components/Footer.js';
import { NavLink } from 'react-router-dom';

export default class LearnMore extends React.Component{
    render() {
        return (       
          <div className="w-screen"> 
            <div className="about-bg bg-cover bg-center h-96 bg-no-repeat">
              <div className="bg-primary z-0 bg-cover h-96 w-screen bg-no-repeat bg-opacity-50"></div>
            </div>  

            <div className="flex justify-center mt-24 ">
                <div className="mindfulness-bg bg-center w-1/4 h-96 mr-8 rounded"></div>

                <div className="w-1/4 py-24">
                  <p className="text-3xl font-bold text-black text-opacity-70 mb-2 mr-4">Unlearning Biases & Start Healing</p>
                  <Line />
                  <p className="text-sm text-black text-opacity-80 text-justify mt-6">For too long, mental health has been an undiscussed subject in the Malagasy community. However, with the recent event causing lockdowns in many parts of the world in 2020, discussing mental health is no longer an option but a necessity.</p>
                </div>
            </div>

            <div className="mandala-bg bg-contain h-96">
              <div className="flex justify-center p-40">
                <div className="w-1/2 mx-auto px-12">
                  <p className="text-3xl font-bold text-black text-opacity-70 mb-2 text-center">We are here to help you get through your mental stages and ensure your hapiness</p>
                  <div className="flex justify-center"><Line /></div>
                  <p className="text-sm text-black text-opacity-80 mt-6 text-center">We know you are stronger and you can overcame anything even the hardest obstacle in your journey to healing.</p>
                </div>
              </div>                
            </div>

            <div className="flex justify-center my-14">
              <div className="border-0 w-1/5 p-10 mr-5 shadow-md">
                <img className="h-auto w-16 mx-auto" src="/meditation.png" alt="meditation"></img>
                <p className="text-xl font-bold text-black text-opacity-70 text-center">Value #1</p>
                <p className="text-sm text-black text-opacity-80 mt-6 text-center">We know you are stronger and you can overcame anything even the hardest obstacle in your journey to healing.</p>
              </div>

              <div className="border-0 w-1/5 p-10 mr-5 shadow-md">
                <img className="h-auto w-16 mx-auto"src="/ying-yang.png" alt="ying-yang"></img>
                <p className="text-xl font-bold text-black text-opacity-70 text-center">Value #2</p>
                <p className="text-sm text-black text-opacity-80 mt-6 text-center">We know you are stronger and you can overcame anything even the hardest obstacle in your journey to healing.</p>
              </div>

              <div className="border-0 w-1/5 p-10 shadow-md">
                <img className="h-auto w-16 mx-auto" src="/dandelion.png" alt="dandelion"></img>
                <p className="text-xl font-bold text-black text-opacity-70 text-center">Value #3</p>
                <p className="text-sm text-black text-opacity-80 mt-6 text-center">We know you are stronger and you can overcame anything even the hardest obstacle in your journey to healing.</p>
              </div>
            </div>
            
            <div className="goal-bg bg-cover h-auto mb-14">
              <div className="pb-14 pt-52 px-72 w-4/5 ">
                <p className="text-3xl font-bold text-black text-opacity-70 mb-5">Our Goal</p>
                <p className="text-sm text-black text-opacity-80 mb-4 w-3/5 text-justify">Recovery is not one and done. It is a lifelong journey that takes place one day, one step at a time. It’s okay to feel unstable. It’s okay to disassociate. It’s okay to hide from the world.</p>
                <p className="text-sm text-black text-opacity-80 mb-6  w-3/5 text-justify">It’s okay to need help. It’s okay not to be okay. Your mental illness is not a personal failure. We know you are stronger and you can overcame anything even the hardest obstacle in your journey to healing.</p>
                <NavLink to="/sign-up" className="inline-block border bg-primary rounded-md px-6 py-3 text-white font-bold hover:bg-white hover:text-primary hover:border-primary">Get Started</NavLink>
              </div>            
            </div>

            <div className="team-bg bg-cover h-auto">
              <p className="text-3xl font-bold text-black text-opacity-70 mb-2 text-center">Meet the Team</p>
              <div className="flex justify-center"> 
                <Line />
              </div>

              <div className="flex justify-center mt-20 mb-10">
                <div className="border-0 w-1/4 p-10 mr-5">
                  <img className="h-auto w-32 mx-auto"src="/mahaly.png" alt="mahaly"></img>
                  <p className="text-xl font-medium text-black text-opacity-70 mt-4 text-center">Mahalinoro Razafimanjato</p>
                  <p className="text-sm font-bold text-primary text-opacity-80 mb-4 text-center">Web Developer</p>

                  <div className="mx-auto w-1/2">
                    <ul className="flex">
                      <li className="mr-4 ml-4">
                        <a href="#"><img alt="facebook" className="h-auto w-6" src="/facebook.png"></img></a>
                      </li>
                      <li className="mr-4">
                        <a href="#"><img alt="twitter" className="h-auto w-6" src="/twitter.png"></img></a>
                      </li>
                      <li className="mr-4">
                        <a href="#"><img alt="instagram" className="h-auto w-6" src="/instagram.png"></img></a>
                      </li>
                    </ul>
                  </div>            
                </div>         

                <div className="border-0 w-1/4 p-10 mr-5">
                  <img className="h-auto w-32 mx-auto"src="/irintsoa.png" alt="mahaly"></img>
                  <p className="text-xl font-medium text-black text-opacity-70 mt-4 text-center">Irintsoa Rakotonindrina</p>
                  <p className="text-sm font-bold text-primary text-opacity-80 mb-4 text-center">Content Designer</p>

                  <div className="mx-auto w-1/2">
                    <ul className="flex">
                      <li className="mr-4 ml-4">
                        <a href="#"><img alt="facebook" className="h-auto w-6" src="/facebook.png"></img></a>
                      </li>
                      <li className="mr-4 ">
                        <a href="#"><img alt="twitter" className="h-auto w-6" src="/twitter.png"></img></a>
                      </li>
                      <li className="mr-4">
                        <a href="#"><img alt="instagram" className="h-auto w-6" src="/instagram.png"></img></a>
                      </li>
                    </ul>
                  </div>            
                </div>    
              </div>              
            </div>

            <div className="mt-20 mb-48">
              <div className="absolute z-10 border-0 bg-white shadow-xl p-8 ml-96 mt-12 mb-20">
                <p className="text-3xl font-bold text-black text-opacity-70 mb-2">Suscribe to our Newsletter</p>
                <div className="flex items-center justify-between">
                  <div><p className="text-sm text-black text-opacity-80 text-justify w-4/5">Get updates and the latest blog posts from our community </p></div>
                  
                  <div>
                    <form>
                      <input className="border-2 px-4 py-2 rounded-md " placeholder="Enter your email address"></input>
                      <button className="border-2 bg-primary ml-2 rounded-md px-4 py-2 text-white font-bold hover:bg-white hover:text-primary hover:border-primary">Subscribe</button>
                    </form>
                  </div>
                  
                </div>  
              </div>   

              <div className="z-0">
              <Rectangle />
              </div>
            </div> 
            
            <Footer />
          </div>  
        );
    }
}