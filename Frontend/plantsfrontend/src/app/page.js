// "use client"
// import Login from "../Login";
// import { ApiClient } from "../../apiclient/client";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [token, setToken] = useState(null);
//   const login = (newToken) => {
//     localStorage.setItem("token", newToken);
//     setToken(newToken);
//   };
//   const logout = () => {
//     localStorage.removeItem("token");
//   };

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     setToken(storedToken);
//   }, []);

//   const client = new ApiClient(() => token, logout);

//   return (
//     <div>
//       <Login client={client} login={login} />
//     </div>
//   );
// }

"use client"
import Login from "@/components/Login";
import { ApiClient } from "../../apiclient/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Dashboard from "@/components/Dashboard";


export default function Home() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  
  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    router.push("/dashboard"); // Redirect to dashboard after login
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/"); // Redirect back to login page
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const client = new ApiClient(() => token, logout);

  // If there's a token, render the Dashboard directly
  if (token) {
    return (
      <div>
        {/* Render Dashboard or other protected content here */}
        {/* <div>Welcome back! You are logged in.</div>
        <button onClick={logout}>Logout</button> */}
        <Dashboard />
      </div>
    );
  }

  // Otherwise, show the login form
  return (
    <div className="bg-red-500">
      <Login client={client} login={login} />
    </div>
  );
}

