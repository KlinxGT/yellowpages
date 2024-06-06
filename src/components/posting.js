import React, {useState} from "react";
//import EditDialog from "./edit-dialog";
//import DeleteDialog from "./delete-dialog";

const Posting = (props) => {
    //const [showEditDialog, setShowEditDialog] = useState(false);
    //const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const [numLikes, setNumLikes] = useState(props.numLikes) 
    const plusOne = () => {
        setNumLikes(numLikes+1);
    };
    const minusOne = () => {
        setNumLikes(numLikes-1);
    };

    return (
        <section className="post">
            <section className ="else">
                <img 
                className="postImg"
                src = {`https://yellowpages-backend.onrender.com/${props.image}`}/>
                <p>{props.caption}</p>
            </section>
            <section 
            className="like-count">
                <button 
                className = "likes"
                onClick = {plusOne}>Like</button>
                <h2>{numLikes}</h2>
                <button className= "dislikes"
                onClick = {minusOne}>Dislike</button>
            </section>
        </section>
    )

};

export default Posting;