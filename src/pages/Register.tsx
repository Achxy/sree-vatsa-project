import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const Register: React.FC = () => {
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (register(username, password)) {
      navigate("/");
    } else {
      setError("Username already exists");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "3em auto", background: "#fff", padding: "2em", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ width: "100%", marginBottom: 12 }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: 12 }}
          required
        />
        {error && <div style={{ color: "#e53e3e", marginBottom: 12 }}>{error}</div>}
        <button type="submit" style={{ width: "100%" }}>Register</button>
      </form>
      <div style={{ marginTop: 16, textAlign: "center" }}>
        <span>Already have an account? </span>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register; 