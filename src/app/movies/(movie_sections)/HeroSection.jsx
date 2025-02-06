import Button from "@/components/common/forms/Button";
import { Col, Container, Row } from "@/components/layout/Format";

function HeroSection() {
  return (
    <Container>
      <Row>
        <Col
          sm={12}
          md={12}
          lg={12}
          className="pt-[50px] md:pt-[100px] pb-[150px] md:pb-[100px]"
        >
          <h1>Spider-Man</h1>
          <h2 className="mt-[9px] md:mt-[18px]">
            (Peter Parker) [ 2022 - {new Date().getFullYear()} ]
          </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
