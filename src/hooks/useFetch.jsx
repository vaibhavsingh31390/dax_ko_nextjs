import { useState, useEffect } from "react";

// Custom hook to fetch data from a given URL
const useFetch = (url, options = {}) => {
  // State for storing the fetched data
  const [data, setData] = useState(null);
  // State for tracking the loading state
  const [loading, setLoading] = useState(true);
  // State for tracking any errors that occur during fetching
  const [error, setError] = useState(null);

  // Async function to fetch data from the provided URL with given options
  const fetchData = async (customUrl = url, customOptions = options) => {
    setLoading(true); // Set loading state to true before starting the fetch
    try {
      // Fetch the data from the URL with additional options and headers
      const response = await fetch(customUrl, {
        ...customOptions, // Spread the provided custom options
        headers: {
          "Content-Type": "application/json", // Set default Content-Type to JSON
          ...customOptions.headers, // Allow custom headers to be passed in
        },
      });

      // If the response is not ok (e.g., 4xx or 5xx), throw an error
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response data to JSON
      const result = await response.json();
      setData(result); // Store the fetched data in the state
    } catch (err) {
      setError(err.message); // If an error occurs, set the error message in state
    } finally {
      setLoading(false); // Set loading state to false once fetching is done (success or failure)
    }
  };

  // Optional: Automatically fetch data when the URL changes (currently commented out)
  // useEffect(() => {
  //   fetchData();
  // }, [url]); // Re-run the fetchData function when the URL changes

  // Return the fetched data, loading state, error message, and the fetchData function
  return { data, loading, error, fetchData };
};

export default useFetch;
