import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";

function CourtBrowser() {
  const [courts, setCourts] = useState([]);

  useEffect(() => {
    fetch("/courts")
      .then((res) => res.json())
      .then((data) => setCourts(data));
  }, []);

  const courtList = courts.map((court) => (
    <>
      <Card style={{ width: "30rem", padding: "5rem" }} key={court.id}>
        <Card.Body>
          <Card.Img style={{ width: "30rem" }} src={court.image_url} />
          <Card.Title>{court.name} Pickleball Courts</Card.Title>
          Location: {court.location}
          <p></p>
          <Button>Reserve Time</Button>
        </Card.Body>
      </Card>
    </>
  ));

  return (
    <div>
      <h1>View All Courts</h1>
      {courtList}
    </div>
  );
}

export default CourtBrowser;