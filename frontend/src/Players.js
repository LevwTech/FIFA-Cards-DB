import React, { useEffect, useState } from "react";
import "./index.css";
function Players() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <React.Fragment>
      <div className="welcome">Players</div>
      <div className="parentPlayers">
        {players.map((player) => (
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
                          <div class="player-feature-value">{player.Pace}</div>
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
      {/* here  */}
    </React.Fragment>
  );
}
export default Players;
