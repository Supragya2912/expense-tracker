import React from "react";
import { Container, Box, TextField, Button, Typography, Snackbar, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import useRegister from "../hooks/auth/useRegister"; 

const Register = () => {
  const { formFields, state, setState, handleChange, handleSubmit } = useRegister(); 

  const handleCloseSnackbar = () => {
    setState((prevState) => ({
      ...prevState,
      snackbarOpen: false,
    }));
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#1C1C1C",
          padding: 5,
          borderRadius: 10,
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Expense Tracker
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Sign Up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="first-name"
            label="First Name"
            name="firstName"
            autoComplete="name"
            value={formFields.firstName}
            onChange={handleChange}
            autoFocus
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="lastName"
            label="Last Name"
            type="text"
            id="last-name"
            autoComplete="last-name"
            value={formFields.lastName}
            onChange={handleChange}
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
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formFields.email}
            onChange={handleChange}
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formFields.password}
            onChange={handleChange}
            autoComplete="new-password"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            Sign Up
          </Button>
          {state.error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {state.error}
            </Typography>
          )}
          <Snackbar
            open={state.snackbarOpen}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <Alert onClose={handleCloseSnackbar}>
              {state.snackbarMessage}
            </Alert>
          </Snackbar>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography sx={{ color: "white" }}>Already have an account?&nbsp;</Typography>
            <Link to="/login" style={{ color: "white" }}>
              Login
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
