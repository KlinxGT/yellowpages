import React, { useEffect, useState } from 'react';
import "../styles/HBS.css";
//import myData from "../JSON/jason.json";
import axios from 'axios';
import Posting from "../components/posting";

const HBS = () => {

    //Gets JSON
    /*
    const getPost = async() => {
        try {
            return(myData);
        }
        catch (error) {
            console.log(error);
        }
    }
    */ 

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        document.title = 'Home';
        (async () => {
          const response = await axios.get(
            "https://yellowpages-backend.onrender.com/api/posts"
          );
          setPosts(response.data);
        })();
      }, []);

    return(
        <div id = "content">
            <section id = "banner">
                <h1>Home</h1>
                <label id = "labSearch" htmlFor = "search">Search:</label>
                <input id = "search" type = "text"></input>
            </section>
            <section id = "images">
                <dialog id="edit" open>
                    <form method = "dialog" id = "editor"> 
                        <img id = "emage"/>
                        <button>Heyoo</button>
                    </form>
                </dialog>
               
                <section id = "col1" className = "colum">
                    {posts.map((post, id)=>(<>{id%4 === 0 ? (
                    <Posting key={post._id}
                            _id={post._id}
                            image = {post.image}
                            caption = {post.caption}
                            numLikes = {post.likeCount} />) : ("")} </>   
                    ))}
                </section>
                <section id = "col2" className = "colum">
                    {posts.map((post, id)=>(<>{id%4 === 1 ? (
                    <Posting key={post._id}
                            _id={post._id}
                            image = {post.image}
                            caption = {post.caption}
                            numLikes = {post.likeCount} />) : ("")} </>   
                    ))}
                </section>
                <section id = "col3" className = "colum">
                    {posts.map((post, id)=>(<>{id%4 === 2 ? (
                    <Posting key={post._id}
                            _id={post._id}
                            image = {post.image}
                            caption = {post.caption}
                            numLikes = {post.likeCount} />) : ("")} </>   
                    ))}
                </section>
                <section id = "col0" className = "colum">
                    {posts.map((post, id)=>(<>{id%4 === 3 ? (
                        <Posting key={post._id}
                                _id={post._id}
                                image = {post.image}
                                caption = {post.caption}
                                numLikes = {post.likeCount} />) : ("")} </>   
                        ))}
                </section>

            </section>
        </div>
    )
};

export default HBS;