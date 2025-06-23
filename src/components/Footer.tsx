import React from "react";

const Footer: React.FC = () => (
  <footer style={{ padding: "1em", borderTop: "1px solid #ccc", marginTop: "2em", textAlign: "center", color: "#888" }}>
    &copy; {new Date().getFullYear()} My Blog. All rights reserved.
  </footer>
);

export default Footer; 