import React, { useState } from 'react';
import { useFetch } from '../customHooks/useFetch';

const jsonPlaceholderHoc = (WrappedComponent, entity) => {
  const updatedComponent = (props) => {
    const [state, setState] = useState({
      searchPram: '',
    });
    const [apiState] = useFetch(
      `https://jsonplaceholder.typicode.com/${entity}`
    );
    const { loading, data, error } = apiState;
    const { searchPram } = state;

    const searchHandler = (e) => {
      setState((prev) => {
        return { ...prev, searchPram: e.target.value };
      });
    };

    let filteredData;
    if (data && data.length > 0) {
      filteredData = data.filter((el) => {
        switch (entity) {
          case 'posts':
            return el.title.toLowerCase().includes(searchPram.toLowerCase())
              ? true
              : false;
          case 'users':
            return el.name.toLowerCase().includes(searchPram.toLowerCase())
              ? true
              : false;
          default:
            return el;
        }
      });
    }

    return (
      <div className={`${entity}-list`}>
        <input
          type="text"
          placeholder={`search ${entity}`}
          onChange={searchHandler}
        />
        <p>{entity} List...</p>
        {loading && <p>Loading.....</p>}
        <WrappedComponent data={filteredData} isChildActive={props.isActive} />
        {error && <p>{error}</p>}
      </div>
    );
  };

  return updatedComponent;
};

export default jsonPlaceholderHoc;
