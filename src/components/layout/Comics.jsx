"use client";
import { useState, useEffect, useCallback } from "react";
import useFetch from "@/hooks/useFetch";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import "./Comics.css";
import Loader from "../common/loader/Loader";
import { debounce, generateKeys } from "@/utils/Helpers";

function Comics() {
  const [pagination, setPagination] = useState({
    page: 0,
    offset: 0,
    limit: 8,
    total: 0,
  });
  const [allComics, setAllComics] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { timestamp, hash } = generateKeys(
    process.env.NEXT_PUBLIC_MARAVEL_API_PRIVATE_KEY,
    process.env.NEXT_PUBLIC_MARAVEL_API_PUBLIC_KEY
  );
  const url = `${process.env.NEXT_PUBLIC_MARAVEL_API_HOST}v1/public/characters/1009491/comics?apikey=${process.env.NEXT_PUBLIC_MARAVEL_API_PUBLIC_KEY}&ts=${timestamp}&hash=${hash}&&limit=${pagination.limit}&offset=${pagination.offset}`;
  const { data, loading, error, fetchData } = useFetch(url, {}, true, 300);
  const toastOption = {
    duration: 3000,
    style: {
      backgroundColor: "var(--tertiary-color)",
      color: "var(--text-color)",
    },
    iconTheme: {
      primary: "var(--primary-background)",
    },
  };

  useEffect(() => {
    if (hasMore) {
      fetchData();
    }
  }, [pagination.page]);

  useEffect(() => {
    if (error) {
      toast.error(error, toastOption);
    }
  }, [error]);

  useEffect(() => {
    if (data?.data?.count > 0) {
      setAllComics((prevComics) => [
        ...prevComics,
        ...(data.data.results || []),
      ]);
      setPagination((prev) => ({
        ...prev,
        total: data.data.total,
      }));

      if (allComics.length + data.data.results.length >= data.data.total) {
        setHasMore(false);
      }
    } else if (data?.data?.count === 0) {
      toast.error("Data not found!", toastOption);
      setHasMore(false);
    }
  }, [data]);

  const setNextPage = useCallback(() => {
    if (!hasMore) return;
    debounce(
      setPagination((prev) => ({
        ...prev,
        page: prev.page + 1,
        offset: (prev.page + 1) * prev.limit,
      })),
      300
    );
  }, [hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      const footer = document.querySelector("footer");

      if (footer) {
        const footerPosition =
          footer.getBoundingClientRect().top + window.scrollY;
        const footerHeight = footer.offsetHeight;

        if (
          scrollTop + clientHeight >= footerPosition - footerHeight - 10 &&
          !loading &&
          hasMore
        ) {
          setNextPage();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, setNextPage]);

  return (
    <>
      <div className="dax-ko-comics-container">
        {allComics.map((comic, index) => (
          <motion.div
            className="dax-ko-comic-item"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div
              className="dax-ko-comic-image"
              style={
                comic.thumbnail.path
                  ? {
                      backgroundImage: `url(${comic.thumbnail.path}.${comic.thumbnail.extension})`,
                    }
                  : { backgroundImage: `url("/images/placeholder.webp")` }
              }
            ></div>
            <div className="dax-ko-comic-title">{comic.title}</div>
          </motion.div>
        ))}
      </div>

      <div className="dax-ko-comic-loader">
        {loading && <Loader width="45px" height="45px" borderWidth="5" />}
        {!hasMore && (
          <p className="text-center text-[var(--tertiary-color)]">
            You've reached the end of the list!
          </p>
        )}
      </div>
    </>
  );
}

export default Comics;
