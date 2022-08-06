import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

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
          <textarea
            rows="18"
            cols="92"
            onkeypress="if(use_kb) return decode(event);"
          >
            {post.body}
          </textarea>
          <button>Save</button>
        </h1>
      )}
    </div>
  );
};
export { Editpost };
