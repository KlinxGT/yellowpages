import React, { useState } from "react";

const DeleteDialog = (props) => {
  const [result, setResult] = useState("");

  const deletePost = async (event) => {
    const response = await fetch(
      `https://yellowpages-backend.onrender.com/api/posts/${props._id}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      setResult("Post Deleted");
      props.hidePost();
    } else {
      console.log("Error deleting Post", response);
      setResult(response.message);
    }

    props.closeDialog();
  };

  return (
    <div id="delete-dialog">
          <div id="delete-content">
            <h3>Are you sure you want to delete the post?</h3>
            <section>
              <button onClick={deletePost}>Yes</button>
              <button onClick={props.closeDialog}>No</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
  );
};

export default DeleteDialog;