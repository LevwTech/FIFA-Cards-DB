import React, { useState } from "react";
import "./index.css";
function Clubs() {
  const [CID, setCID] = useState("");
  const [showClubs, setShowClubs] = useState(false);
  const [clubs, setClubs] = useState([]);
  function onChangeHandler(e) {
    setCID(e.target.value);
  }
  function onClickHandler() {
    fetch(`http://localhost:3000/club?cid=${CID}`)
      .then((res) => res.json())
      .then((data) => {
        setClubs(data);
        setShowClubs(true);
      });
  }

  return (
    <React.Fragment>
      <div className="enterClubID">
        <div htmlFor="club" className="welcome">
          Enter Club ID
        </div>

        <input id="club" type="number" onChange={onChangeHandler}></input>
        <button onClick={onClickHandler}>Submit</button>
      </div>

      <div className="item">
        {showClubs && (
          <div>
            <div className="welcomeplayer">Club Stats from Players Average</div>

            <div className="innerItem">
              <div>{clubs[0].clubPace} PAC</div>
              <div>{clubs[0].clubDribbling} DRI</div>
              <div>{clubs[0].clubShooting} SHO</div>
              <div>{clubs[0].clubDefending} DEF</div>
              <div>{clubs[0].clubPassing} PAS</div>
              <div>{clubs[0].clubPhysical} PHY</div>
            </div>
          </div>
        )}
      </div>
      <div style={{ marginTop: "30px", marginBottom: "30px" }}></div>
      <div className="item">
        {showClubs && (
          <div>
            <div className="welcomeplayer">Club Players</div>
            {clubs.map((club) => (
              <div className="innerItem">
                <div>{club.Pname}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
export default Clubs;
