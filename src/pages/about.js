import React, { useEffect } from 'react';

const About = () => {
    useEffect(()=> {
        document.title = "About";
    }, []);

    return <h1>About</h1>
};

export default About;