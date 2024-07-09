import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers([...json.data]);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <h1>Blue Whales</h1>
      <button className="btn" onClick={fetchUsers}>
        Get User List
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
