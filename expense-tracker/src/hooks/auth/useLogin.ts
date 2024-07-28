import { useState, useCallback } from "react";
import { loginUser } from "../../api/auth/api";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const [state, setState] = useState({
    error: "",
    snackbarOpen: false,
    snackbarMessage: "",
    snackbarSeverity: "success",
  });

  const navigate = useNavigate();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useCallback(
    async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      const response = await loginUser(formFields);
      console.log(response);
      
      if ("data" in response) {
        setFormFields({
          email: "",
          password: "",
        });
        setState((prevState) => ({
          ...prevState,
          snackbarOpen: true,
          snackbarMessage: response.message,
          snackbarSeverity: "success",
        }));
        localStorage.setItem("token", response.data.accessToken);
        navigate("/");
      } else {
        setState((prevState) => ({
          ...prevState,
          error: response.message,
        }));
      }
    },
    [formFields, navigate]
  );

  return { formFields, state, setState, handleChange, handleSubmit };
};

export default useLogin;
