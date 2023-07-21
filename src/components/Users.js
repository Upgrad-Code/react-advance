import React from 'react';
import jsonPlaceholderHoc from '../Hoc/jsonPlaceholderHoc';

const Users = (props) => {
  const { data } = props;
  return (
    <ul>
      {data &&
        data.length > 0 &&
        data.map((el) => {
          return <li key={el.id}>{el.name}</li>;
        })}
    </ul>
  );
};

export default jsonPlaceholderHoc(Users, 'users');
