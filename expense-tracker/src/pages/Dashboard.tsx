import Layout from "../components/Layout";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  {
    subject: "Office Supplies",
    employee: "John Smith",
    team: "Marketing",
    amount: "€150.00",
    color: "#4B0082",
  },
  {
    subject: "Business Lunch",
    employee: "Sarah Jade",
    team: "Sales",
    amount: "€75.50",
    color: "#B22222",
  },
  {
    subject: "Travel Expenses",
    employee: "Mike Brown",
    team: "Operations",
    amount: "€450.25",
    color: "#FF1493",
  },
  {
    subject: "Client Dinner",
    employee: "Jennifer Lee",
    team: "Marketing",
    amount: "€120.00",
    color: "#4B0082",
  },
  {
    subject: "Hotel",
    employee: "David Wilson",
    team: "Finance",
    amount: "€275.75",
    color: "#2E8B57",
  },
];

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <div
            style={{
              width: "40%",
              padding: 30,
              backgroundColor: "#1C1C1C",
              borderRadius: 1,
              border: "1px solid #2C2C2C",
              color: "white",
              marginRight: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Report
            </Typography>
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
              height={200}
            />
          </div>
          <div
            style={{
              width: "60%",
              padding: 30,
              backgroundColor: "#1C1C1C",
              borderRadius: 1,
              border: "1px solid #2C2C2C",
              color: "white",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Recent Transactions
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ backgroundColor: "#2C2C2C" }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Subject
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Employee
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Team
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Amount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ color: "white" }}>
                        {row.subject}
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {row.employee}
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={row.team}
                          sx={{ backgroundColor: row.color, color: "white" }}
                        />
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {row.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
