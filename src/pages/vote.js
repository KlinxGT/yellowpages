import React, { useEffect } from 'react';
import "../styles/vote.css";

const Vote = () => {
    useEffect(() => {
        document.title = 'Vote';
    }, []);

    return (
        <div id = "content">
            <section id = "main">
                <h1>Vote!</h1>
                <p>Vote for this month's "Worst Amateur" photograph to be exiled from the archive and banished into the Hall of Fame!</p>
                <section id = "contest">
                    <section className = "choice gold" id = "cont1" >
                        <img src = {require("../images/abook.jpg")} alt ="Book" />
                        <section className = "info">
                            <section>
                                <h4>Description:</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit quam nec lorem posuere, 
                                    Just read 1984 by George Orwell. God what a read; it quite literally blew my mind. Just the
                                    sheer depth of the story and the message behind it. I'm sure most people wouldn't understanding
                                    the subtleties to it but it really struck me to the core. Blah blah blah I'm so smart, look at me yall
                                    I read a book that's deep, I'm deep and wise and better than everyone. Please please please give me the 
                                    validation and approval I never got from the friends I never had.</p>
                            </section>
                            <section>
                                <h4>Extra Info:</h4>
                                <p>My thoughts behind this image was to reflect how smart I want people to think I am.</p>
                                <h4>Tags:</h4>
                                <p>Phone pic, Books, "Intellectual", Self-Esteem Issues </p>
                            </section>
                        </section>
                        <button>Remove</button>
                    </section>
                    <section className = "choice silver" id = "cont2" >
                        <img src = {require("../images/manbun.jpg")} alt = "Manbun"/>
                        <section className = "info">
                            <section>
                                <h4>Description:</h4>
                                <p>Manbun, enough said</p>
                            </section>
                            <section>
                                <h4>Extra Info:</h4>
                                <p>Manbun.</p>
                                <h4>Tags:</h4>
                                <p>Manbun, Nokia Pro Camera</p>
                            </section>
                        </section>
                        <button>Remove</button>
                    </section>
                    <section className = "choice bronze" id = "cont3">
                        <img src = {require("../images/trustfund.jpg")} alt = "hippies"/>
                        <section className = "info">
                            <section>
                                <h4>Description:</h4>
                                <p>Our parents work for lockheed martin and we have trust funds.</p>
                            </section>
                            <section>
                                <h4>Extra Info:</h4>
                                <p>Did you know hippies protested heavily against nuclear energy?</p>
                                <h4>Tags:</h4>
                                <p>Hippies, 4000$ Professional Photographer paid by Daddy's Money</p>
                            </section>
                        </section>
                        <button>Remove</button>
                    </section>
                </section>
            </section>
        </div>
    )
};

export default Vote;