import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import {
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const ExpenseReport = () => {
  return (
    <div
      style={{
        padding: 30,
        backgroundColor: "#1C1C1C",
        borderRadius: 5,
        border: "1px solid #2C2C2C",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Expense Report
        </Typography>
        <FormControl>
          <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
            Filter
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Filter"
            sx={{
              width: 200,
              backgroundColor: "#2C2C2C",
              color: "white",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "#2C2C2C",
                  color: "white",
                },
              },
            }}
            // value={age}
            // onChange={handleChange}
          >
            <MenuItem value={10}>Today</MenuItem>
            <MenuItem value={20}>Yesterday</MenuItem>
            <MenuItem value={30}>Monthly</MenuItem>
            <MenuItem value={40}>Yearly</MenuItem>
          </Select>
        </FormControl>
      </div>

      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 180,
          },
        ]}
        width={500}
        height={377}
      />
    </div>
  );
};

export default ExpenseReport;
