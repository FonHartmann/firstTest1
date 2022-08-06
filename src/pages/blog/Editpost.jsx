import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { TextareaAutosize } from "@mui/material";

const Editpost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      {post && (
        <h1>
          <TextareaAutosize style={{ width: 500 }}>
            {post.body}
          </TextareaAutosize>
          <button>Save</button>
        </h1>
      )}
    </div>
  );
};
export { Editpost };
