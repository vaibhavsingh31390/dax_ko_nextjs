import { Col, Container, Row } from "@/components/layout/Format";

export default function Home() {
  return (
    <Container className="mt-[200px]">
      <Row>
        <Col sm={12} md={12} lg={12} className="min-h-[70svh]">
          <h1>Spider-Man’s 60th</h1>
          <h2>
            Celebrate Spidys 60th annivessary with most of is most iconic
            stories!
          </h2>
        </Col>
      </Row>
    </Container>
  );
}
