import React, { useState, useRef } from 'react'
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
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// Register ChartJS components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// Custom plugin for formatted ticks
const formattedTicksPlugin = {
    id: 'formattedTicks',
    afterDraw: (chart) => {
        const { ctx, scales: { r } } = chart;
        const centerX = r.xCenter;
        const centerY = r.yCenter;

        ctx.save();
        ctx.font = '8px Pokefont';

        const tickValues = [0, 50, 100, 150];
        const tickLabels = ['Low', 'Medium', 'High', 'Best'];
        const colors = ['transparent', 'transparent', 'transparent', 'transparent'];
        const rotationAngle = 26 * Math.PI / 180;

        tickValues.forEach((value, index) => {
            const angle = Math.PI * 1.68; // Position at top
            const radius = r.getDistanceFromCenterForValue(value);

            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;

            ctx.beginPath();
            ctx.arc(x, y, 15, 0, 2 * Math.PI);
            ctx.fillStyle = colors[index];
            ctx.fill();

            // Draw rotated text
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.translate(x, y + value / 50 + (value > 50 ? 9 : 0) + (value > 100 ? 0 : 0));
            ctx.rotate(rotationAngle);
            ctx.fillText(tickLabels[index], 0, 0);
            ctx.rotate(-rotationAngle);
            ctx.translate(-x, -y);
        });

        ctx.restore();
    }
};

// Custom plugin for additional text labels
// const textPlugin = {
//     id: 'textPlugin',
//     afterDraw: (chart) => {
//         const ctx = chart.ctx;
//         const scale = chart.scales.r;

//         ctx.save();
//         ctx.font = '12px Arial';
//         ctx.fillStyle = 'black';
//         ctx.textAlign = 'center';
//         ctx.textBaseline = 'middle';

//         const texts = ['Best', 'Decent', 'Decent', 'Best', 'Best', 'Best'];
//         const angles = [0, 60, 120, 180, 240, 300];
//         const radius = scale.drawingArea + 20;

//         angles.forEach((angle, index) => {
//             const angleRad = angle * Math.PI / 180;
//             const x = scale.xCenter + Math.cos(angleRad) * radius;
//             const y = scale.yCenter + Math.sin(angleRad) * radius;

//             ctx.fillText(texts[index], x, y);
//         });

//         ctx.restore();
//     }
// };

// Register custom plugins
ChartJS.register(formattedTicksPlugin);

const data = {
    labels: ['Web Tech', 'DSA', 'Comms', 'CP', 'API', 'UI/UX'],
    datasets: [
        {
            data: [150, 100, 100, 150, 150, 150],
            backgroundColor: 'rgba(0, 128, 0, 0.2)',
            borderColor: 'rgb(0, 128, 0)',
            borderWidth: 2,
            pointBackgroundColor: 'rgb(0, 128, 0)',
        },
    ],
};

export const RadarChart = ({ data }) => {
    const options = {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 150,
                ticks: {
                    stepSize: 50,
                    display: false, // Hide default ticks
                    font: {
                        size: 8,
                        weight: 'bold'
                    }
                },
                pointLabels: {
                    font: {
                        size: 10,
                        weight: 'bold',
                        family: 'Pokefont'
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return <Radar data={data} options={options} />;
};


export const Stats = () => {
    const [play] = useSound('/assets/rayquaza-cry.mp3');
    const handleFriend = () => {
        alert('You are my FRIEND!!');
    }
    const { stats } = usePage();
    const menuItems = useRef([]);
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    useGSAP(() => {
        gsap.fromTo('.skill-tab', {
            x: 500,
        }, {
            x: 0,
            stagger: 0.15
        })
    }, []);
    const handleMenuClick = (index) => {
        if (activeMenuItem == index) return;
        if (activeMenuItem !== null) {
            gsap.to(menuItems.current[activeMenuItem], {
                scale: 1,
                x: 0,
                duration: 0.2,
                ease: "power2.inOut"
            });
        }
        gsap.to(menuItems.current[index], {
            scale: 1.1,
            x: -10,
            duration: 0.2,
            ease: "power2.inOut"
        });
        setActiveMenuItem(index);
    };
    return (
        // <div className={`flex container -mt-0 ${stats ? "translate-x-0" : "translate-x-[101%]"} origin-left flex-col justify-between items-center w-full h-full transition-all duration-200 ease-out`}>
        <div className={`flex container -mt-0 ${stats ? "translate-x-0" : "translate-x-[101%]"} origin-left flex-col justify-between items-center w-full h-full transition-all duration-200 ease-out`}>
            <div className='h-[14%] w-full bg-red-700 shadow-bottom flex flex-row justify-start items-center pl-4 gap-2'>
                <FaCaretDown size={24} className='text-white -mt-1' />
                <span className='text-[16px] uppercase text-center text-white text-border-black text-border-size-2'>Stats</span>
            </div>
            <div className='w-full h-[75%] flex flex-row justify-center md:justify-between'>
                <div className='w-[70%] md:w-[60%] h-full flex justify-center items-center'>
                    <RadarChart data={data} />
                </div>
                <div className='w-[40%] hidden md:flex flex-col  md:gap-3 xl:gap-8 justify-center items-center'>
                    {['Web Dev', 'DSA', 'Tact', 'ML', 'All'].map((item, index) => (
                        <div
                            key={index}
                            ref={el => menuItems.current[index] = el}
                            onClick={() => handleMenuClick(index)}
                            className='ml-10 skill-tab relative bg-red-700 shadow-bottom px-4 py-2 rounded w-[150px] h-[25px] flex flex-row items-center justify-center hover:cursor-pointer'
                        >
                            <div className='absolute -left-6 h-[35px] w-[35px] rounded-full bg-red-700' />
                            <div className='absolute -left-[15px] h-[17px] w-[17px] rounded-full bg-white' />
                            <span className='text-white uppercase text-[12px] text-center pt-1 group-hover:cursor-pointer'>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-white h-[7%] md:h-auto w-[90%] mb-1 md:mb-2 py-1 md:py-2 px-4 lg:pt-2 lg:pl-6 rounded bottom-1 md:bottom-2 border border-slate-700 shadow-text-box transition-all duration-200 ease-out text-[9px] md:text-[11px] lg:text-[12px] font-normal uppercase'>
                Relatively Superior Potential
            </div>
        </div>
    )
}