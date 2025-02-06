"use client";
import { Col, Container, Row } from "@/components/layout/Format";
import "./Header.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "Games", path: "/games" },
    { name: "Comic", path: "/comic" },
    { name: "Character", path: "/character" },
    { name: "News", path: "/news" },
    { name: "More", path: "/more" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <header>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <nav>
              <div className="dax-ko-header-logo">
                <Image
                  src="/images/Marvel_logo.png"
                  alt="Brand Logo"
                  width={204}
                  height={84}
                  priority
                />
              </div>
              <div className="dax-ko-header-links">
                {links.map((link, index) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      className={`dax-ko-header-link ${
                        isActive ? "active" : ""
                      }`}
                      key={index}
                      href={link.path}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <div className="dax-ko-menu-icon" onClick={toggleMenu}>
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ color: "#f0141e" }}
                    >
                      <FaTimes style={{ color: "#f0141e" }} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ color: "#f0141e" }}
                    >
                      <FaBars style={{ color: "#f0141e" }} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <div
                className={`dax-ko-header-links-mobile ${
                  isMenuOpen ? "open" : ""
                }`}
              >
                {links.map((link, index) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      className={`dax-ko-header-link ${
                        isActive ? "active" : ""
                      }`}
                      key={index}
                      href={link.path}
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
