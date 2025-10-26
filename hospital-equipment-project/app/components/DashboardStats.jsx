export default function DashboardStats() {
  const stats = [
    { label: "Total Equipment", value: 25 },
    { label: "Active", value: 15 },
    { label: "Maintenance", value: 5 },
    { label: "Idle", value: 5 },
  ];

  return (
    <div className="stats-container">
      {stats.map(stat => (
        <div key={stat.label} className="stats-card">
          <h3>{stat.label}</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
