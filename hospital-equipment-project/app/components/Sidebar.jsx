"use client"; // ← Waa tan muhiimka ah

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside style={{
      width: collapsed ? "60px" : "220px",
      transition: "width 0.3s",
      backgroundColor: "#fff",
      borderRight: "1px solid #e0e0e0",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <button onClick={() => setCollapsed(!collapsed)} style={{ marginBottom: "20px", cursor: "pointer" }}>
        {collapsed ? "➡" : "⬅ Collapse"}
      </button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "15px" }}>
          <Link href="/dashboard">{collapsed ? "D" : "Dashboard"}</Link>
        </li>
        <li style={{ marginBottom: "15px" }}>
          <Link href="/equipment/add">{collapsed ? "+" : "Add Equipment"}</Link>
        </li>
        <li style={{ marginBottom: "15px" }}>
          <Link href="/equipment">{collapsed ? "E" : "Equipment List"}</Link>
        </li>
      </ul>
    </aside>
  );
}
