import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { posts as allPosts, comments as initialComments } from "../data/posts";

const LOCAL_LIKES_KEY = "blog_likes";
const LOCAL_COMMENTS_KEY = "blog_comments";

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = allPosts.find(p => p.id === id);

  // Likes state
  const [likes, setLikes] = useState<{ [postId: string]: number }>({});
  // Comments state
  const [comments, setComments] = useState(initialComments);
  const [commentInput, setCommentInput] = useState("");

  // Load likes and comments from localStorage
  useEffect(() => {
    const storedLikes = localStorage.getItem(LOCAL_LIKES_KEY);
    if (storedLikes) setLikes(JSON.parse(storedLikes));
    const storedComments = localStorage.getItem(LOCAL_COMMENTS_KEY);
    if (storedComments) setComments(JSON.parse(storedComments));
  }, []);

  // Save likes to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_LIKES_KEY, JSON.stringify(likes));
  }, [likes]);

  // Save comments to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_COMMENTS_KEY, JSON.stringify(comments));
  }, [comments]);

  if (!post) return <div style={{padding: '2em', textAlign: 'center', color: '#e53e3e'}}>Post not found.</div>;

  const postLikes = likes[post.id] || 0;
  const postComments = comments.filter(c => c.postId === id);

  const handleLike = () => {
    setLikes(l => ({ ...l, [post.id]: (l[post.id] || 0) + 1 }));
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    setComments(cs => ([...cs, { postId: post.id, author: "Guest", text: commentInput.trim() }]));
    setCommentInput("");
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <div style={{ marginBottom: "1em", color: "#555" }}>
        <strong>Author:</strong> {post.author} | <strong>Date:</strong> {post.date} | <strong>Category:</strong> {post.category}
      </div>
      <div style={{ marginBottom: "1em", background: "#f9f9f9", padding: "0.5em 1em", borderRadius: "6px" }}>
        <strong>About the author:</strong> <span style={{ color: "#888" }}>[Profile coming soon]</span>
      </div>
      <div style={{ margin: "1em 0" }}>{post.content}</div>
      <button onClick={handleLike} style={{ marginBottom: "1em" }}>👍 Like ({postLikes})</button>
      <h2>Comments</h2>
      <ul>
        {postComments.map((c, i) => (
          <li key={i}><strong>{c.author}:</strong> {c.text}</li>
        ))}
      </ul>
      <form onSubmit={handleAddComment} style={{ marginTop: "1em", display: "flex", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Add a comment..."
          style={{ width: "60%", marginRight: "0.5em" }}
          value={commentInput}
          onChange={e => setCommentInput(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Post; 