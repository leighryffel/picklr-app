import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";

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
        <h4>Location: {court.location}</h4>
        <h4>Court Number: {court.id}</h4>
        <Button variant="outline-success" onClick={navigateToReservations}>
          Reserve Time
        </Button>
        <p className="hidden">{court.id}</p>
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
