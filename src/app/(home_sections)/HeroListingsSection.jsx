import { Col, Container, Row } from "@/components/layout/Format";
import ListingHeroes from "@/components/layout/ListingHeroes";

function HeroListingsSection() {
  return (
    <Container className="dax-ko-listings-container">
      <Row>
        <Col sm={12} md={12} lg={12} className="">
          <ListingHeroes />
        </Col>
      </Row>
    </Container>
  );
}

export default HeroListingsSection;
