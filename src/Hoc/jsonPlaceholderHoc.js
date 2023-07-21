import React, { useState } from 'react';
import { useFetch } from '../customHooks/useFetch';

const jsonPlaceholderHoc = (WrappedComponent, entity) => {
  const updatedComponent = (props) => {
    console.log(props);
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
        if (el.title.toLowerCase().includes(searchPram.toLowerCase())) {
          return true;
        } else {
          return false;
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
        <p>{entity.toUpperCase()} List...</p>
        {loading && <p>Loading.....</p>}
        <WrappedComponent data={filteredData} />
        {error && <p>{error}</p>}
      </div>
    );
  };

  return updatedComponent;
};

export default jsonPlaceholderHoc;
