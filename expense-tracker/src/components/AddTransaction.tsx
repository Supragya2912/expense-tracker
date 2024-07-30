import React from "react";
import {
  IconButton,
  Typography,
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import { FaRegWindowClose } from "react-icons/fa";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Dropzone from "react-dropzone";
import { FaPlus } from "react-icons/fa";

interface AddTransactionProps {
  handleCloseAddTransaction: () => void;
}

const AddTransaction: React.FC<AddTransactionProps> = ({
  handleCloseAddTransaction,
}) => {
  return (
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
          New Transaction
        </Typography>
        <IconButton
          onClick={handleCloseAddTransaction}
          style={{ backgroundColor: "white" }}
        >
          <FaRegWindowClose color="black" />
        </IconButton>
      </div>
      <hr />
      <div style={{ padding: 20 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <form>
                <Box mb={2}>
                  <FormControl fullWidth variant="outlined">
                    <Typography variant="subtitle1">Type</Typography>
                    <Select
                      sx={{
                        backgroundColor: "#1C1C1C",
                        borderRadius: 1,
                        "& .MuiInputBase-input": {
                          color: "white",
                        },
                        "& .MuiInputLabel-root": {
                          color: "white",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "white",
                          },
                          "&:hover fieldset": {
                            borderColor: "white",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "white",
                          },
                        },
                      }}
                      defaultValue=""
                      // value={value}
                      // onChange={handleChange}
                    >
                      <MenuItem value="income">Income</MenuItem>
                      <MenuItem value="expense">Expense</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box mb={2}>
                  <Typography variant="subtitle1">Title</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    sx={{
                      backgroundColor: "#1C1C1C",
                      borderRadius: 1,
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                      "& .MuiInputLabel-root": {
                        color: "white",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    InputProps={{
                      style: { color: "white" },
                    }}
                  />
                </Box>

                <Box mb={2}>
                  <Typography variant="subtitle1">Amount</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="number"
                    sx={{
                      backgroundColor: "#1C1C1C",
                      borderRadius: 1,
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                      "& .MuiInputLabel-root": {
                        color: "white",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    InputProps={{
                      style: { color: "white" },
                    }}
                  />
                </Box>

                <Box mb={2}>
                  <FormControl fullWidth variant="outlined">
                    {/* <InputLabel id="date-label">Date</InputLabel> */}
                    <DatePicker
                      value={null} // Set default value or state here
                      sx={{
                        backgroundColor: "#1C1C1C",
                        borderRadius: 1,
                        "& .MuiInputBase-input": {
                          color: "white",
                        },
                        "& .MuiInputLabel-root": {
                          color: "white",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "white",
                          },
                          "&:hover fieldset": {
                            borderColor: "white",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "white",
                          },
                        },
                      }}
                    />
                  </FormControl>
                </Box>

                <Box mb={2}>
                  <Typography variant="subtitle1">Merchant</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    sx={{
                      backgroundColor: "#1C1C1C",
                      borderRadius: 1,
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                      "& .MuiInputLabel-root": {
                        color: "white",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    InputProps={{
                      style: { color: "white" },
                    }}
                  />
                </Box>
              </form>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} md={6}>
            <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div
                    {...getRootProps()}
                    style={{
                      border: "2px dashed #cccccc",
                      borderRadius: 4,
                      padding: 20,
                      position: "relative",
                      textAlign: "center",
                      height: 425   ,
                      backgroundColor: "#1C1C1C",
                    }}
                  >
                    <input {...getInputProps()} />
                    <IconButton
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#e0e0e0",
                      }}
                    >
                      <FaPlus color="#000" />
                    </IconButton>
                    <Typography
                      variant="body2"
                      color="white"
                      sx={{ mt: 2 }}
                    >
                      Drag 'n' drop some files here, or click to select files
                    </Typography>
                  </div>
                </section>
              )}
            </Dropzone>
         
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            fullWidth
            variant="outlined"
            color="primary"
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
          >
            Cancel
          </Button>
          <Button
            fullWidth
            type="submit"
            variant="outlined"
            color="primary"
            sx={{
              backgroundColor: "black",
              color: "white",
              borderColor: "white",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
              },
              marginLeft: 2,
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
