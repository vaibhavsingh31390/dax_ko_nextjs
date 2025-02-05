import { Col, Container, Row } from "@/components/layout/Format";
import ListingMovies from "@/components/layout/ListingMovies";

function MovieListingsSection() {
  return (
    <Container className="dax-ko-listings-container">
      <Row>
        <Col sm={12} md={12} lg={12} className="">
          <ListingMovies />
        </Col>
      </Row>
    </Container>
  );
}

export default MovieListingsSection;
