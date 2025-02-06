import Comics from "@/components/layout/Comics";
import { Col, Container, Row } from "@/components/layout/Format";

function ComicSection() {
  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={12} className="py-[50px] md:py-[100px]">
          <h1 className="mb-6 md:mb-0">Comics</h1>
          <Comics />
        </Col>
      </Row>
    </Container>
  );
}

export default ComicSection;
