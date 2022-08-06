import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Blogpage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setPosts(data);
          setLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <div className="blog-Style">
      {loading && <Loader />}
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  );
};
export { Blogpage };
