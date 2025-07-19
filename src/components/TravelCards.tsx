import { Card, Button, Col, Container, Row } from 'react-bootstrap';

const packages = [
  {
    title: 'Thailand Getaway',
    img: 'https://source.unsplash.com/400x250/?thailand,beach',
    duration: '5 Nights / 6 Days',
    price: '₹49,999',
  },
  {
    title: 'Maldives Honeymoon',
    img: 'https://source.unsplash.com/400x250/?maldives,beach',
    duration: '4 Nights / 5 Days',
    price: '₹1,39,999',
  },
  {
    title: 'Bali Adventure',
    img: 'https://source.unsplash.com/400x250/?bali,nature',
    duration: '6 Nights / 7 Days',
    price: '₹89,999',
  },
];

const TravelCards = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Popular Packages</h2>
      <Row>
        {packages.map((pkg, index) => (
          <Col key={index} md={4} sm={6} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img variant="top" src={pkg.img} alt={pkg.title} />
              <Card.Body>
                <Card.Title>{pkg.title}</Card.Title>
                <Card.Text>{pkg.duration}</Card.Text>
                <Card.Text><strong>{pkg.price}</strong></Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TravelCards;
