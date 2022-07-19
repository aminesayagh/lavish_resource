import { useState, useEffect } from 'react';

export enum BREAKPOINT {
  XXS = 'xxs',
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2XL',
  '3XL' = '3XL',
  '4XL' = '4XL'
}

function getBreakpoint(width: number) {
  if (width < 475) {
    return BREAKPOINT.XXS;
  } else if (width < 640) {
    return BREAKPOINT.XS;
  } else if (width < 768) {
    return BREAKPOINT.SM;
  } else if (width < 1024) {
    return BREAKPOINT.MD;
  } else if (width < 1280) {
    return BREAKPOINT.LG;
  } else if (width < 1536) {
    return BREAKPOINT.XL;
  } else if (width < 1600) {
    return BREAKPOINT['2XL'];
  } else  if (width < 2100){
    return BREAKPOINT['3XL'];
  } else {
    return BREAKPOINT['4XL'];
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<{ width: number, height: number, breakPoint: BREAKPOINT }>();

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width, innerHeight: height } = window;
      const breakPoint = getBreakpoint(width);
      setWindowDimensions({ width, height, breakPoint });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}