import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FriendLogo, MainLogo } from '@/components'
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
import { PiSpeakerHighFill } from "react-icons/pi";
import { PiSpeakerSlashFill } from "react-icons/pi";
import useSound from 'use-sound';
import { TopCard } from './TopCard';
import { BottomCard } from './BottomCard';



export const LandingPage = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [quit,setQuit] = useState(false);
    const [play, { stop }] = useSound('assets/pokemon-theme-song.mp3', {
        loop: true,
    });
    const toggleAudio = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? play() : stop();
    };
    // useEffect(() => {
    //     stop();
    //     play();
    // }, [toggleAudio])
    return (
        <div className="poke-font flex flex-col w-full h-full justify-between items-center bg-pokeball-sm bg-center transition-all duration-300 ease-out bg-cover lg:bg-pokeball-lg">
            {
                quit && <div>Click me!!</div>
            }
            <div className='w-full h-[8%] z-0 flex flex-row justify-center items-center bg-[#f4f5f4] md:py-2 transition-all duration-300 ease-out'>
                <div className='flex flex-row items-center justify-center h-full w-[50%] md:w-[40%] transition-all duration-300 ease-out down'>
                    <div className='w-[70%] md:w-[40%] h-full transition-all duration-300 ease-out'><MainLogo /></div>
                    <div className='h-full w-[20%] md:w-[5%] text-center flex justify-center items-center text-md uppercase mt-1 text-slate-500 transition-all duration-300 ease-out'>x</div>
                    <div className='relative h-full w-[70%] md:w-[40%] transition-all duration-300 ease-out'>
                        <Image
                            src={'/assets/pokemon-logo.jpg'}
                            alt='Pokemon'
                            layout='fill'
                            objectFit='contain'
                            priority
                            className='rounded-lg cursor-pointer'
                        />
                    </div>
                </div>
                <div className='absolute right-[5%] show transition-all duration-300 ease-out'>
                    {
                        !isPlaying ? <PiSpeakerHighFill onClick={toggleAudio} /> : <PiSpeakerSlashFill onClick={toggleAudio} />
                    }
                </div>
            </div>
            <div className='flex flex-col z-0 lg:flex-row justify-center gap-1 items-center transition-all duration-500 ease-out h-[84%] w-full'>
                <div className='relative transition-all duration-500 ease-out bg-white border-black w-[85%] h-[48%] md:w-[70%] md:h-[50%] lg:w-[43%] lg:h-[75%]'>
                    {
                        <TopCard />
                    }
                </div>
                <div className='relative transition-all duration-500 ease-out bg-white border-black w-[85%] h-[48%] md:w-[70%] md:h-[50%] lg:w-[43%] lg:h-[75%]'>
                    {
                        <BottomCard />
                    }
                </div>
            </div>
            <div className='hover:cursor-pointer bg-black w-full h-[7%] flex justify-center items-center text-white uppercase text-[10px]'>
                    <span className="up pt-1">All Rights Reserved @2024</span>
            </div>
        </div>
    )
}

// export default index
