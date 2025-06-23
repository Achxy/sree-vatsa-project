import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, onToggleDarkMode }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header style={{ padding: "1em", borderBottom: "1px solid #ccc", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <Link to="/" style={{ fontWeight: "bold", fontSize: "1.2em", textDecoration: "none" }}>My Blog</Link>
      </div>
      <nav style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ marginRight: "1em" }}>Home</Link>
        {user ? (
          <>
            <span style={{ color: "#2563eb", fontWeight: 500, marginRight: 16 }}>Hi, {user.username}</span>
            <button onClick={handleLogout} style={{ marginRight: 16, background: "#f87171", color: "#fff" }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: "1em" }}>Login</Link>
            <Link to="/register" style={{ marginRight: "1em" }}>Register</Link>
          </>
        )}
        <button onClick={onToggleDarkMode} style={{ background: "none", color: darkMode ? "#fbbf24" : "#222", border: "1px solid #ccc", borderRadius: 20, padding: "0.3em 1em", cursor: "pointer", fontWeight: 500 }}>
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </nav>
    </header>
  );
};

export default Header; 