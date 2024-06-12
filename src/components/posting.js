import React, {useState} from "react";
//import EditDialog from "./edit-dialog";
//import DeleteDialog from "./delete-dialog";
import "../styles/posting.css";
import EditDialog from "./edit-dialog";
import DeleteDialog from "./delete-dialog";

const Posting = (props) => {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showPost, setShowPost] = useState(true);
  
    const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
    };

    const hidePost= (housePlan) => {
    setShowPost(false);
    };

    const openDeleteDialog = () => {
        setShowDeleteDialog(true);
      };


    const [showEditDialog, setShowEditDialog] = useState(false);
    const openEditDialog = () => {
        setShowEditDialog(true);
      };
    const closeEditDialog = () => {
        setShowEditDialog(false);
      };
    

    const [post, setPost] = useState(props);
    const editPost = (post) => {
    setPost(post);
    };

    
    //const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const [numLikes, setNumLikes] = useState(post.numLikes) 
    const plusOne = () => {
        setNumLikes(numLikes+1);
    };
    const minusOne = () => {
        setNumLikes(numLikes-1);
    };

    return (
        <section className="post">

            {showPost? (
            <>
            {showEditDialog ? (
            <EditDialog
                closeDialog={closeEditDialog}
                editPost={editPost}
                _id={post._id}
                caption={post.caption}
                extraInfo={post.extraInfo}
                image={post.image}
                tags={post.tags}
            />
            ) : (
            ""
            )}
            <section className ="else"
            onClick={openEditDialog}>
                <img 
                className="postImg"
                src = {`https://yellowpages-backend.onrender.com/${post.image}`}
                alt = "img"/>
                <section className="overlay">
                    <p><strong>Extra Info:</strong> {post.extraInfo}</p>
                    <p><strong>Tags: </strong>{post.tags}</p>
                </section>
            </section>
            <p>{post.caption}</p>           
            <section 
            className="like-count">
                <button 
                className = "likes"
                onClick = {plusOne}>Like</button>
                <h2>{numLikes}</h2>
                <button className= "dislikes"
                onClick = {minusOne}>Dislike</button>
            </section>
            <button
            onClick={openDeleteDialog}>DELETE</button>
            {showDeleteDialog ? (
            <DeleteDialog
              closeDialog={closeDeleteDialog}
              hidePost={hidePost}
              _id={post._id}
              
            />
          ) : (
            ""
          )}
        </>):""}

        </section>
    )
};

export default Posting;