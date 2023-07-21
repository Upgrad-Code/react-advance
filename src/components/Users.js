import React, { useState } from 'react';
import { useFetch } from '../customHooks/useFetch';
export const Users = () => {
  const [state, setState] = useState({
    searchPram: '',
  });
  const [apiState] = useFetch('https://jsonplaceholder.typicode.com/users');
  const { loading, data, error } = apiState;
  const searchHandler = (e) => {
    setState((prev) => {
      return { ...prev, searchPram: e.target.value };
    });
  };

  console.log(state);
  return (
    <div className="users-list">
      <input type="text" placeholder="Search Users" onChange={searchHandler} />
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
