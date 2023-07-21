import React from 'react';
import jsonPlaceholderHoc from '../Hoc/jsonPlaceholderHoc';

const Posts = (props) => {
  const { data } = props;
  return (
    <ul>
      {data &&
        data.length > 0 &&
        data.map((el) => {
          return <li key={el.id}>{el.title}</li>;
        })}
    </ul>
  );
};

export default jsonPlaceholderHoc(Posts, 'posts');
