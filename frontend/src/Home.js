import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <React.Fragment>
      <div className="welcome">Welcome to FIFA!</div>
      <div className="buttons">
        <Link className="links" to="/create">
          Create Your Fifa System
        </Link>
        <Link className="links" to="/fifa">
          System Info
        </Link>
        <Link className="links" to="/players">
          Players
        </Link>
        <Link className="links" to="/stats">
          Player Stats Filter
        </Link>
        <Link className="links" to="/clubs">
          Clubs Stats and Players
        </Link>
      </div>
    </React.Fragment>
  );
}
export default Home;
