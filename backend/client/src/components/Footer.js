import React from 'react';

export default class Nav extends React.Component{
    render() {
        return (
         <footer className="px-20 py-2 bg-primary bg-opacity-10">
             <div className="flex justify-between items-center py-2">
                 <div>
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

                 <div>
                     <p className="text-sm text-black text-opacity-70">COPYRIGHT © 2020 MIAHY - ALL RIGHTS RESERVED</p>
                 </div>
             </div>
         </footer>
        );
    }
}