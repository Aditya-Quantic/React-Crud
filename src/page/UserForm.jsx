// src/UserForm.js

import React, { useEffect, useState } from "react";
import UserTable from "./UserTable";

function UserForm() {
  let initalUsers = JSON.parse(localStorage.getItem("users")) || [
    { id: 1, name: "John Doe", email: " john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];
  const [users, setUser] = useState(initalUsers);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  function saveUser(e) {
    e.preventDefault();
    console.log(name, email);
    const newUser = { id: users[users.length - 1].id + 1, name, email };
    setUser((prev) => [...prev, newUser]);
    setName("");
    setEmail("");
  }

  function updateUser(id, updatedName, updatedEmail) {
    const updatedUsers = users.map((user) => {
      return user.id === id
        ? { ...user, name: updatedName, email: updatedEmail }
        : user;
    });
    setUser(updatedUsers);
  }

  function deleteUser(id) {
    const filteredUser = users.filter((user) => user.id !== id);
    setUser(filteredUser);
  }

  // console.log(users);
  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-center">User Form</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              // type="submit"
              onClick={saveUser}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <UserTable
        users={users}
        updateUser={updateUser}
        deleteUser={deleteUser}
      />
    </>
  );
}

export default UserForm;
