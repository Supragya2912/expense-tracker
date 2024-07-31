import React from "react";
import { Grid, Typography, Paper, Button } from "@mui/material";
import {
  MdReceipt,
  MdOutlineReport,

  MdOutlineAttachMoney,
} from "react-icons/md";
import { Link } from "react-router-dom";



const QuickAccess = () => {
  const items = [
    { label: "Savings", icon: <MdOutlineAttachMoney />, color: "#b83f87" , link: '/savings'  },
    { label: "Add Transaction", icon: <MdReceipt />, color: "#2e2a85", link: '/transactions' },
    { label: "Set Goal", icon: <MdOutlineReport />, color: "#00766c", link: '/savings' },
    // { label: "Create trip", icon: <MdOutlineTripOrigin />, color: "#8a2326" , link: '/trips' },
  ];

  return (
    <div 
      style={{
        padding: 24,
        backgroundColor: "#1C1C1C",
        borderRadius: 5,
        border: "1px solid #2C2C2C",
        color: "white",
      }}
    >
      <Typography variant="h6" sx={{ color: "white", marginBottom: 2 }}>
        Quick Access
      </Typography>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
          >
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 3,
                backgroundColor: "#2C2C2C",
                borderRadius: 2,
                color: "white",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: item.color,
                  marginRight: 10,
                }}
              >
                {item.icon}
              </div>
              <Button  component={Link}
                to={item.link} fullWidth sx={{ color: "white" }}>{`+ ${item.label}`}</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default QuickAccess;
