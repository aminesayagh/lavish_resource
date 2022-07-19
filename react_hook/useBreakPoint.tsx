import React, { useEffect, useState } from 'react';

import useWindowDimension from 'lib/hooks/useWindowDimension';

const useBreakPoint = (listValue) => {
    const { breakPoint } = useWindowDimension();
    const [ value, setValue ] = useState(listValue[breakPoint]);
    useEffect(() => {
        setValue(listValue[breakPoint]);
    }, [breakPoint]);

    return value;
}

export default useBreakPoint;