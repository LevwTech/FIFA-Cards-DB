import React from "react";
import "./index.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
function Stats() {
  const [valuePAC, setValuePAC] = React.useState([30, 70]);
  const [valueDEF, setValueDEF] = React.useState([30, 70]);
  const [valueDRI, setValueDRI] = React.useState([30, 70]);
  const [valueSHO, setValueSHO] = React.useState([30, 70]);
  const [valuePAS, setValuePAS] = React.useState([30, 70]);
  const [valuePHY, setValuePHY] = React.useState([30, 70]);

  const [players, setPlayers] = React.useState({});
  const [showPlayers, setShowPlayers] = React.useState(false);

  const handleChangePAC = (event, newValue) => {
    setValuePAC(newValue);
  };
  function valuetextPAC(value) {
    return `${valuePAC}`;
  }

  const handleChangeDRI = (event, newValue) => {
    setValueDRI(newValue);
  };
  function valuetextDRI(value) {
    return `${valueDRI}`;
  }

  const handleChangeSHO = (event, newValue) => {
    setValueSHO(newValue);
  };
  function valuetextSHO(value) {
    return `${valueSHO}`;
  }

  const handleChangeDEF = (event, newValue) => {
    setValueDEF(newValue);
  };
  function valuetextDEF(value) {
    return `${valueDEF}`;
  }

  const handleChangePAS = (event, newValue) => {
    setValuePAS(newValue);
  };
  function valuetextPAS(value) {
    return `${valuePAS}`;
  }
  const handleChangePHY = (event, newValue) => {
    setValuePHY(newValue);
  };
  function valuetextPHY(value) {
    return `${valuePHY}`;
  }

  function onClickHandler() {
    fetch(
      `http://localhost:3000/complex1?paceMin=${valuePAC[0]}&dribblingMin=${valueDRI[0]}&physicalMin=${valuePHY[0]}&passingMin=${valuePAS[0]}&shootingMin=${valueSHO[0]}&defendingMin=${valueDEF[0]}&paceMax=${valuePAC[1]}&dribblingMax=${valueDRI[1]}&physicalMax=${valuePHY[1]}&passingMax=${valuePAS[1]}&shootingMax=${valueSHO[1]}&defendingMax=${valueDEF[1]}`
    ).then((res) =>
      res.json().then((data) => {
        setPlayers(data);
        console.log(players);
        setShowPlayers(true);
      })
    );
  }

  return (
    <React.Fragment>
      <div className="welcome">Adjust the Stats</div>
      <div className="item">
        <div className="stat" style={{ marginTop: "10px" }}>
          PAC
        </div>
        <Box
          sx={{ width: 300 }}
          style={{ textAlign: "center", width: "50%", margin: "auto" }}
        >
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={valuePAC}
            onChange={handleChangePAC}
            valueLabelDisplay="auto"
            getAriaValueText={valuetextPAC}
          />
        </Box>

        <div className="stat">DRI</div>
        <Box
          sx={{ width: 300 }}
          style={{ textAlign: "center", width: "50%", margin: "auto" }}
        >
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={valueDRI}
            onChange={handleChangeDRI}
            valueLabelDisplay="auto"
            getAriaValueText={valuetextDRI}
          />
        </Box>

        <div className="stat">SHO</div>
        <Box
          sx={{ width: 300 }}
          style={{ textAlign: "center", width: "50%", margin: "auto" }}
        >
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={valueSHO}
            onChange={handleChangeSHO}
            valueLabelDisplay="auto"
            getAriaValueText={valuetextSHO}
          />
        </Box>

        <div className="stat">DEF</div>
        <Box
          sx={{ width: 300 }}
          style={{ textAlign: "center", width: "50%", margin: "auto" }}
        >
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={valueDEF}
            onChange={handleChangeDEF}
            valueLabelDisplay="auto"
            getAriaValueText={valuetextDEF}
          />
        </Box>

        <div className="stat">PAS</div>
        <Box
          sx={{ width: 300 }}
          style={{ textAlign: "center", width: "50%", margin: "auto" }}
        >
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={valuePAS}
            onChange={handleChangePAS}
            valueLabelDisplay="auto"
            getAriaValueText={valuetextPAS}
          />
        </Box>

        <div className="stat">PHY</div>
        <Box
          sx={{ width: 300 }}
          style={{ textAlign: "center", width: "50%", margin: "auto" }}
        >
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={valuePHY}
            onChange={handleChangePHY}
            valueLabelDisplay="auto"
            getAriaValueText={valuetextPHY}
          />
        </Box>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button className="statsBtn" onClick={onClickHandler}>
          Get Players
        </button>
      </div>
      {showPlayers && (
        <div className="parentPlayers">
          {players.players.map((player) => (
            <div className="eachPlayer">
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Saira+Semi+Condensed:300,400,700"
              />

              <div class="wrapper">
                <div class="fut-player-card">
                  <div class="player-card-top">
                    <div class="player-master-info">
                      <div class="player-nation">
                        <img
                          src={`https://countryflagsapi.com/png/${player.CountryName}`}
                          alt={player.CountryName}
                          draggable="false"
                        />
                      </div>
                    </div>
                    <div class="player-picture">
                      <img
                        src={player.Image}
                        alt={player.Pname}
                        draggable="false"
                      />
                      <div class="player-extra">
                        <span>ID {player.ID}</span>
                        <span>Club ID {player.CID}</span>
                      </div>
                    </div>
                  </div>

                  <div class="player-card-bottom">
                    <div class="player-info">
                      <div class="player-name">
                        <span>{player.Pname}</span>
                      </div>

                      <div class="player-features">
                        <div class="player-features-col">
                          <span>
                            <div class="player-feature-value">
                              {player.Pace}
                            </div>
                            <div class="player-feature-title">PAC</div>
                          </span>
                          <span>
                            <div class="player-feature-value">
                              {player.Shooting}
                            </div>
                            <div class="player-feature-title">SHO</div>
                          </span>
                          <span>
                            <div class="player-feature-value">
                              {player.Passing}
                            </div>
                            <div class="player-feature-title">PAS</div>
                          </span>
                        </div>
                        <div class="player-features-col">
                          <span>
                            <div class="player-feature-value">
                              {player.Dribbling}
                            </div>
                            <div class="player-feature-title">DRI</div>
                          </span>
                          <span>
                            <div class="player-feature-value">
                              {player.Defending}
                            </div>
                            <div class="player-feature-title">DEF</div>
                          </span>
                          <span>
                            <div class="player-feature-value">
                              {player.Physical}
                            </div>
                            <div class="player-feature-title">PHY</div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}
export default Stats;
