import { Typography, Button, IconButton } from "@mui/material";
import Layout from "../components/Layout";
import { FaFilter } from "react-icons/fa";
import TransactionsTable from "../components/TransactionTable";
import useAddTransaction from "../hooks/transaction/useAddTransaction";
import AddTransaction from "../components/AddTransaction";

const Transactions = () => {

  const { state, handleOpenAddTransaction, handleCloseAddTransaction } =
    useAddTransaction();

    console.log(state.open);

  return (
    <Layout>
      {state.open ? (
        <AddTransaction  handleCloseAddTransaction={handleCloseAddTransaction}/>
      ) : (
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
            <Typography
              variant="h4"
              sx={{  fontWeight: "bold" }}
            >
              Transactions
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
                onClick={handleOpenAddTransaction}
              >
                + Add Transaction
              </Button>
              <IconButton>
                <FaFilter color="white" />
              </IconButton>
            </div>
          </div>

          <div style={{ padding: 20 }}>
            <TransactionsTable transactions={[]} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Transactions;
