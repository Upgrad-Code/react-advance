import React, { useState } from 'react';

export const Users = () => {
  const [state, setState] = useState({
    loading: false,
    users: [],
    error: null,
  });

  return (
    <div className="users-list">
      <p>Users List...</p>
    </div>
  );
};
