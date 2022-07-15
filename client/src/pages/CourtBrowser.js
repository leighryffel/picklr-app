import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

function CourtBrowser({ navigateToReservations }) {
  const [courts, setCourts] = useState([]);

  useEffect(() => {
    fetch("/courts")
      .then((res) => res.json())
      .then((data) => setCourts(data));
  }, []);

  const courtList = courts.map((court) => (
      <Card className="court-card" key={court.id}>
        <Card.Img className="court-image" src={court.image_url} />
        <Card.Body>
          <Card.Title>{court.name} Pickleball Courts</Card.Title>
          Location: {court.location}
          <p>Court #: </p>
          <p>{court.id}</p>
          <Button variant="outline-success" onClick={navigateToReservations}>
            Reserve Time
          </Button>
        </Card.Body>
      </Card>
  ));

  return (
    <div>
      <h1>Available Courts</h1>
      <hr></hr>
      <Container>
        <Row>{courtList}</Row>
      </Container>
    </div>
  );
}

export default CourtBrowser;
