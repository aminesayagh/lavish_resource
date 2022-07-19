import { useState, useRef, useEffect, useCallback } from 'react';

import { gsap } from 'gsap';
import useScrollPosition from '@react-hook/window-scroll'
const useScrollToSection = () => {
    const scrollY = useScrollPosition(60)
    const goToSection = useCallback((section_id) => {
        console.log(scrollY);
        gsap.to(window, {duration: 2, scrollTo: {y: '#' + section_id, offsetY: 100, autoKill: true }, ease: 'power2'})
        // tl.play();
    }, []);

    return [ goToSection ];
}

export default useScrollToSection;