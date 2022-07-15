import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import ReservationItem from "../components/ReservationItem";

function Reservations({ user, change, setChange }) {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("/reservations")
      .then((r) => r.json())
      .then(setReservations);
  }, [change]);

  const filteredRes = reservations.filter(
    (reservation) => reservation.user.username === user.username
  );

  return (
    <Wrapper>
      {filteredRes.length > 0 ? (
        <>
          <h1>Upcoming Reservations</h1>
          {filteredRes.map((reservation) => (
            <ReservationItem
              key={reservation.id}
              reservation={reservation}
              user={user}
              change={change}
              setChange={setChange}
            />
          ))}
        </>
      ) : (
        <>
          <h3>No Reservations Found</h3>
          <Button as={Link} to="/new">
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
