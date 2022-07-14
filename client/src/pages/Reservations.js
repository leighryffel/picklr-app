import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function Reservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("/reservations")
      .then((r) => r.json())
      .then(setReservations);
  }, []);

  return (
    <Wrapper>
      <p>RESERVATIONS WILL GO HERE</p>
      {/* {signups.length > 0 ? (
        <>
        <h1>Upcoming Reservations</h1>
        {signups.map((signup) => (
            <div key={signup.id}>
              <Box>
                <h2>You're signed up!</h2>
                <p>
                  <em>
                    Playing at: {signup.time} on {signup.date}
                  </em>
                </p>
              </Box>
            </div>
          ))}
          </>
      ) : (
        <>
          <h2>No Signups Found</h2>
          <Button as={Link} to="/new">
            Reserve a Court Time
          </Button>
        </>
      )} */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const CourtDiv = styled.article`
  margin-bottom: 24px;
`;

export default Reservations;
