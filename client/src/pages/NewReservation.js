import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label } from "../styles";

function NewReservation({ user, chosenCourt }) {
  const [courtId, setCourtId] = useState(chosenCourt);
  const [date, setDate] = useState("DD/MM/YYYY");
  const [time, setTime] = useState("12:00PM");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        court_id: courtId,
        date: date,
        time: time,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Reserve Court Time</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="court">Court Number (1-6)</Label>
            <Input
              type="select"
              id="court"
              value={courtId}
              onChange={(e) => setCourtId(parseInt(e.target.value))}
            />
          </FormField>
          <FormField>
            <Label htmlFor="date">Date</Label>
            <Input
              type="text"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="time">Time</Label>
            <Input
              type="text"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Reserve Court"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewReservation;
