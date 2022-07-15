import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import About from "../pages/About";
import Reservations from "../pages/Reservations";
import NewReservation from "../pages/NewReservation";
import CourtBrowser from "../pages/CourtBrowser";

function App() {
  const [user, setUser] = useState(null);
  const [chosenCourt, setChosenCourt] = useState("");
  const history = useHistory();

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function navigateToReservations(e) {
    setChosenCourt(parseInt(e.target.previousSibling.innerHTML));
    history.push("/new");
  }

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/courts">
            <CourtBrowser
              chosenCourt={chosenCourt}
              setChosenCourt={setChosenCourt}
              navigateToReservations={navigateToReservations}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/new">
            <NewReservation
              user={user}
              chosenCourt={chosenCourt}
              setChosenCourt={setChosenCourt}
            />
          </Route>
          <Route path="/">
            <Reservations user={user} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
