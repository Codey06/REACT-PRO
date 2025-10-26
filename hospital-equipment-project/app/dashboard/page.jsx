import DashboardChart from "../components/DashboardChart";
import DashboardStats from "../components/DashboardStats";

export default function DashboardPage() {
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Dashboard</h2>
      <DashboardStats />
      <DashboardChart />
    </div>
  );
}

