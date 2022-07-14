import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import About from "../pages/About";
import SignUpList from "../pages/Reservations";
import NewSignUp from "../pages/NewSignUp";
import CourtBrowser from "../pages/CourtBrowser"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/new">
            <NewSignUp user={user} />
          </Route>
          <Route path="/">
            <CourtBrowser />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
