import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";
import useAuthStore from "../store/AuthStore";

function useLogin() {
  const { loginUser, user } = useAuthStore((state) => state);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { email, password } = credentials;
    if (!email || !password) {
      setError("Both fields are required.");
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Storing user data in local storage (only for demonstration purposes)

    // loginUser(credentials);
    localStorage.getItem("user", JSON.stringify(credentials));

    // Clear form fields
    setCredentials({ email: "", password: "" });
    // Replace with redirect logic
    toast.success("Login Succesfull hoooraaay!!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    loginUser(credentials);

    //   console.log("user from zustand", user);
  };
  return {
    loginUser,
    credentials,
    handleLogin,
    validateForm,
    handleChange,
    error,
    user,
  };
}

export default useLogin;
