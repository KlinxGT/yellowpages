import React, { useEffect } from 'react';

const HOF = () => {
    useEffect(() => {
        document.title = 'Hall of Fame';
    }, []);
    
    return <h1>HOF</h1>
};

export default HOF;