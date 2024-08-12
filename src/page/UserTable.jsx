// src/UserTable.js

import React, { useState } from "react";

function UserTable({ users, updateUser, deleteUser }) {
  const [userId, setUserId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const handleEditClick = (item) => {
    setUserId(item.id);
    setEditName(item.name);
    setEditEmail(item.email);
  };
  const saveData = () => {
    updateUser(userId, editName, editEmail);
    setUserId(null);
  };

  function handleDeleteClick(id) {
    const confirmDelete = window.confirm(
      "Do you really want to delete this user"
    );
    if (confirmDelete) {
      deleteUser(id);
    }
  }
  console.log(userId);
  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">User Table</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
              id
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
              Name
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
              Email
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b border-gray-200">{item.id}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                {userId === item.id ? (
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                ) : (
                  item.name
                )}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {userId === item.id ? (
                  <input
                    type="text"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                ) : (
                  item.email
                )}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {userId === item.id ? (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                    onClick={() => saveData(item)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                    onClick={() => handleEditClick(item)}
                  >
                    Edit
                  </button>
                )}

                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded ml-2"
                  onClick={() => handleDeleteClick(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {/* Additional rows can be added here */}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
