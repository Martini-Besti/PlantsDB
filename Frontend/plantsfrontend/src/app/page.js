"use client"
import Login from "../Login";
import { ApiClient } from "../../apiclient/client";
import { useEffect, useState } from "react";

export default function Home() {
  const [token, setToken] = useState(null);
  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };
  const logout = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const client = new ApiClient(() => token, logout);

  return (
    <div>
      <Login client={client} login={login} />
    </div>
  );
}
