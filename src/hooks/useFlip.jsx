import React, { useState } from 'react';

const useFlip = () => {
    const [isUp, setisUp] = useState(true);
    const toggleIsUp = () => {
        setisUp(isUp => !isUp)
    };
    return [isUp, toggleIsUp]
};

export default useFlip;