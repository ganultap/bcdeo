"use client";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

interface User {
  id: number;
  name: string;
  email: string;
}
const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  return (
    <>
      <header className="bg-white drop-shadow-md">
        <NavBar />
      </header>
      <h1 className="underline p-4">List of Users</h1> <br></br>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="absolute inset-x-0 bottom-0 h-16">
        <Footer />
      </footer>
    </>
  );
};

export default UsersPage;
