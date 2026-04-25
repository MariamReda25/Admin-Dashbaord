import DashboardCharts from "../features/dashboard/DashboardCharts";
import DashboardStatistics from "../features/dashboard/DashboardStatistics";
import DashboardWidgets from "../features/dashboard/DashboardWidgets";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <>
      <Row>
        <Heading as="h2">Dashboard</Heading>
      </Row>
      <DashboardStatistics />
      <DashboardCharts />
      <DashboardWidgets />
    </>
  );
}

export default Dashboard;
