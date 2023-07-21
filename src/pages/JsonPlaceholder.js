import React from 'react';
import Users from '../components/Users';
import Posts from '../components/Posts';

const JsonPlaceholder = () => {
  return (
    <div className="json-placeholder">
      <p>Json Placeholder</p>
      <div style={{ display: 'flex' }}>
        <Users />
        <Posts isActive={true} />
      </div>
    </div>
  );
};

export default JsonPlaceholder;
