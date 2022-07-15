import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";

function CourtBrowser({ navigateToReservations }) {
  const [courts, setCourts] = useState([]);

  useEffect(() => {
    fetch("/courts")
      .then((res) => res.json())
      .then((data) => setCourts(data));
  }, []);

  const courtList = courts.map((court) => (
    <Card style={{ width: "40rem", padding: "5rem" }} key={court.id}>
      <Card.Img
        variant="top"
        style={{ width: "40rem" }}
        src={court.image_url}
      />
      <Card.Body>
        <Card.Title>
          {court.name} Pickleball Courts
        </Card.Title>
        Location: {court.location}
        <p>Court #: {court.id}</p>
        <Button variant="outline-success" onClick={navigateToReservations}>Reserve Time</Button>
      </Card.Body>
    </Card>
  ));

  return (
    <div>
      <h1>View All Courts</h1>
      <CardGroup>{courtList}</CardGroup>
    </div>
  );
}

export default CourtBrowser;
