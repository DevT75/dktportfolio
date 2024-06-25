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
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import useSound from 'use-sound';
import usePage from '@/context/PageContext';

export const ExtraInfo = () => {
    const [play] = useSound('/assets/rayquaza-cry.mp3');
    const handleFriend = () => {
        alert('You are my FRIEND!!');
    }
    const { info, setInfo, stats, setStats, track, setTrack } = usePage();
    return (
        <div className={`container relative transition-all duration-500 ease-out flex flex-col-reverse justify-between items-center w-full h-full`}>
            <div className='w-full z-10 h-[25%] lg:h-[15%] border-t-4 border-b-4 border-black transition-all duration-500 ease-out mb-1'>
                <div className='w-full h-full bg-blue-600 flex flex-row gap-1 md:gap-3 py-4 lg:py-2 px-2 justify-around items-center'>
                    <div className='relative flex lg:h-[90%] text-[10px] md:text-[12px] xl:text-[14px] xlg:text-[16px] flex-1 flex-row gap-2 p-[2%] justify-center items-center uppercase px-1.5 rounded-md border border-blue-600 border-dashed bg-white group'
                        onClick={() => {
                            setStats(true);
                            setInfo(false);
                            setTrack(false);
                        }}
                    >
                        {/* <div className='hidden md:flex w-[50%] flex-col -mt-1'>
                            <div className='flex flex-row justify-center items-center'>
                                <PiArrowCircleUp size={16} />
                            </div>
                            <div className='flex flex-row justify-center items-center'>
                                <PiArrowCircleLeftFill size={16} />
                                <PiArrowCircleDown size={16} />
                                <PiArrowCircleRight size={16} />
                            </div>
                        </div> */}
                        {/* <div className="hidden md:flex absolute bg-black rounded-tl rounded-bl border-black text-white left-0 h-full w-[10px] flex flex-row justify-center items-center">
                            <FaAngleLeft size={14}/>
                        </div> */}
                        <span className='flex justify-center items-center mt-1.5'>Stats</span>
                    </div>
                    <div className='flex p-[2%] relative lg:h-[90%] text-[10px] md:text-[12px] xl:text-[14px] xlg:text-[16px] flex-1 flex-row gap-2 justify-center items-center uppercase px-1.5 rounded-md border border-blue-600 border-dashed bg-white group'>
                        {/* <div className='hidden lg:h-full md:flex w-[50%] flex-col -mt-1'>
                            <div className='flex flex-row justify-center items-center'>
                                <PiArrowCircleUp size={14} />
                            </div>
                            <div className='flex flex-row justify-center items-center'>
                                <PiArrowCircleLeft size={14} />
                                <PiArrowCircleDownFill size={14} />
                                <PiArrowCircleRight size={14} />
                            </div>
                        </div> */}
                        {/* <div className="hidden md:flex absolute bg-black rounded-bl rounded-br border-black text-white bottom-0 w-full h-[8px] flex flex-row justify-center items-center">
                            <FaAngleDown size={14} className="md:flex" />
                        </div> */}
                        <span className='flex justify-center items-center mt-1.5'>Details</span>
                    </div>
                    <div className='relative flex lg:h-[90%] text-[10px] md:text-[12px] xl:text-[14px] xlg:text-[16px] flex-1 flex-row gap-2 p-[2%] justify-center items-center uppercase px-1.5 rounded-md border border-blue-600 border-dashed bg-white group'
                        onClick={() => {
                            setInfo(false);
                            setStats(false);
                            setTrack(true);
                        }}
                    >
                        {/* <div className='hidden md:flex w-[50%] flex-col -mt-1'>
                            <div className='flex flex-row justify-center items-center'>
                                <PiArrowCircleUp size={14} />
                            </div>
                            <div className='flex flex-row justify-center items-center'>
                                <PiArrowCircleLeft size={14} />
                                <PiArrowCircleDown size={14} />
                                <PiArrowCircleRightFill size={14} />
                            </div>
                        </div> */}
                        {/* <div className="hidden md:flex absolute bg-black rounded-tr rounded-br border-black text-white right-0 h-full w-[10px] flex flex-row justify-center items-center">
                            <FaAngleRight size={14} className="md:flex" />
                        </div> */}
                        <span className='flex justify-center items-center mt-1.5'>Track</span>
                    </div>
                    <div className='relative flex lg:h-[90%] text-[10px] md:text-[12px] xl:text-[14px] xlg:text-[16px] flex-1 flex-row gap-2 p-[2%] justify-center items-center uppercase px-1.5 rounded-md border border-blue-600 border-dashed bg-white group'
                        onClick={() => {
                            setInfo(true);
                            setStats(false);
                            setTrack(false);
                        }}
                    >
                        <span className='flex justify-center items-center mt-1.5'>Quit</span>
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
                    <div className="w-[80%] h-[80%] items-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda repellat, consequatur vero placeat dicta commodi hic praesentium. Ab amet dolorem illo officia eveniet consequuntur cumque! Molestias minima earum quod beatae!
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
