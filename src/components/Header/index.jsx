import { MainLogo } from "../Icons";
import { useRef } from 'react';
import gsap from 'gsap'
import { MenuButton } from '@/components';

export const Header = () => {
    const logoRef = useRef(null);
    const onLogoEnter = () => {
        const currColor = logoRef.current.getAttribute('data-color');
        const logoSvg = logoRef.current.firstChild.children[0];
        const nextColor =
            currColor === '#a6e2e3'
                ? '#8566f6'
                : currColor === '#8566f6'
                    ? '#ed7c50'
                    : '#a6e2e3';
        logoRef.current.setAttribute('data-color', nextColor);
        gsap.to(logoSvg, {
            attr: { fill: currColor },
            duration: 0.5,
            ease: 'power1.in',
        });
    }
    const onLogoLeave = () => {
        const logoSvg = logoRef.current.firstChild.children[0];
        gsap.to(logoSvg, {
            attr: { fill: "#282829" },
            duration: 0.5,
            ease: 'power1.out',
        });
    }
    return (
        <div className="header min-w-screen fixed top-0 left-0 z-10 w-screen px-7 transition-all duration-500 ease-out">
            <div className="overflow-hidden bg-none">
                <div className="header_container flex items-center justify-between transition-all duration-500 ease-out will-change-transform pt-4 lg:py-4">
                    <MenuButton>Menu</MenuButton>
                    <div
                        className="header_logo pointer-event-auto cursor-pointer leading-none transition-height [&>svg]:h-10 [&>svg]:duration-500 [&>svg]:ease-out lg:[&>svg]:h-[60px]"
                        data-color='#a6e2e3'
                        ref={logoRef}
                        onMouseEnter={onLogoEnter}
                        onMouseLeave={onLogoLeave}
                    >
                        <MainLogo />
                    </div>
                    <MenuButton>Contact</MenuButton>
                </div>
            </div>

        </div>
    );
}
