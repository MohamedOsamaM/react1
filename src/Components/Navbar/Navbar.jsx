//import $ from "jquery";
import { useState } from "react";
import "./Navbar.module.css";
import {Link, NavLink} from "react-router-dom"
function Navbar() {
  const [isopen,setIsopen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-blue-900 py-5 z-50">
        <div className="w-[90%] mx-auto flex flex-row justify-between text-white items-center relative">
          <h1 className="font-black text-2xl"><Link to='/react1/'>STARTFRAMEWORK</Link></h1>
          <div className={isopen===false?"md:block hidden":"md:block block"}>
            <ul className="gap-5 md:flex md:flex-row flex-col justify-between md:relative absolute top-0 right-0 md:translate-y-0 translate-y-[50%]  bg-blue-900 rounded-lg p-3">
              <li className="p-1 font-bold cursor-pointer"><NavLink to='about'>ABOUT</NavLink></li>
              <li className="p-1 font-bold cursor-pointer"><NavLink to='portfolio'>PORTFOLIO</NavLink></li>
              <li className="p-1 font-bold cursor-pointer"><NavLink to='contact'>CONTACT</NavLink></li>
            </ul>
          </div>
        </div>
        <button
          className="md:hidden block absolute top-[35%] right-[5%]"
          onClick={() => {
            isopen ===false?setIsopen(true):setIsopen(false);
          }}
        >
          <i className="border-2 p-1 rounded-md text-white fa-solid fa-bars"></i>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
