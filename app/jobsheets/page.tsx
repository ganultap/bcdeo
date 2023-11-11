"use client";
import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
const Page = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Check if the entered credentials are valid
    if (username === "admin" && password === "Dpwh2023") {
      setLoggedIn(true);
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      handleLogin;
    }
  };

  if (!loggedIn) {
    return (
    <>
     <header className="bg-white drop-shadow-md">
        <NavBar />
      </header>
      <div className="p-4 flex justify-center items-center">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            <div className="mb-4">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={handleLogin}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                type="button"
              >
                Sign In
              </button>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2023 DPWH Butuan City DEO. All rights reserved.
          </p>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
      <header className="bg-white drop-shadow-md">
        <NavBar />
      </header>
      <div>
        <h2>Welcome to the Page</h2>
        <p>This is the protected page content.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <footer className="absolute inset-x-0 bottom-0 h-16">
        <Footer />
      </footer>
    </>
  );
};

export default Page;
