import React, { useState } from 'react';
import { useFetch } from '../customHooks/useFetch';
export const Users = () => {
  const [apiState] = useFetch('https://jsonplaceholder.typicode.com/users');
  const { loading, data, error } = apiState;
  return (
    <div className="users-list">
      <p>Users List...</p>
      {loading && <p>Loading.....</p>}
      <ul>
        {data &&
          data.length > 0 &&
          data.map((el) => {
            return <li key={el.id}>{el.name}</li>;
          })}
      </ul>
      {error && <p>{error}</p>}
    </div>
  );
};
