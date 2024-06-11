import React from 'react'
import Image from 'next/image'
import { FriendLogo } from '@/components'
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { PiArrowCircleRight } from "react-icons/pi";
import { PiArrowCircleRightFill } from "react-icons/pi";
import { PiArrowCircleLeft } from "react-icons/pi";
import { PiArrowCircleLeftFill } from "react-icons/pi";
import { PiArrowCircleDown } from "react-icons/pi";
import { PiArrowCircleDownFill } from "react-icons/pi";
import { PiArrowCircleUp } from "react-icons/pi";
import { PiArrowCircleUpFill } from "react-icons/pi";
import useSound from 'use-sound';


export const BottomCard = () => {
    return (
        <div className='container transition-all duration-500 ease-out origin-right flex flex-col-reverse justify-between items-center w-full h-full'>
            <div className='w-full h-[25%] lg:h-[15%] border-t-4 border-b-4 border-black transition-all duration-500 ease-out'>
                <div className='w-full h-full bg-blue-600 flex flex-row gap-1 md:gap-2 py-4 px-2 justify-around items-center'>
                    <div className='flex flex-1 flex-col gap-1 justify-center items-center uppercase py-3 md:py-2 px-1.5 rounded-md border border-blue-600 border-dashed bg-white text-[10px] group'>
                        <div className='hidden sm:flex w-[50%] flex-col -mt-1'>
                            <div className='flex flex-row justify-center items-center'>
                                <PiArrowCircleUp size={14} />
                            </div>
                            <div className='flex flex-row justify-center items-center'>
                                <PiArrowCircleLeftFill size={14} />
                                <PiArrowCircleDown size={14} />
                                <PiArrowCircleRight size={14} />
                            </div>
                        </div>
                        <span className='flex justify-center items-center'>Stats</span>
                    </div>
                    <div className='flex flex-1 flex-col gap-1 justify-center items-center uppercase py-3 md:py-2 px-1.5 rounded-md border border-blue-600 border-dashed bg-white text-[10px] group'>
                        <div className='hidden sm:flex w-[50%] flex-col -mt-1'>
                            <div className='flex flex-row justify-center items-center'>
                                <PiArrowCircleUp size={14} />
                            </div>
                            <div className='flex flex-row justify-center items-center'>
                                <PiArrowCircleLeft size={14} />
                                <PiArrowCircleDownFill size={14} />
                                <PiArrowCircleRight size={14} />
                            </div>
                        </div>
                        <span>Details</span>
                    </div>
                    <div className='flex flex-1 flex-col gap-1 justify-center items-center uppercase py-3 md:py-2 px-1.5 rounded-md border border-blue-600 border-dashed bg-white text-[10px] group'>
                        <div className='hidden sm:flex w-[50%] flex-col -mt-1'>
                            <div className='flex flex-row justify-center items-center'>
                                <PiArrowCircleUp size={14} />
                            </div>
                            <div className='flex flex-row justify-center items-center'>
                                <PiArrowCircleLeft size={14} />
                                <PiArrowCircleDown size={14} />
                                <PiArrowCircleRightFill size={14} />
                            </div>
                        </div>
                        <span>Track</span>
                    </div>

                    <div className='flex flex-1 flex-row gap-2 justify-center items-center uppercase py-3 md:py-[1.4rem] px-1.5 rounded-md border border-blue-600 border-dashed bg-white text-[10px] group'>
                        <span>Quit</span>
                    </div>
                    {/* <div className='flex flex-1 flex-row justify-center items-center uppercase py-3 px-1.5 rounded-md border border-blue-600 border-dashed bg-white text-[10px]'>Quit</div> */}
                </div>
            </div>
        </div>
    )
}