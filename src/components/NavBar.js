import React from 'react'
import logo from '../images/logo.png';
import { IoSettingsOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";


function NavBar() {
    return (
        <nav className="relative bg-customBlue">
            <div className="container mx-auto p-3 flex xs:justify-center md:justify-between items-center">
                <div>
                    <img className="h-10 object-contain" src={logo} alt="logo" />
                </div>
                <div className="text-white items-center gap-6 xs:hidden md:flex">
                    <div className="px-2 py-1 relative">
                        <input type="search" class="form-input rounded-sm bg-fadedBlue border-customBlue placeholder-gray-300" placeholder="Search" />
                        <div className="absolute right-4 top-4 cursor-pointer hover:scale-110">
                            <BiSearch size={20} />
                        </div>
                    </div>
                    <div>
                        <IoSettingsOutline size={25} />
                    </div>
                    <div>
                        <BsBell size={25} />
                    </div>
                </div>              
            </div>
        </nav>
    )
}

export default NavBar
