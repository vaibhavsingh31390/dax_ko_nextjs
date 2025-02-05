import Button from "@/components/common/forms/Button";
import { Col, Container, Row } from "@/components/layout/Format";

function HeroSection() {
  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={12} className="py-[50px] md:py-[100px]">
          <h1>Spider-Man’s 60th</h1>
          <h2 className="mt-[9px] md:mt-[18px]">
            Celebrate Spidys 60th annivessary with most of is most iconic
            stories!
          </h2>
          <Button className={`mt-[30px] md:mt-[60px]`} value={`Read More`} />
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
