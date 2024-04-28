import React from 'react'
import { useState } from 'react'

export default function Inputfield(
    //props
    {
        label,
        optionlist=["inr", "usd", "another option"],

    }

) {
    return (
        <div className="p-4 px-4 rounded-lg max-w-lg max-h-screen-sm md:max-w-screen-sm border-black border-2">
            <div className='flex flex-col gap-4 text-center md:flex md:flex-row md:items-center md:justify-between '>
                <div
                    className="flex flex-col gap-2 flex-wrap"
                >
                    <label
                        className="text-black text-lg md:self-start md:pl-2"
                        htmlFor={label}>{label}</label>
                    <input
                        className="border-black border-2 rounded-lg h-8 max-w-60 self-center"
                        type="number"
                        placeholder='Amount'    
                    />
                </div>
                <div className='md:flex md:flex-col md:text-right md:flex-wrap  gap-2'>
                <label
                        className="text-black text-lg md:hidden"
                        htmlFor={label}>{label}</label>
                    <p className="text-md text-lg">Select Currency</p>
                    <select className="text-lg w-32 md:w-auto border-black border-2 rounded-lg cursor-pointer" >{
                        optionlist.map(
                            (element)=> <option key={element} value={element}>{element}</option>
                        )
                    }

                    </select>
                </div>

            </div>
        </div>

    )
}
