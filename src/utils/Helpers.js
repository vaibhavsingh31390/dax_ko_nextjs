import md5 from "md5";

export const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const generateKeys = (privateKey, publicKey) => {
  const ts = new Date().getTime().toString();
  const hash = md5(ts + privateKey + publicKey).toString();
  return { timestamp: ts, hash: hash };
};
