import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { Tooltip } from 'react-tooltip';
import { Moon, Sun } from "lucide-react";

export const Navbar = () => {
  const { user, logOut , isDark , setIsDark } = useContext(AuthContext);
  

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleLogout = () => {
    logOut().then((result)=>{
        swal("Login Successful!", "Welcome to HobMeet", "success");
    }).catch(error => console.log(error));
  };

  const links = (
    <>
      <li className={`${isDark ? "text-white" : ""}`}><NavLink to="/" className={({ isActive }) => isActive ? "text-[#e4c1f9] font-medium" : "font-medium"}>Home</NavLink></li>
      <li className={`${isDark ? "text-white" : ""}`}><NavLink to="/" className={({ isActive }) => isActive ? "text-[#e4c1f9] font-medium" : "font-medium"}>Upcoming Events</NavLink></li>
      
      
    </>
  );

  return (
    <div className={`fixed top-0 left-0 w-full z-50  transition-all duration-300 shadow-sm py-3 ${isDark ? "bg-black text-white" : "bg-white"}`}>
      <div className=" navbar container mx-auto px-3 md:px-6 lg:px-8 xl:px-14 text-black dark:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className={`btn btn-xs px-0 btn-ghost lg:hidden ${isDark? "text-white": "text-black"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
              </svg>
            </div>
            <ul tabIndex={0} className={`menu menu-sm dropdown-content  rounded-box z-10 mt-3 w-52 p-2 shadow ${isDark ? "bg-gray-800" :"bg-white"}`}>
              {links}
            </ul>
          </div>
          <div className="flex items-center">
            <a className={`font-medium md:text-2xl text-lg hidden md:block ${isDark ? "text-white" : "text-[#e4c1f9]"}`}>Eventra</a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-6 flex items-center">
            {links}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-4">

          {/* Toggle with animation */}
          <div
            onClick={toggleTheme}
            className={`cursor-pointer w-12 h-7 sm:w-14 sm:h-8 flex items-center rounded-full p-1 transition duration-300 ${isDark ? "bg-gray-700" : "bg-[#e4c1f9]"}`}
          >
            <div
              className={`bg-white w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md transform duration-300 ease-in-out ${isDark ? "translate-x-5 sm:translate-x-6" : "translate-x-0"}`}
            >
              {isDark ? (
                <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 m-auto md:mt-1 mt-0.5 text-black" />
              ) : (
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 m-auto md:mt-1 mt-0.5 text-[#e4c1f9]" />
              )}
            </div>
          </div>

          {/* User info & login/logout */}
          {user ? (
              <div className="dropdown dropdown-end z-50">
                <div tabIndex={0} role="button" className="avatar btn btn-ghost btn-circle">
                  <div className="w-10 rounded-full ring ring-[#e4c1f9] ring-offset-base-100 ring-offset-2">
                    <img  data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} src={user.photoURL || "https://i.ibb.co.com/0jKWX0cD/user-png-33832.png"} alt="user" />
                    <Tooltip className="z-10" id="my-tooltip" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"}`}
                >
                  <li><NavLink className={({ isActive }) => isActive ? "text-[#e4c1f9] font-medium" : "font-medium"} to="/create-event">Create Event</NavLink></li>
                  <li><NavLink className={({ isActive }) => isActive ? "text-[#e4c1f9] font-medium" : "font-medium"} to="/manage-events">Manage Events</NavLink></li>
                  <li><NavLink className={({ isActive }) => isActive ? "text-[#e4c1f9] font-medium" : "font-medium"} to="/joined-events">Joined Events</NavLink></li>
                  <li><button className="btn  btn-xs w-fit ml-2 mt-1 border-none  bg-[#e4c1f9] hover:bg-[#e4c1f9] " onClick={handleLogout}>Logout</button></li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="btn btn-sm md:btn-md border-none bg-[#e4c1f9] hover:bg-[#e4c1f9]">Login</Link>
            )}

        </div>
      </div>
    </div>
  );
};