import React from 'react';
import { useFetch } from '../hooks/useFetch';

export default function UserList() { // making function
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users'); //calling custom hook

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Users</h3>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}
