import React, { useEffect } from 'react';

const Vote = () => {
    useEffect(() => {
        document.title = 'Vote';
    }, []);

    return <h1>Vote</h1>
};

export default Vote;