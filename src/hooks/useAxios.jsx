import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url) => {
    const [res, setRes] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(url)
                setRes(res)
                console.log(res)
            } catch(e) {
                setError(e)
            };
            setIsLoading(false)
        };
        getData()
    }, [url]);

    return { res, error, isLoading }
};

export default useAxios;