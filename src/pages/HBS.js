import React, { useEffect } from 'react';
import "../styles/HBS.css";
import myData from "../JSON/jason.json";

const HBS = () => {

    useEffect(() => {
        document.title = 'Home';
    }, []);

    //Gets JSON
    const getPost = async() => {
        try {
            return(myData);
        }
        catch (error) {
            console.log(error);
        }
    }
    //Gets shortest colum
    const getColum = () => {
        const col1 = document.getElementById("col1");
        const col2 = document.getElementById("col2");
        const col3 = document.getElementById("col3");
        const col0 = document.getElementById("col0");
    
        let theOne = col1;
        
        if(theOne.offsetHeight > col2.offsetHeight) {
            theOne = col2;
        }
        if(theOne.offsetHeight > col3.offsetHeight) {
            theOne = col3;
        }
        if(theOne.offsetHeight > col0.offsetHeight) {
            theOne = col0;
        }
    
        return theOne;
    } 
    

    //Posts pages
    const postPage = async() => {
        const posts = await getPost();
        posts.forEach(async (post) => {
            const sec = document.createElement("section");
            sec.classList.add("post");
    
            const img = document.createElement("img");
            img.src = require(`../${post.image}`);
            img.classList.add("postImg");
            sec.append(img);
            
            const cap = document.createElement("p");
            cap.textContent = post.caption;
            sec.append(cap);
    
            const likeSec = document.createElement("section");
            likeSec.classList.add("like-count");
    
            const likes = document.createElement("button");
            likes.classList.add("likes");
            likes.innerText = "Like";
            likes.onclick = () => {
                count.textContent = ++count.textContent;
            };
            likeSec.append(likes);
          
            const count = document.createElement("h2");
            count.textContent = 0;
            likeSec.append(count);
    
            const dislikes = document.createElement("button");
            dislikes.classList.add("dislikes");
            dislikes.innerHTML = "Dislike";
            dislikes.onclick = () => {
                count.textContent = --count.textContent;
            };
            likeSec.append(dislikes);
    
            sec.append(likeSec);
            
    
            const col = getColum();
            col.append(sec);
        });
    }
    
    postPage();
    return(
        <div id = "content">
            <section id = "banner">
                <h1>Home</h1>
                <label id = "labSearch" htmlFor = "search">Search:</label>
                <input id = "search" type = "text"></input>
            </section>
            <section id = "images">
                <section id = "col1" className = "colum">

                </section>
                <section id = "col2" className = "colum">

                </section>
                <section id = "col3" className = "colum">

                </section>
                <section id = "col0" className = "colum">

                </section>
            </section>
        </div>
    )
};

export default HBS;