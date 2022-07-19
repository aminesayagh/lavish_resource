import { useRef, useMemo } from 'react';
import gsap from 'gsap';
export function useSelector() {
    const ref = useRef();
    const q = useMemo(() => gsap.utils.selector(ref), [ref]);
    return [q, ref] as const;
}

// https://codepen.io/GreenSock/pen/6e3d37391a412d1d3e9b3c60564d7d35