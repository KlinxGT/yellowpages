import React, { useEffect } from 'react';
import "../styles/post.css";

const Post = () => {

    useEffect(() => {
        document.title = 'Post';
    }, []);

        
   


 
    return (
        <div id = "content">
            <form id = "form">
                <h1>Post!</h1>
                <section id = "img">
                    <input type = "file" id = "pic" accept="image/png, image/jpeg"/>
                    <img src = "" alt = "preview"/>
                </section>
                <section id = "more">
                    <p>
                        <label htmlFor = "caption">Caption</label>
                        <textarea type = "text" id = "caption" required></textarea>
                    </p>
                    <p>
                        <label htmlFor = "description">Extra Info</label>
                        <textarea type = "text" id = "description" required></textarea>
                        <label htmlFor = "tags">Tags</label>
                        <textarea type = "text" id = "tags" required></textarea>
                    </p>
                </section>
                <button id = "poster" type = "submit">Post</button>
            </form>
            <h4 id = "result"></h4>
        </div>
    )
};

export default Post;