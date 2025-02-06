"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./Modal.css";
import { motion } from "framer-motion";
import { Col, Container, Row } from "@/components/layout/Format";
import Loader from "../loader/Loader";
import CharacterDetails from "@/components/layout/CharacterDetails";
import { FaTimes } from "react-icons/fa";
import useFetch from "@/hooks/useFetch";

function Modal({ url, options, handleModal }) {
  const { data, loading, error, fetchData } = useFetch(url, options);
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
    fetchData();
  }, [url]);

  useEffect(() => {
    if (error) {
      toast.error(error, toastOption);
    }
  }, [error]);

  useEffect(() => {
    if (data?.data?.count > 0) {
      toast.success("Data loaded successfully!", toastOption);
    } else if (data?.data?.count === 0) {
      toast.error("Data not found!", toastOption);
    }
  }, [data?.data?.count]);

  return (
    <motion.div
      className="dax-ko-modal-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Row>
          <Col sm={12} lg={12} md={12}>
            <button
              className="dax-ko-modal-container-close-btn"
              onClick={handleModal}
            >
              <FaTimes style={{ color: "#f0141e" }} />
            </button>
            {loading ? (
              <div className="dax-ko-modal-loading-spinner">
                <Loader width="45px" height="45px" borderWidth="5" />
              </div>
            ) : error ? (
              <h1>{error?.message}</h1>
            ) : (
              <CharacterDetails data={data} />
            )}
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Modal;
