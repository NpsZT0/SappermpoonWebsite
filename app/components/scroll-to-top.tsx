'use client';

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
    const [displayStyle, setDisplayStyle] = useState('none') // ['none', 'block'
    // const [transitionStyle, setTransitionStyle] = useState('opacity 0.3s ease 0s') // ['opacity 0.5s ease-in-out', 'none'
    const [opacityStyle, setOpacityStyle] = useState('0') // ['0', '1'
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setDisplayStyle('block');
                setOpacityStyle('1');
            } else {
                setOpacityStyle('0');
                setTimeout(() => {
                    setDisplayStyle('none');
                }, 500);
            }
        };
        window.addEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <button onClick={scrollToTop} title="Scroll to top"
            className={`fixed p-2 text-center rounded-full bottom-4 right-4 backdrop-blur bg-primary/75 z-[2]`}
            style={{display: displayStyle, transition: 'opacity 0.3s ease 0s', opacity: opacityStyle}}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                className="w-6 h-6 text-gray-200 lg:w-8 lg:h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
        </button>
    );
}
