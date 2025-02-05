import Button from "@/components/common/forms/Button";
import { Col, Container, Row } from "@/components/layout/Format";
import ListingBlogs from "@/components/layout/ListingBlogs";

function BlogsSection() {
  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <ListingBlogs />
        </Col>
      </Row>
    </Container>
  );
}

export default BlogsSection;
