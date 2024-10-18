import useLogin from "../../hooks/useLogin";

const LoginForm = () => {
  const { error, handleLogin, credentials, handleChange } = useLogin();

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg mt-10 max-w-sm">
      <h2 className="text-3xl font-bold text-gray-800">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin} className="mt-4">
        <InputField
          label="Email"
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
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
