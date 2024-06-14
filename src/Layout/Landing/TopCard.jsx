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
import usePage from '@/context/PageContext';
import { Info } from './Info';
import { Stats } from './Stats';
import { Track } from './Track';
export const TopCard = () => {
    const { info, stats, track } = usePage();
    return (
        <div className='w-full h-full overflow-hidden'>
            {
                info && <Info/>
            }
            {
                stats && <Stats/>
            }
            {
                track && <Track/>
            }
                {/* <Stats/>
                <Track/>
                <Info/> */}
        </div>
    )
}