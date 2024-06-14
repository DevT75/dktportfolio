import React, { useState } from 'react'
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
import usePage from '@/context/PageContext';

export const ExtraInfo = () => {
    const [play] = useSound('/assets/rayquaza-cry.mp3');
    const handleFriend = () => {
        alert('You are my FRIEND!!');
    }
    const { info,setInfo,stats,setStats,track,setTrack } = usePage();
    return (
        <div className={`container relative transition-all duration-500 ease-out flex flex-col-reverse justify-between items-center w-full h-full`}>
            <div className='w-full z-10 h-[25%] lg:h-[15%] border-t-4 border-b-4 border-black transition-all duration-500 ease-out mb-1'>
                <div className='w-full h-full bg-blue-600 flex flex-row gap-1 md:gap-3 py-4 lg:py-2 px-2 justify-around items-center'>
                    <div className='flex lg:h-full flex-1 flex-col gap-1 justify-center items-center uppercase py-2 md:py-2 px-1.5 rounded-md border border-blue-600 border-dashed bg-white text-[10px] group'
                        onClick={() => {
                            setStats(true);
                            setInfo(false);
                            setTrack(false);
                        }}
                    >
                        <div className='hidden md:flex w-[50%] flex-col -mt-1'>
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
                        <div className='hidden lg:h-full md:flex w-[50%] flex-col -mt-1'>
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
                    <div className='flex flex-1 flex-col gap-1 justify-center items-center uppercase py-3 md:py-2 px-1.5 rounded-md border border-blue-600 border-dashed bg-white text-[10px] group'
                        onClick={() => {
                            setInfo(false);
                            setStats(false);
                            setTrack(true);
                        }}
                    >
                        <div className='hidden md:flex w-[50%] flex-col -mt-1'>
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

                    <div className='flex flex-1 flex-row gap-2 justify-center items-center uppercase py-3 md:py-[1.4rem] px-1.5 rounded-md border border-blue-600 border-dashed bg-white text-[10px] group'
                        onClick={() => {
                            setInfo(true);
                            setStats(false);
                            setTrack(false);
                        }}
                    >
                        <span>Quit</span>
                    </div>
                    {/* <div className='flex flex-1 flex-row justify-center items-center uppercase py-3 px-1.5 rounded-md border border-blue-600 border-dashed bg-white text-[10px]'>Quit</div> */}
                </div>
            </div>
            <div className='h-[75%] w-full flex flex-row justify-between items-center'>
                <div className='sidebar bg-red-700 sidebar-left shadow-sidebar-left flex-col justify-between items-center pr-3'>
                    <div className='w-full h-[50%] flex flex-col items-center pt-3'>
                        <FaCaretRight size={22} className='text-white' />
                        <span className='text-border-white text-border-size hover:text-border-size-1 text-[9px] font-semibold mt-1 text-center text-black uppercase'>
                            Info
                        </span>
                    </div>
                    <div className='w-full h-[50%] flex justify-center items-start'>
                        <span className='text-border-white text-border-size hover:text-border-size-1 text-[12px] -ml-[0.5] font-semibold text-center text-black uppercase -rotate-90'>
                            Start
                        </span>
                    </div>
                </div>
                <div className='flex justify-center items-center w-full h-full'>
                    <div>
                        Hello
                    </div>
                </div>
                <div className='sidebar bg-red-700 sidebar-right shadow-sidebar-right flex-col justify-between items-center pl-2'>
                    <div className='w-full h-[50%] flex flex-col items-center pt-10 group -pl-3'
                        onClick={() => {
                            setInfo(true);
                            setStats(false);
                            setTrack(false);
                        }}
                        id='lg-info'
                    >
                        <FaCaretLeft size={22} className='text-white group-hover:cursor-pointer' />
                        <span className=' text-border-white text-border-size hover:text-border-size-2 text-[15px] font-semibold mt-1 text-center text-black uppercase group-hover:cursor-pointer'>
                            Info
                        </span>
                    </div>
                    <div className='w-full h-[50%] flex items-start justify-center'>
                        <span className='text-border-white text-border-size hover:text-border-size-4 text-[18px] font-extrabold text-center text-black uppercase rotate-90'>
                            Start
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
