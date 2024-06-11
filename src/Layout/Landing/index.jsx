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





const handleFriend = () => {
    alert('You are my FRIEND!!');
}

const TopCard = () => {
    return (
        <div className='flex container origin-left flex-col justify-between items-center w-full h-full transition-all duration-200 ease-out'>
            <div className='h-[14%] w-full bg-red-700 shadow-bottom' />
            <div className='flex flex-row justify-around items-center w-full h-[65%]'>
                <div className='w-[45%] flex flex-col justify-center items-center'>
                    <Image src={'/assets/rayquaza.jpg'} alt='Rayquaza' width={150} height={160} />
                </div>
                <div className='flex flex-col relative w-[55%] h-[95%] gap-2 justify-between pr-2'>
                    <div className='w-full h-[33%]'>
                        <div className='bg-white h-full w-full border border-slate-500 transition-all duration-200 ease-out shadow-custom rounded-md'>
                            <div className='h-[50%] w-full bg-red-700 shadow-bottom text-white flex flex-row justify-around items-center'>
                                <span className='md:text-sm text-[10px] font-normal drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>007</span>
                                <span className='md:text-sm text-[10px] font-normal uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Devendra</span>
                            </div>
                            <div className='flex flex-row justify-center items-center h-[50%] md:text-[12px] text-[10px] font-normal drop-shadow-[0_1.2px_1.2px_rgba(0,0,1,0.4)] text-slate-700  uppercase'>
                                Sky High Pokemon
                            </div>
                        </div>
                    </div>
                    <div className='h-[33%] w-full flex flex-row justify-start items-center'>
                        <div className='border-2 border-slate-500 bg-white rounded-md transition-all duration-200 ease-out shadow-friend w-[50px] md:w-[25%] p-1 pt-2 text-slate-500 hover:cursor-pointer' onClick={handleFriend}>
                            <FriendLogo />
                        </div>
                        <div className='w-full md:w-[60%] lg:w-[60%] h-[35%] lg:h-[25%] flex flex-row items-center ml-2 md:ml-4 gap-2 lg:gap-2 -mt-4'>
                            <div className='w-full md:w-[45%] h-[85%] md:h-[70%] relative rounded flex flex-col justify-center items-center border border-slate-500'>
                                <div className='h-[50%] w-full bg-[#53a4cf] rounded-tl-sm rounded-tr-sm' />
                                <div className='h-[50%] w-full bg-[#f165f7] rounded-bl-sm rounded-br-sm' />
                                <span className='text-white font-semibold absolute text-center z-10 text-[7px] md:text-[8px] uppercase'>Dragon</span>
                            </div>
                            <div className='w-full md:w-[45%] h-[85%] md:h-[70%] relative rounded flex flex-col justify-center items-center border border-slate-500'>
                                <div className='h-[50%] w-full bg-[#3dc7ee] rounded-tl-sm rounded-tr-sm' />
                                <div className='h-[50%] w-full bg-[#bdb9b8] rounded-bl-sm rounded-br-sm' />
                                <span className='text-white font-semibold absolute text-center z-10 text-[7px] md:text-[8px] uppercase'>Flying</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[35%] flex flex-row justify-end items-center -mt-8'>
                        <div className=' bg-white md:px-4 flex flex-col justify-around rounded-md shadow-custom w-[68%] h-[90%] border-2 border-slate-500 transition-all duration-200 ease-out'>
                            <div className='h-full flex flex-row justify-around items-center'>
                                <span className='md:text-sm text-[10px] font-normal'>HT</span>
                                <span className='md:text-sm text-[10px] font-normal'>5' 10"</span>
                            </div>
                            <div className='h-[1px] border border-slate-700 border-dashed' />
                            <div className='h-full flex flex-row justify-around items-center'>
                                <span className='md:text-sm text-[10px] font-normal'>WT</span>
                                <span className='md:text-sm text-[10px] font-normal'>70 kgs</span>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <div className='bg-white h-[28%] md:h-[20%] w-[90%] mb-2 py-2 px-4 lg:pt-2 lg:pl-6 rounded bottom-1 md:bottom-2 border border-slate-700 shadow-text-box transition-all duration-200 ease-out text-[9px] md:text-[11px] lg:text-[12px] font-normal uppercase'>
                This intelligent creature roast hard berries with electricity to make them tender enough to eat.
            </div>
        </div>
    )
}

const BottomCard = () => {
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

export const LandingPage = () => {
    return (
        <div className="poke-font flex flex-col lg:flex-row w-full gap-2 h-full justify-center items-center bg-pokeball-sm bg-center transition-all duration-300 ease-out bg-cover lg:bg-pokeball-lg">
            <div className='relative transition-all duration-500 ease-out bg-white border-black w-[85%] h-[43%] md:w-[70%] md:h-[45%] lg:w-[43%] lg:h-[65%]'>
                {
                    <TopCard />
                }
                
            </div>
            <div className='relative transition-all duration-500 ease-out bg-white border-black w-[85%] h-[43%] md:w-[70%] md:h-[45%] lg:w-[43%] lg:h-[65%]'>
                {
                    <BottomCard />
                }
                
            </div>
        </div>
    )
}

// export default index
