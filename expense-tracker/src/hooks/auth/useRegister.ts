import { useState, useCallback } from "react";
import { registerUser } from "../../api/auth/api";
import { useNavigate } from "react-router-dom";

const useRegister = () => {

  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
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
      const response = await registerUser(formFields);
      if ("data" in response && !response.data) {
        setState((prevState) => ({
          ...prevState,
          error: response.message,
        }));
      } else {
        setFormFields({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            });
        setState((prevState) => ({
          ...prevState,
          snackbarOpen: true,
          snackbarMessage: response.message,
          snackbarSeverity: "success",
        }));
        navigate("/login");
      }
    },
    [formFields, navigate]
  );

  return { formFields, state, setState, handleChange, handleSubmit };
};

export default useRegister;
