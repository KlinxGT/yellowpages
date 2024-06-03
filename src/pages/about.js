import React, { useEffect } from 'react';
import "../styles/about.css";

const About = () => {
    useEffect(()=> {
        document.title = "About";
    }, []);


    return (
        <div id ="content">
            <div id = "main">
                <section>
                    <section id = "me">
                        <h4>Our Great Founder:</h4>
                        <img src={require("../images/founder.png")}/>
                    </section>
                    <section id = "about"> 
                        <h4>Our Mission</h4>
                        <p>
                            Welcome to HipShare, your go-to destination for capturing and celebrating the essence of the hippie lifestyle through the art of photography. Our mission is to create a vibrant community where free spirits, dreamers, and nature enthusiasts can come together to share their stories and experiences. At HipShare, we believe in the transformative power of peace, love, and harmony, and we strive to reflect these values in every photo we take and every story we tell. 
                            Our blog is more than just a collection of beautiful images; it's a tapestry of moments that inspire and uplift. We journey across landscapes, from serene forests to bustling festivals, capturing the raw beauty of nature and the joyful spirit of human connection. Through our lens, we seek to evoke a sense of wonder and encourage our audience to embrace authenticity and mindful living.
                            We are passionate about sustainability and environmental stewardship, and we aim to highlight the importance of protecting our planet. By showcasing the delicate balance of our ecosystems and the interconnectedness of all life, we hope to inspire our community to take meaningful action towards preserving the Earth.
                            At HipShare, we celebrate diversity and inclusivity, believing that everyone has a unique perspective and story to share. We invite you to join us on this journey, to explore the world through our eyes, and to contribute your own experiences. Together, let's create a space where positive vibes flourish and the spirit of the hippie movement lives on.
                            Thank you for being a part of the HipShare family. Let's spread love, capture beauty, and make a difference, one photo at a time.
                        </p>
                    </section>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d19321298.694615662!2d-164.2853987769276!3d60.89213050783204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20maps!5e0!3m2!1sen!2sus!4v1716878096999!5m2!1sen!2sus" ></iframe>
                    <form id="contact" action = "https://api.web3forms.com/submit" method = "POST">
                        <h2>Contact Us</h2>
                        <input type = "hidden" name = "access_key" value="064b6d24-b848-4d9a-a39c-beafbb49127d"/>
                        <input type = "hidden" name = "subject" value = "Contact From Xin"/>
                        <section id = "fields">
                            <p>
                                <label htmlFor = "name">Name: </label>
                                <input id = "name" type="text" name="name" placeholder="Enter Name" required/>
                            </p>
                            <p>
                                <label htmlFor ="email">Email: </label>
                                <input id= "email" type="email" name="email" placeholder="Enter Email" required/>
                            </p>
                            <p>
                                <label htmlFor = "message">Message(optional): </label>
                                <textarea id = "message" name="message" placeholder="Write a brief message"></textarea>
                            </p>
                        </section>
                        <p>
                            <button type = "submit">Submit</button>
                        </p>
                        <p id = "results"></p>
                    </form>
                </section>
            </div>
        </div>
    )
};

export default About;