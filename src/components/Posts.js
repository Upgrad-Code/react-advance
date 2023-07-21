import React from 'react';
import jsonPlaceholderHoc from '../Hoc/jsonPlaceholderHoc';
import Loading from './Loading';

const Posts = (props) => {
  const { data, isChildActive } = props;
  return (
    <>
      {isChildActive && <Loading />}
      <ul>
        {data &&
          data.length > 0 &&
          data.map((el) => {
            return <li key={el.id}>{el.title}</li>;
          })}
      </ul>
    </>
  );
};

export default jsonPlaceholderHoc(Posts, 'posts');
