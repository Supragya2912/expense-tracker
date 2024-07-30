import Layout from "../components/Layout";
import { Grid } from "@mui/material";
import ExpenseReport from "../components/ExpenseReport";
import RecentTransaction from "../components/RecentTransaction";
import QuickAccess from "../components/QuickAccess";

const Dashboard = () => {
  return (
    <Layout>
      <div
        style={{
          marginTop: 100,
          width: "calc(100% - 300px)",
          marginLeft: 300,
        }}
      >
        <Grid container spacing={3} padding={3}>
          <Grid item xs={12} md={5}>
            <ExpenseReport />
          </Grid>
          <Grid item xs={12} md={7}>
            <RecentTransaction />
          </Grid>
        </Grid>
        <Grid container spacing={3} padding={3}>
        <Grid item xs={12} md={12}>
          <QuickAccess />
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Dashboard;
