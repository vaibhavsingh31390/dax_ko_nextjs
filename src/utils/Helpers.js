import md5 from "md5"; // Import the md5 hashing library

// Debounce function to limit the rate at which a function is invoked
export const debounce = (func, delay) => {
  let timer; // Declare a variable to store the timer reference

  return function (...args) {
    clearTimeout(timer); // Cancel any previous call
    timer = setTimeout(() => func(...args), delay); // Set a new call after the delay
  };
};

// Format a date string to a more readable format
export const formatDate = (dateStr) => {
  const date = new Date(dateStr); // Convert string to Date object
  return date.toLocaleDateString("en-GB", {
    day: "2-digit", // Two-digit day
    month: "short", // Abbreviated month
    year: "numeric", // Full year
  });
};

// Generate a timestamp and hashed string based on private and public keys
export const generateKeys = (privateKey, publicKey) => {
  const ts = new Date().getTime().toString(); // Get current timestamp
  const hash = md5(ts + privateKey + publicKey).toString(); // Generate MD5 hash
  return { timestamp: ts, hash: hash }; // Return the timestamp and hash
};
