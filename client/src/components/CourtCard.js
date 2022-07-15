import React from "react";

function CourtCard({ court, navigateToReservations }) {
  return (
    <Card
      border="primary"
      style={{ width: "20rem", padding: "5rem" }}
      key={court.id}
    >
      <Card.Body>
        <Card.Img
          variant="left"
          style={{ width: "20rem" }}
          src={court.image_url}
        />
        <Card.Title>
          Court #{court.id}: {court.name} Pickleball Courts
        </Card.Title>
        Location: {court.location}
        <p>{court.id}</p>
        <Button onClick={navigateToReservations}>Reserve Time</Button>
      </Card.Body>
    </Card>
  );
}

export default CourtCard;
