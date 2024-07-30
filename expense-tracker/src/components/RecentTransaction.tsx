import React from 'react'
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

const RecentTransaction = () => {
  return (
    <div
    style={{
      padding: 30,
      backgroundColor: "#1C1C1C",
      borderRadius: 5,
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
  )
}

export default RecentTransaction