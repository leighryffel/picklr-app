import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import ReservationItem from "../components/ReservationItem";

function Reservations({ user }) {
const [reservations, setReservations] = useState([]);
const [change, setChange] = useState(false);

  useEffect(() => {
    fetch("/reservations")
      .then((r) => r.json())
      .then(setReservations);
  }, [change]);


  function handleDeleteReservation(deletedReservation) {
    setReservations((reservations) =>
      reservations.filter(
        (reservation) => reservation.id !== deletedReservation.id
      )
    );
  }

  return (
    <Wrapper>
      {reservations.length > 0 ? (
        <>
          <h1>Upcoming Reservations</h1>
          {reservations.map((reservation) => (
            <ReservationItem
              key={reservation.id}
              reservation={reservation}
              user={user}
              onDeleteReservation={handleDeleteReservation}
              change={change}
              setChange={setChange}
            />
          ))}
        </>
      ) : (
        <>
          <h2>No Reservations Found</h2>
          <Button as={Link} to="/home">
            Reserve a Court Time
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default Reservations;
