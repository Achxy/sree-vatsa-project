import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";

const Home: React.FC = () => (
  <div>
    <h1>Blog Posts</h1>
    <div style={{ marginBottom: "1em" }}>
      <input type="text" placeholder="Search posts..." style={{ marginRight: "1em" }} />
      <select style={{ marginRight: "1em" }} disabled>
        <option>All Categories</option>
      </select>
      <button disabled style={{ opacity: 0.5 }}>+ New Post</button>
    </div>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/post/${post.id}`}><strong>{post.title}</strong></Link>
          <div>By {post.author} on {post.date} | Category: {post.category}</div>
          <p>{post.summary}</p>
        </li>
      ))}
    </ul>
    <div style={{ marginTop: "2em", textAlign: "center" }}>
      <button disabled style={{ marginRight: "1em", opacity: 0.5 }}>Prev</button>
      <span>Page 1 of 1</span>
      <button disabled style={{ marginLeft: "1em", opacity: 0.5 }}>Next</button>
    </div>
  </div>
);

export default Home; 