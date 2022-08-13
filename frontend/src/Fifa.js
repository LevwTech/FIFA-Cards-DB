import React, { useEffect, useState } from "react";
import "./index.css";

function Fifa() {
  const [countries, setCountries] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [managers, setManagers] = useState([]);
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));

    fetch("http://localhost:3000/leagues")
      .then((res) => res.json())
      .then((data) => setLeagues(data));
    fetch("http://localhost:3000/managers")
      .then((res) => res.json())
      .then((data) => setManagers(data));
    fetch("http://localhost:3000/clubs")
      .then((res) => res.json())
      .then((data) => setClubs(data));
  }, []);
  return (
    <React.Fragment>
      <div className="welcome">Countries</div>
      <div className="item">
        {countries.map((country) => (
          <div className="innerItem">
            <div>{country.CountryName}</div>
            <div>{country.Continent}</div>
          </div>
        ))}
      </div>
      <div className="welcome">Leagues</div>
      <div className="item">
        {leagues.map((league) => (
          <div className="innerItem">
            <div>{league.LeagueName}</div>
            <div>Category {league.Category}</div>
            <div>{league.CountryName}</div>
          </div>
        ))}
      </div>
      <div className="welcome">Managers</div>
      <div className="item">
        {managers.map((manager) => (
          <div className="innerItem">
            <div>{manager.ManagerName}</div>
            <div>Manager ID {manager.MID}</div>
            <div>Club ID {manager.CID}</div>
          </div>
        ))}
      </div>

      <div className="welcome">Clubs</div>
      <div className="item">
        {clubs.map((club) => (
          <div className="innerItem">
            <div>{club.ClubName}</div>
            <div>Club ID {club.CID}</div>
            <div> Establish Date {club.EstablishDate}</div>
            <div>{club.Street}</div>
            <div> ZIP {club.ZIP}</div>
            <div>{club.City}</div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
export default Fifa;
