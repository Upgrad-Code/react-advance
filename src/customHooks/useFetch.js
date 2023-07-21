import React, { useState, useEffect, useCallback, memo } from 'react';

const useFetch = (url) => {
  const [state, setState] = useState({
    loading: false,
    data: [],
    error: null,
  });

  console.log('use Fetch Hook.....');

  const getApi = useCallback(async (url, signal) => {
    try {
      setState((prev) => {
        return { ...prev, loading: true, error: null };
      });
      const response = await fetch(url, {
        signal: signal,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`${response.status} ${data.message}`);
      }
      setState((prev) => {
        return { ...prev, data: data, loading: false };
      });
    } catch (err) {
      if (err.name === 'AbortError') return;
      setState((prev) => {
        return { ...prev, error: err, loading: false };
      });
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getApi(url, signal);
    return () => {
      controller.abort();
    };
  }, [getApi, url]);

  return [state];
};

export default memo(useFetch);
