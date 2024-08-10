import React from "react";
import { Typography, Button, IconButton, LinearProgress, Box } from "@mui/material";
import Layout from "../components/Layout";
import { FaFilter } from "react-icons/fa";
import SavingGraph from "../components/SavingGraph";
import SavingsCard from "../components/SavingsCard";
import useListSaving from "../hooks/saving/useListSaving";
import moment from "moment";

const Transactions: React.FC = () => {
  const currentSavings = 300;
  const monthlyGoal = 500;

  const saving = useListSaving();
  console.log("saving", saving);

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

        <div style={{ display: "flex", gap: 20, padding: 20 }}>
          <SavingsCard amount={saving[0]?.currentAmount} description="Saved this month" />
          <SavingsCard amount={1200} description="Saved this year" />
          <div style={{ border: "1px solid gray", borderRadius: 5, padding: 20, width: 750 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Monthly Savings Goal <span>({moment(saving[0]?.startDate).format('DD/MM/YYYY')} - {moment(saving[0]?.endDate).format('DD/MM/YYYY')})</span> 
            </Typography>
            <Box display="flex" alignItems="center" mt={2} position="relative">
              <Box width="100%" mr={1}>
                <LinearProgress
                  variant="determinate"
                  color="success"
                  value={(currentSavings / monthlyGoal) * 100}
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
              <Box position="absolute" left={0} bottom="-25px">
                <Typography variant="body2" sx={{ color: "white" }}>
                  ${saving[0]?.currentAmount}
                </Typography>
              </Box>
              <Box position="absolute" right={0} bottom="-25px">
                <Typography variant="body2" sx={{ color: "white" }}>
                  ${saving[0]?.targetAmount}
                </Typography>
              </Box>
            </Box>
          </div>
        </div>

        <div style={{ padding: 20 }}>
          <SavingGraph />
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;
