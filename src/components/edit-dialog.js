//import "../styles/dialog.css";
import React, { useState } from "react";
import "../styles/edit.css";


const EditDialog = (props) => {
  
  
  const [inputs, setInputs] = useState({
    _id: props._id,
    caption: props.caption,
    extraInfo: props.extraInfo,
    tags: props.tags,
    prev_img: props.image
  });

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

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    const response = await fetch(
      `https://yellowpages-backend.onrender.com/api/posts/${props._id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (response.status === 200) {
      setResult("Post Successfully updated");
      event.target.reset(); //reset your form fields
      props.editPost(await response.json());
      props.closeDialog();
    } else {
      console.log("Error editing post", response);
      setResult(response.message);
    }
  };

return (
    <dialog id = "editBox" open>
    <form id="editForm" onSubmit={onSubmit}>
    <p>
        <label htmlFor="caption ">Caption:</label>
        <textarea
        type="text"
        id="caption"
        name="caption"
        value={inputs.caption || ""}
        onChange={handleChange}
        required
        />
    </p>
    <p>
        <label htmlFor="extraInfo">Extra Info:</label>
        <textarea
        type="text"
        id="extraInfo"
        name="extraInfo"
        value={inputs.extraInfo || ""}
        onChange={handleChange}
        required
        />
    </p>
    <p>
        <label htmlFor="tags">Bedrooms:</label>
        <textarea
        type="text"
        id="tags"
        name="tags"
        value={inputs.tags || ""}
        onChange={handleChange}
        required
        />
    </p>
 
    <section className="columns">
        
        <p id="img-upload">
        <label htmlFor="img">Upload Image:</label>
        <input
            type="file"
            id="img"
            name="img"
            onChange={handleImageChange}
            accept="image/*"
        />
        <img
            id="img-prev"
            src={
            inputs.img != null
                ? URL.createObjectURL(inputs.img)
                : inputs.prev_img != null
                ? `https://yellowpages-backend.onrender.com/${inputs.prev_img}`
                : ""
            }
            alt=""
        />
        </p>
    </section>
    <p>
        <button type="submit">Post</button>
    </p>
    <p id = "res">Results: {result}</p>
    </form>
    </dialog>
  );
};

export default EditDialog;