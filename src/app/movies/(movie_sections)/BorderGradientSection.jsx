import { Col, Container, Row } from "@/components/layout/Format";
import Image from "next/image";
function BorderGradientSection() {
  return (
    <Container className="dax-ko-content-container">
      <Row>
        <Col sm={12} md={12} lg={12} className="pt-[50px] md:pt-[100px]">
          <Image
            src="/images/border.png"
            width={100}
            height={6}
            alt="Border"
            className="mt-[60px] md:mt-[500px]"
            style={{ height: "6px", width: "100svw" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default BorderGradientSection;
