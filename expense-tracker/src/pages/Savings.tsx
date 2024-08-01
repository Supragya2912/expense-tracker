import { Typography, Button, IconButton } from "@mui/material";
import Layout from "../components/Layout";
import { FaFilter } from "react-icons/fa";
import SavingGraph from "../components/SavingGraph";
import SavingsCard from "../components/SavingsCard";

const Transactions = () => {
  return (
    <Layout>
      <div
        style={{
          marginTop: 100,
          width: "calc(100% - 300px)",
          marginLeft: 300,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Savings
          </Typography>
          <div>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "black",
                color: "white",
                borderColor: "white",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "black",
                },
                marginRight: 2,
              }}
              // onClick={handleOpenAddTransaction}
            >
              + Set Goal
            </Button>
            <IconButton>
              <FaFilter color="white" />
            </IconButton>
          </div>
        </div>

        <div style={{ display: "flex", gap: 20 , padding: 20}}>
          <SavingsCard amount={300} description="Saved this month" />
          <SavingsCard amount={1200} description="Saved this year" />
        </div>

        <div style={{ padding: 20 }}>
          <SavingGraph />
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;
