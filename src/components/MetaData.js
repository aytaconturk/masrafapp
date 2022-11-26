import React from 'react'

function MetaData() {
    return (
        <div className="bg-white rounded-lg px-6 py-2 md:grid md:grid-cols-1 md:divide-y xs:flex xs:flex-col xs:gap-y-20 md:gap-y-0">
            <div className="flex md:gap-x-14 xs:gap-y-3 md:gap-y-0 text-sm font-semibold h-14 items-center xs:flex-col md:flex-row">
                <span>Inspection ID: &nbsp;&nbsp; <span className="text-gray-600 font-normal">112233</span></span>
                <span>Identification Number: &nbsp;&nbsp; <span className="text-gray-600 font-normal">EV-01</span></span>
                <span>Project: &nbsp;&nbsp; <span className="text-gray-600 font-normal">Truck Loading Silo</span></span>
                <span>Location: &nbsp;&nbsp; <span className="text-gray-600 font-normal">Silo-2</span></span>
            </div>
            <div className="flex gap-x-14 xs:gap-y-3 md:gap-y-0 text-sm font-semibold h-14 items-center xs:flex-col md:flex-row">
                <span>Due Date: &nbsp;&nbsp; <span className="text-gray-600 font-normal">Mar 8, 2021 10:30 am</span></span>
                <span>Inspection Date: &nbsp;&nbsp; <span className="text-gray-600 font-normal">Mar 8, 2021 10:30 am</span></span>
            </div>
        </div>
    )
}

export default MetaData
