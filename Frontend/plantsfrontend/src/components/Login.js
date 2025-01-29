
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter hook
import { FiDroplet, FiEdit2, FiTrash2 } from 'react-icons/fi';

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
    
    <div className="flex justify-center items-center min-h-screen bg-[#FEFAE0]">
 <div className="flex items-center gap-2">
          <FiDroplet className="text-blue-500" size={200} />
        
        </div>
  <form onSubmit={submitHandler} className="bg-white p-6 rounded-lg shadow-lg w-96">
    <div className="mb-4">
      <label htmlFor="username" className="block text-[#283618] text-lg font-medium mb-2">
        Username
      </label>
      <input 
        id="username" 
        name="username" 
        type="text" 
        required 
        className="w-full px-4 py-2 border border-[#283618] rounded-md focus:outline-none focus:ring-2 focus:ring-[#606C38] bg-[#FEFAE0]"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="block text-[#283618] text-lg font-medium mb-2">
        Password
      </label>
      <input 
        id="password" 
        name="password" 
        type="password" 
        required 
        className="w-full px-4 py-2 border border-[#283618] rounded-md focus:outline-none focus:ring-2 focus:ring-[#606C38] bg-[#FEFAE0]"
      />
    </div>
    <button 
      type="submit" 
      disabled={disabled} 
      className={`w-full py-2 rounded-md text-white font-semibold ${disabled ? 'bg-[#DDA15E]' : 'bg-[#606C38] hover:bg-[#283618]'}`}
    >
      {disabled ? "Signing in..." : "Sign in"}
    </button>
  </form>
</div>

  );
};

export default Login;
