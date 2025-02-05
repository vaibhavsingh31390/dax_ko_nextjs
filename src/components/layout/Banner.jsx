import React from "react";
import { Col } from "./Format";
import Button from "../common/forms/Button";
import "./Banner.css";

function Banner() {
  return (
    <>
      <Col
        sm={12}
        md={6}
        lg={6}
        className="dax-ko-banner-img md:w-[50%]"
        style={{
          backgroundImage: `url("/images/bg-3.jpg")`,
        }}
      ></Col>
      <Col sm={12} md={6} lg={6} className="dax-ko-banner">
        <h1>MARVEL INSIDER</h1>
        <h2>watch, Earn, Redeem!</h2>
        <p>Get a reward for what you already do as a fan.</p>
        <Button className={`mt-[24px] md:mt-[52px]`} value={`Join Now`} />
      </Col>
    </>
  );
}

export default Banner;
