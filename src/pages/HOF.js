import React, { useEffect } from 'react';
import "../styles/HOF.css";

const HOF = () => {
    useEffect(() => {
        document.title = 'Hall of Fame';
    }, []);
    
    return (
        <div id = "content">
            <div id = "main">
                <h1>Hall of Fame</h1>
                <p>This is where each month's least bad photo goes. As an Amateur Hippie Photo Site, we have a status quo of mediocrity to maintain. 
                    Thus, the best photo is removed from general viewing and placed here. 
                </p>
                <section id = "hall">
                    <section className = "famers">
                        <h3>March 2024</h3>
                        <img src = {require("../images/abook.jpg" )} alt = "Book"/>
                    </section>
                    
                    <section className = "famers">
                        <h3>April 2024</h3>
                        <img src = {require("../images/angel.jpg")} alt = "Angel"/>
                    </section>
                    
                    <section className = "famers">
                        <h3>May 2024</h3>
                        <img src = {require("../images/book.jpg")} alt = "Book"/>
                    </section>
                    
                    <section className = "famers">
                        <h3>June 2024</h3>
                        <img src = {require("../images/coffee.jpg")} alt = "Coffee"/>
                    </section>

                    <section className = "famers">
                        <h3>July 2024</h3>
                        <img src = {require("../images/couple.jpg")} alt = "Couple"/>
                    </section>

                    <section className = "famers">
                        <h3>August 2024</h3>
                        <img src = {require("../images/dreams.jpg")} alt = "Dreams"/>
                    </section>
                </section>
            </div>
        </div>
    )
};

export default HOF;