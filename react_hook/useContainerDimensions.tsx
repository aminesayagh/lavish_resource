import React, { useState, useEffect } from 'react';


const getDimensions = (myRef) => ({
  width: myRef.current.offsetWidth,
  height: myRef.current.offsetHeight
})

const UseContainerDimensions = myRef => {
  
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
    useEffect(() => {
      const handleResize = () => {
        setDimensions(getDimensions(myRef))
      }
  
      if (myRef.current) {
        setDimensions(getDimensions(myRef))
      }
  
      window.addEventListener("resize", handleResize)
  
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [myRef])
  
    return dimensions;
  };

  export default UseContainerDimensions;