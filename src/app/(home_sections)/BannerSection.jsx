import Banner from "@/components/layout/Banner";
import { Container, Row } from "@/components/layout/Format";

function BannerSection() {
  return (
    <Container fluid={true}>
      <Row>
        <Banner />
      </Row>
    </Container>
  );
}

export default BannerSection;
