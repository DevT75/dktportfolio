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
import { IndiaMap } from '@/components';

export const Track = () => {
    const [play] = useSound('/assets/rayquaza-cry.mp3');
    const handleFriend = () => {
        alert('You are my FRIEND!!');
    }
    const { track } = usePage();
    return (
        // <div className={`flex container ${track ? "translate-x-0" : "-translate-x-[101%]"} -translate-y-[100.5%] flex-col justify-between items-center w-full h-full transition-all duration-200 ease-out`}>
        <div className={`flex container flex-col justify-between items-center w-full h-full transition-all duration-200 ease-out`}>
            <div className='h-[14%] w-full bg-green shadow-bottom flex flex-row justify-start items-center pl-4 gap-2'>
                <FaCaretDown size={24} className='text-white -mt-1 text-border-black text-border-size-2' />
                <span className='text-[18px] text-border-black text-border-size-2 uppercase text-center text-white'>Track</span>
            </div>
            <div className='h-[86%] w-full flex justify-start items-center'>
                <div className='relative w-[200px] h-[200px] md:w-[230px] md:h-[230px] lg:w-[350px] lg:h-[350px]
                    transition-all duration-200 ease-out
                '>
                    <Image
                        src={'/assets/india.svg'}
                        alt='Rayquaza'
                        layout='fill'
                        objectFit='contain'
                        priority
                        className='rounded-lg cursor-pointer'
                        onClick={play}
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                    />
                    <div className='absolute top-[29%] left-[22%] md:top-[32%] md:left-[26%] lg:top-[40%] lg:left-[33%] h-[100px] w-[100px]'>
                        <div className='w-[3px] h-[3px] lg:w-[4px] lg:h-[4px] absolute top-[50%] left-[50%] rounded-full bg-white -translate-x-[50%] -translate-y-[50%]'></div>
                        <div className='absolute border-4 border-white border-dashed rounded-full ping top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'></div>
                    </div>
                </div>

            </div>
        </div>
    )
}