import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Singlepage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div className="blog-Style">
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <button>
            <Link to={`edit`}>Edit</Link>
          </button>
        </>
      )}
    </div>
  );
};
export { Singlepage };
