
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter hook

const Login = ({ login, client }) => {
  const [disabled, setDisabled] = useState(false);
  const router = useRouter(); // Initialize the router

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisabled(true);

    try {
      const response = await client.login(e.target.username.value, e.target.password.value);
      login(response.data.token);
      
      // Redirect to the dashboard after successful login
      //router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setDisabled(false); // Enable the button again in case of error
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="block text-[#283618] text-lg font-medium mb-2">
          <label htmlFor="username">
            Username
          </label>
          <input id="username" name="username" type="text" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
        </div>
        <button type="submit" disabled={disabled}>
          {disabled ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default Login;
