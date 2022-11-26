import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { BsPlusLg } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdNoteAlt, MdAnalytics } from "react-icons/md";
import { RiFileSearchFill, RiShieldCrossFill, RiFolderWarningFill } from "react-icons/ri";
import { SiAdobeaudition } from "react-icons/si";
import { FaLaptopCode, FaBriefcase } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";


function LeftNav() {

    const menuItems = [
        {
            name: 'Home',
            icon: <AiFillHome size={20} />,
            path: '/'
        },
        {
            name: 'My Responsibilities',
            icon: <MdNoteAlt size={20} />,
            path: '/my-responsibilities'
        },
        {
            name: 'Observation & Feedback',
            icon: <RiFileSearchFill size={20} />,
            path: '/observations-feedback'
        },
        {
            name: 'Incident Management',
            icon: <RiShieldCrossFill size={20} />,
            path: '/incident-management'
        },
        {
            name: 'Audit and Inspection',
            icon: <SiAdobeaudition size={20} />,
            path: '/audit-inspection'
        },
        {
            name: 'Risk Management',
            icon: <RiFolderWarningFill size={20} />,
            path: '/risk-management'
        },
        {
            name: 'Learning Management',
            icon: <FaLaptopCode size={20} />,
            path: '/learning-management'
        },
        {
            name: 'Performance Analytics',
            icon: <MdAnalytics size={20} />,
            path: '/performance-analytics'
        }
    ]

    const projects = [
        {
            name: 'Alpha Project',
            icon: <FaBriefcase size={18} />,
            path: '/alpha-project'
        },
        {
            name: 'Beta Project',
            icon: <FaBriefcase size={18} />,
            path: '/beta-project'
        }
    ]

    const [showProjects, setShowProjects] = useState(false)
    const [showTeam, setShowTeam] = useState(false)

    const handleShowProjects = () => {
        setShowProjects(!showProjects)
    }

    const handleShowTeam = () => {
        setShowTeam(!showTeam)
    }

    return (
        <div className="md:w-1/5">
            <div className="xs:hidden md:block">
            <div className="bg-white rounded-lg px-5 py-4">
                <div className="flex flex-col items-center gap-y-1">
                    <p className="text-sm text-secondaryBlue font-semibold">Welcome!</p>
                    <p className="text-xl text-secondaryBlue font-semibold">John Doe</p>
                </div>

                <div className="mt-4 flex justify-center">
                    <button className="px-6 py-2 flex gap-x-3 items-center bg-customBlue rounded-lg text-lg text-white hover:bg-fadedBlue cursor-pointer">Create New <BsPlusLg size={15} /></button>
                </div>

                <div className="mt-6 mb-3 flex flex-col gap-y-2 text-gray-500">
                    {menuItems.map((item, i) => {
                        return (
                            <NavLink key={i} to={item.path} className={({ isActive }) => (isActive ? "bg-gray-200 !text-customBlue font-semibold" : "")}>
                                <div className="px-1 py-3 flex items-center gap-x-2 text-sm cursor-pointer hover:bg-gray-200 active:text-secondaryBlue">
                                    <div>{item.icon}</div>
                                    <div>{item.name}</div>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
                <hr className="text-gray-800" />
                <div className="mt-3 mb-3">
                    <div className="cursor-pointer">
                        <div onClick={handleShowProjects} className="flex items-center justify-between text-sm text-secondaryBlue font-semibold">
                            <div>Your Projects</div>
                            <div className={`${!showProjects ? 'block' : 'rotate-180'} duration-300`}><IoIosArrowUp size={20} /></div>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-y-5">
                        {
                            projects.map(item => {
                                return (
                                    <div className={`flex gap-x-2 items-center text-sm text-gray-600 ${!showProjects ? 'hidden' : 'block'} duration-300 cursor-pointer`}>
                                        <div>{item.icon}</div>
                                        <div>{item.name}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <hr className="text-gray-800" />
                <div className="mt-3 mb-3">
                    <div className="cursor-pointer">
                        <div onClick={handleShowTeam} className="flex items-center justify-between text-sm text-secondaryBlue font-semibold">
                            <div>Team Members</div>
                            <div className={`${!showTeam ? 'block' : 'rotate-180'} duration-300`}><IoIosArrowUp size={20} /></div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className={`flex gap-x-3 justify-end ${!showTeam ? 'hidden' : 'block'}`}>
                        <div>
                            <div className="text-lime-600 hover:cursor-pointer hover:scale-110 duration-100 relative w-8 h-8 rounded-full border-lime-600 border-2">
                                <div className="text-lime-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">3</div>
                            </div>
                        </div>
                        <div>
                            <div className="text-customBlue hover:cursor-pointer hover:scale-110 duration-100 relative w-8 h-8 rounded-full border-customBlue border-2">
                                <div className="text-customBlue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><BsPlusLg /></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default LeftNav
