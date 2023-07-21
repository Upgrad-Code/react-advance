import React, { useState } from 'react';
import { useFetch } from '../customHooks/useFetch';

export const Users = () => {
  const [state, setState] = useState({
    searchPram: '',
  });
  const [apiState] = useFetch('https://jsonplaceholder.typicode.com/users');
  const { loading, data, error } = apiState;
  const { searchPram } = state;

  const searchHandler = (e) => {
    setState((prev) => {
      return { ...prev, searchPram: e.target.value };
    });
  };

  let filteredUsers;

  if (data && data.length > 0) {
    filteredUsers = data.filter((el) => {
      if (el.name.toLowerCase().includes(searchPram.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
  }

  console.log(state);
  return (
    <div className="users-list">
      <input type="text" placeholder="Search Users" onChange={searchHandler} />
      <p>Users List...</p>
      {loading && <p>Loading.....</p>}
      <ul>
        {filteredUsers &&
          filteredUsers.length > 0 &&
          filteredUsers.map((el) => {
            return <li key={el.id}>{el.name}</li>;
          })}
      </ul>
      {error && <p>{error}</p>}
    </div>
  );
};
