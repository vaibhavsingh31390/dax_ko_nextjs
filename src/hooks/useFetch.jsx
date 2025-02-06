import { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (customUrl = url, customOptions = options) => {
    setLoading(true);
    try {
      const response = await fetch(customUrl, {
        ...customOptions,
        headers: {
          "Content-Type": "application/json",
          ...customOptions.headers,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  //   useEffect(() => {
  //     fetchData();
  //   }, [url]);

  return { data, loading, error, fetchData };
};

export default useFetch;
