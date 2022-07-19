import { useState, useCallback } from 'react';
import useScrollToSection from './gsap/useScrollToSection';
import { useRouter } from 'next/router'

const useGoToItemLink = () => {
    const [ goToSection ] = useScrollToSection();
    const router = useRouter();

    const goToItemLink = useCallback(async({ id, page }) => {
        if(router.pathname != page ) await router.push(page);
        goToSection(id);
    }, [])
    return [ goToItemLink ]
}

export default useGoToItemLink;