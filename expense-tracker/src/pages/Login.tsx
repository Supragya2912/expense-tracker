import { Container, Box, TextField, Button, Typography, Snackbar, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import useLogin from "../hooks/auth/useLogin";

const Login = () => {

  const { formFields, state, setState, handleChange, handleSubmit } = useLogin();

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
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            autoComplete="current-password"
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
            onClick={handleSubmit}
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
            Login
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ color: "white" }}>
                Don't have an account?
              </Typography>
              <Link to="/register" style={{ color: "white", marginLeft: 1 }}>
                Register
              </Link>
            </Box>
            <Link
              to="/forgot-password"
              style={{ color: "white", marginLeft: 2 }}
            >
              Forgot Password?
            </Link>
          </Box>
        </Box>
      </Box>
      <Snackbar
            open={state.snackbarOpen}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <Alert onClose={handleCloseSnackbar}>
              {state.snackbarMessage}
            </Alert>
          </Snackbar>
    </Container>
  );
};

export default Login;
