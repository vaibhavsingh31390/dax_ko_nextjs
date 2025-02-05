import { Container, Row, Col } from "@/components/layout/Format";

export const metadata = {
  title: "Movies - Marvels",
  description: "Movies - Marvels inc.",
};

export default function Home() {
  return (
    <Container className="mt-[200px]">
      <Row>
        <Col sm={12} md={12} lg={12}>
          <h1>Movies</h1>
        </Col>
      </Row>
    </Container>
  );
}
