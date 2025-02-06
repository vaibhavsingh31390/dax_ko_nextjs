import { Col, Container, Row } from "@/components/layout/Format";
import ListingMovies from "@/components/layout/ListingMovies";

function MovieListingsSection({ comics }) {
  return (
    <Container className="dax-ko-listings-container">
      <Row>
        <Col sm={12} md={12} lg={12} className="">
          <ListingMovies comics={comics} />
        </Col>
      </Row>
    </Container>
  );
}

export default MovieListingsSection;
