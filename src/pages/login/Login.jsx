import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { useAppStore } from "../../store/Store";

const LoginForm = () => {
const { updateEmail, updatePassword, password } = useAppStore((state) => state);  
const email = useAppStore((state) => state.email); 

useEffect(()=>{
    console.log(email)
},[email])

  const [credentials, setCredentials] = useState({ email: "", password: "" });
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
    console.log(email,password)
    if (!validateForm()) return;

    // Storing user data in local storage (only for demonstration purposes)
    localStorage.setItem("user", JSON.stringify(credentials));
    localStorage.getItem("user", JSON.stringify(credentials))

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
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg mt-10 max-w-sm">
      <h2 className="text-3xl font-bold text-gray-800">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin} className="mt-4">
        <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => updateEmail(e.target.value)}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(event)=>updatePassword(event.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

const InputField = ({ label, type, name, value, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded-lg p-2 mt-1"
        required
      />
    </div>
  );
};

export default LoginForm;
