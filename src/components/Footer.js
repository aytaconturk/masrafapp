import React from 'react'

function Footer() {
    return (
        <div className="bg-white rounded-lg px-8 py-6">
            <div className="flex gap-x-14 items-baseline mb-4">
                <span className="xs:text-base lg:text-lg font-semibold">Inspection By: &nbsp;&nbsp; <span className="text-gray-600 xs:text-sm lg:text-base font-normal">Shafiq Khattak</span></span>
                <div>
                    <label className="xs:text-base lg:text-lg font-semibold mr-4" htmlFor="submittedto">Submitted To:</label>
                    <select className="form-select rounded-md text-gray-600 xs:text-sm lg:text-base" id="submittedto" disabled>
                        <option>Waseem Ali</option>
                        <option>Ali Imran</option>
                        <option>Raheel Khan</option>
                    </select>  
                </div>              
            </div>
            <hr className="divide-x-2 text-gray-700" />
            <div className="mt-4">
                <span className="xs:text-base lg:text-lg font-semibold">Status: &nbsp;&nbsp; <span className="text-gray-600 xs:text-sm lg:text-base font-normal">Pending Approval</span></span>
                <div className="mt-6 flex justify-center">
                    <button className="px-4 py-2 w-64 text-center bg-lime-600 text-white font-semibold rounded-lg hover:bg-opacity-80 duration-300">Print</button>
                </div>
            </div>
        </div>
    )
}

export default Footer
