import React from "react";
import {
  Typography,
  Select,
  MenuItem,
  FormControl,
  Grid,
  InputLabel,
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const pData = [
  2400, 1398, 9800, 3908, 4800, 3800, 4300, 3490, 4300, 4300, 4300, 4300,
];
const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const SavingGraph = () => {
  return (
    <div style={{ border: "1px solid gray", borderRadius: 5, padding: 20 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={8}>
          <Typography variant="caption" sx={{ fontSize: 18 }}>
            Total saved this year{" "}
            <span style={{ fontSize: 22, fontWeight: "bold" }}>Rs. 10,000</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} container justifyContent="flex-end">
          <FormControl sx={{ width: "50%" }}>
            <InputLabel id="filter-select-label" sx={{ color: "white" }}>
              Filter
            </InputLabel>
            <Select
              defaultValue=""
              id="filter-select"
              label="Filter"
              sx={{
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
            >
              <MenuItem value="week">Last Week</MenuItem>
              <MenuItem value="month"> Last Month</MenuItem>
              <MenuItem value="year"> Last Year</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="caption" sx={{ fontSize: 18 }}>
            Last 12 months{" "}
            <span style={{ fontWeight: "bold", color: "green" }}>+ 50%</span>
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: 20 }}>
        <Grid item xs={12} md={10}>
          <LineChart
            sx={{
              "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                strokeWidth: "1",
                fill: "white",
              },
              "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
                fontFamily: "Roboto",
              },
              "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                strokeWidth: "1",
                fill: "white",
              },
              "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                stroke: "white",
                strokeWidth: 1,
              },
              "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                stroke: "white",
                strokeWidth: 1,
              },
            }}
            colors={["green"]}
            width={900}
            height={300}
            series={[{ data: pData }]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SavingGraph;
