import React, { useEffect } from 'react';

const Post = () => {

    useEffect(() => {
        document.title = 'Post';
    }, []);
 
    return <h1>post</h1>
};

export default Post;