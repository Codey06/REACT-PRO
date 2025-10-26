export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Human Care Diagnostic</h1>
      <div>
        <button style={{
          backgroundColor: "#fff",
          color: "#1976d2",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          cursor: "pointer"
        }}>Logout</button>
      </div>
    </nav>
  );
}
