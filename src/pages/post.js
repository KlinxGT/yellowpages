import React, { useEffect, useState } from 'react';
import "../styles/post.css";

const Post = () => {

    useEffect(() => {
        document.title = 'Post';
    }, []);

    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState("");
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };
    
    const handleImageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs((values) => ({ ...values, [name]: value }));
    };
    
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        
        const formData = new FormData(event.target);
    
        const response = await fetch("https://yellowpages-backend.onrender.com/api/posts", {
        method: "POST",
        body: formData,
        });
        
        if (response.status === 200) {
        setResult("Post Successfully Added");
        event.target.reset(); //reset your form fields
        event.target.reset();
        //props.addHousePlan(await response.json());
        //props.closeDialog();
        } else {
        console.log("Error adding Post", response);
        setResult(response.message);
        }
    };
    
 
    return (
        <div id = "content">
            <form id = "form" onSubmit={onSubmit}>
                <h1>Post!</h1>
                <section id = "img">
                    <label htmlFor="pic">Image:</label>
                    <input 
                    type = "file" 
                    id = "pic" 
                    accept="image/png, image/jpeg"
                    name = "img"
                    onChange={handleImageChange}
                    />
                    <img id = "pre-view" src = {inputs.img != null ? URL.createObjectURL(inputs.img) : ""} alt = "preview"/>
                </section>
                <section id = "more">
                    <p>
                        <label htmlFor = "caption">Caption</label>
                        <textarea 
                        type = "text" 
                        id = "caption" 
                        name = "caption"
                        value = {inputs.caption || ""}
                        onChange={handleChange}
                        required></textarea>
                    </p>
                    <p>
                        <label htmlFor = "description">Extra Info</label>
                        <textarea 
                        type = "text" 
                        id = "description" 
                        name = "description"
                        value={inputs.description || ""}
                        onChange = {handleChange}
                        required></textarea>
                        <label htmlFor = "tags">Tags</label>
                        <textarea 
                        type = "text" 
                        id = "tags" 
                        name = "tags"
                        value = {inputs.tags || ""}
                        onChange = {handleChange}
                        required></textarea>
                    </p>
                </section>
                <button id = "poster" type = "submit">Post</button>
            </form>
            <h4 id = "result">{result}</h4>
        </div>
    )
};

export default Post;