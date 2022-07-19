import { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';


const useGsapToggle = options => {
    const [ open, set ] = useState(false);

    const [ ref, setRef ] = useState({ });

    const { current: tl } = useRef(gsap.timeline({ paused: true }));

    useEffect(() => {
        tl.to(ref, options);
    }, [ref, options, tl]);

    const animate = useCallback(() => {
        open ? tl.reverse() : tl.play();
        set(!open);
    }, [open, tl]);

    return [setRef, animate];
}

export default useGsapToggle;