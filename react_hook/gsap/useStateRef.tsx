import { useState, useRef, useCallback} from 'react';

export function useStateRef(defaultValue) {
    const [state, setState] = useState(defaultValue);
    const ref = useRef(state);

    const dispatch = useCallback((value) => {
        ref.current = typeof value === 'function' ? value(ref.current) : value;
        setState(ref.current);
    }, []);

    return [state, dispatch, ref]
}

// https://codepen.io/GreenSock/pen/XWRqzbQ