import { LandingPage } from '@/Layout';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Home() {
    const upperRef = useRef();
    const lowerRef = useRef();

    useGSAP(() => {
        const t1 = gsap.timeline({
            onComplete: () => {
                console.log('Completed!!');
            }
        });

        t1.fromTo(upperRef.current, {
            backgroundColor: "white",
            zIndex: 10,
            height: "50%"
        }, {
            backgroundColor: "#f4f5f4",
            zIndex: 10,
            height: "7%",
            duration: 1,
            delay:0.5,
            ease: "power2.out",
            onComplete: () => {
                upperRef.current.style.display = "none";
            }
        });

        t1.fromTo(lowerRef.current, {
            backgroundColor: "red",
            zIndex: 10,
            height: "50%"
        }, {
            backgroundColor: "#282829",
            zIndex: 10,
            height: "7%",
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                lowerRef.current.style.display = "none";
            }
        }, "<");
        t1.to('.content',{
            display: "flex",
            opacity: 1,
            duration: 1,
            ease: "power2.out",
        },'<')
    }, []);

    return (
        <>
            <div ref={upperRef} className="absolute transition-all duration-500 ease-out w-full top-0 upper" id="upper" />
            <div className="relative transition-all duration-500 ease-out content opacity-0 h-screen flex-col">
                <LandingPage />
            </div>
            <div ref={lowerRef} className="absolute transition-all duration-500 ease-out w-full bottom-0 lower m-0" id="lower" />
        </>
    );
}
