import { Box } from "../styles";

function ReservationItem({ reservation, user, change, setChange }) {
  const { id, time, date } = reservation;

  function onDeleteReservation() {
    fetch(`/reservations/${id}`, {
      method: "DELETE",
    }).then(() => setChange(!change));
  }

  return (
    <div>
      <Box>
        <h2>
          {reservation.user.username.charAt(0).toUpperCase() + reservation.user.username.slice(1)},
          you're signed up!
        </h2>
        <p>
          Playing at: {time} on {date} at {reservation.court.name}
        </p>
        <img alt="court" width="300px" src={reservation.court.image_url} />
        <hr></hr>
        <button>Modify Reservation</button> <p></p>
        <button onClick={onDeleteReservation}>Cancel Reservation</button>
      </Box>
    </div>
  );
}

export default ReservationItem;
