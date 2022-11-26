import React from 'react'

function Head() {
    return (
        <div className="bg-white rounded-lg px-6 py-4 xs:hidden md:block">
            <div>
                <h1 className="text-4xl text-secondaryBlue font-medium tracking-tight">Audit and Inspection</h1>
            </div>
            <div className="mt-6 flex gap-x-12 text-base text-gray-500">
                <span className="">Inspection &nbsp; {">"}</span>
                <span className="">In Progress &nbsp; {">"}</span>
                <span className="">Inspection#112233 &nbsp; {">"}</span>
                <span className=" text-lime-600 font-bold">Electrical Vibrator - EV04</span>
            </div>
        </div>
    )
}

export default Head
