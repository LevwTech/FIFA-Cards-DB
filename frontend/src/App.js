import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Players from "./Players";
import Clubs from "./Clubs";
import Fifa from "./Fifa";
import Stats from "./Stats";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="fifa" element={<Fifa />} />
        <Route path="players" element={<Players />} />
        <Route path="clubs" element={<Clubs />} />
        <Route path="stats" element={<Stats />} />
        <Route path="*" element={<div className="welcome">404</div>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
