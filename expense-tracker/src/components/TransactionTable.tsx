import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TransactionsTableProps } from "../interface/transaction/transaction";

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactions,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="transactions table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#0B0B0B", border: "2px solid white" }}>
            <TableCell align="center" sx={{ color: "white" }}>Title</TableCell>
            <TableCell align="center" sx={{ color: "white" }}>Merchant</TableCell>
            <TableCell align="center" sx={{ color: "white" }}>Amount</TableCell>
            <TableCell align="center" sx={{ color: "white" }}>Date</TableCell>
            <TableCell align="center" sx={{ color: "white" }}>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(transactions) && transactions.length > 0 ? (
            transactions.map((transaction) => (
              <TableRow key={transaction.userId + transaction.date.toISOString()} sx={{ backgroundColor: "#1C1C1C" }}>
                <TableCell align="center" sx={{ color: "white" }}>{transaction.title}</TableCell>
                <TableCell align="center" sx={{ color: "white" }}>{transaction.merchant}</TableCell>
                <TableCell align="center" sx={{ color: "white" }}>${transaction.amount.toFixed(2)}</TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  {new Intl.DateTimeFormat("en-US").format(new Date(transaction.date))}
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>{transaction.type}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow sx={{ backgroundColor: "#1C1C1C" }}>
              <TableCell align="center" colSpan={5} sx={{ color: "white", padding: "20px 0" , fontWeight: "bold"}}>
                No transactions
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionsTable;
