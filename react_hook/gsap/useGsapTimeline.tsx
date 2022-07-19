import { useState, useRef, useEffect, useCallback } from 'react';

import { gsap } from 'gsap';

// init timeline
// creator of animation action
export interface GsapOptions {
    reversed: boolean,
    timeline?: any,
    payload: {
        method?: 'from' | 'to' | 'add' | 'fromTo',
        selector: string,
        option?: any,
        position?: string | number
    }[]
}

const useGsapTimeline = (options: GsapOptions) => {
    const [ open, setOpen ] = useState(false);

    const [ ref, setRef ] = useState({ });

    const { current: tl } = useRef(gsap.timeline({ paused: true, ...options?.timeline }));

    useEffect(() => {
        const q = gsap.utils.selector(ref);
        options.payload.forEach(({ selector, option, position = '', method= 'from' }) => {
            if(method == 'from' || method == 'to'){
                if(document.querySelector(selector)){
                    tl[method](selector != '' ? q(selector) : ref, option, position);
                }else{
                    console.log(selector + ' not exist');
                }
            } else if(method == 'add') {
                tl[method](selector, position);
            } else if(method == 'fromTo') {
                tl[method](selector != '' ? q(selector) : ref, option[0], option[1], position);
            }
        })
        // return (() => {
        //     tl.kill();
        // })
    }, [options, ref]);

    const animate = useCallback(() => {
        open ? tl.reverse() : tl.play();
        setOpen(!open);
        return tl;
    }, [open]);

    const stock = useCallback(() => {
        return tl;
    }, []);
    return [ setRef, animate, stock ];
}

export default useGsapTimeline;


const documentation = () => {
    // const { current: props } = useRef({
    //     width: 200,
    //     height: 200,
    //     ease: "elastic.inOut(1, 1)"
    // });
    
    // const [ ref, animate] = useGsapTimeline(props);
    
    // return (
    //     <div className="container">
    //         <div ref={ref} onClick={animate} className="toggle"></div>
    //     </div>
    // )
    
    // const [ ref, animate, stock1 ] = useGsapTimeline(props);
    // const [ ref, animate, stock2 ] = useGsapTimeline(props);
    // const [ ref, animate, stock3 ] = useGsapTimeline(props);
    
    // let masterAnimation = gsap.timeline();
    // masterAnimation.add(stock1()).add(stock2(), '+=2').add(stock3(), '-=1');
}
