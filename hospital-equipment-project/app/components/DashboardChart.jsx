"use client"; // ← Waa tan muhiimka ah
import { useEffect } from "react";

export default function DashboardChart() {
  useEffect(() => {
    console.log("Chart placeholder ready for real chart integration");
  }, []);

  return (
    <div className="card">
      <h3>Equipment Usage Chart</h3>
      <div style={{
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#999"
      }}>
        [Chart Placeholder]
      </div>
    </div>
  );
}
