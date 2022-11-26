import React from 'react'
import ElectricVibrator from '../images/electric-vibrator.png'

function ElectricComponent() {

    const data = [
        {
            index: 1,
            point: "Physical condition of body is good and sound",
            status: "Yes"
        },
        {
            index: 2,
            point: "Power cable is free from damages and connections are made using industrial plugs",
            status: "No"
        },
        {
            index: 3,
            point: "Junction box of motor is free from defects",
            status: "No"
        },
        {
            index: 4,
            point: "On / Off Switch is properly insulated",
            status: "Yes"
        },
        {
            index: 5,
            point: "Protective guard is installed on rotary parts of machine",
            status: "N/A"
        },
        {
            index: 6,
            point: "Hose and Needle is tightly connected with motor",
            status: "Yes"
        },
        {
            index: 7,
            point: "Needle should be free from damages",
            status: "Yes"
        },
        {
            index: 8,
            point: "Machine is properly grounded and resistance of less than 5 ohm is achieved",
            status: "Yes"
        }
    ]

    const colorize = (item) => {
        if(item.status.toLowerCase() === 'yes') {
            return 'text-lime-600'
        }
        else if(item.status.toLowerCase() === 'no') {
            return 'text-red-400'
        }
        else {
            return 'text-gray-400'
        }
    }

    return (
        <div className="bg-white rounded-lg px-6 py-6 xs:h-max lg:h-screen relative">
            <div className="text-2xl text-secondaryBlue text-center uppercase font-semibold">
                Electrical Vibrator
            </div>
            <div className="mt-2 text-normal text-center font-medium">
                Inspection Summary
            </div>

            <div className="mt-10 flex xs:flex-col lg:flex-row xs:justify-center lg:justify-between items-center xs:px-6 lg:px-8 xl:px-20">
                <div className="xs:order-2 lg:order-1">
                    <div className="w-96 h-24 border-2 border-opacity-50 flex justify-around items-center">
                        <div className="text-sm font-semibold">
                            Inspection Score:
                        </div>
                        <div className="text-sm">
                            Not Satisfactory
                        </div>
                    </div>
                    <div className="w-96 h-110 border-2 border-t-0 border-opacity-50 px-6 py-4 flex flex-col gap-y-4 overflow-y-scroll">
                        {
                            data.map(item => {
                                return (
                                    <div className="flex justify-between items-center text-sm">
                                        <div className="w-3/4 font-medium">{item.index+'.'}  {item.point}</div>
                                        <div className={`flex gap-x-3 items-center text-base ${colorize(item)}`}>
                                            <label for={item.index}>{item.status}</label>
                                            <input className={`form-radio outline-none ${colorize(item)}`} type="radio" id={item.index} checked />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="xs:order-1 lg:order-2">
                    <img className="xs:w-110 xs:h-auto lg:w-128 lg:h-auto" src={ElectricVibrator} alt="Electric Vibrator" />
                </div>
            </div>
            
        </div>
    )
}

export default ElectricComponent
