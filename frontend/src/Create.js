import React from "react";
import "./index.css";
function Create() {
  return (
    <React.Fragment>
      <div className="welcome">Create Country</div>
      <form
        action="http://localhost:3000/country"
        method="post"
        encType="application/json"
      >
        <label htmlFor="country">Country</label>

        <input id="country" required type="text" name="country"></input>

        <label htmlFor="continent">Continent</label>
        <input id="continent" required type="text" name="continent"></input>
        <input type="submit"></input>
      </form>

      <div className="welcome">Create League</div>
      <form
        action="http://localhost:3000/league"
        method="post"
        encType="application/json"
      >
        <label htmlFor="league">League Name</label>
        <input id="league" required type="text" name="league"></input>

        <label htmlFor="category">Category</label>
        <input id="category" required type="text" name="category"></input>
        <label htmlFor="country">Country</label>

        <input id="country" required type="text" name="country"></input>
        <input type="submit"></input>
      </form>

      <div className="welcome">Create Club</div>
      <form
        action="http://localhost:3000/club"
        method="post"
        encType="application/json"
      >
        <label htmlFor="club">Club Name</label>
        <input id="club" required type="text" name="club"></input>

        <label htmlFor="date">Establish Date</label>
        <input id="date" required type="date" name="date"></input>

        <label htmlFor="street">Street</label>
        <input id="street" required type="text" name="street"></input>

        <label htmlFor="zip">ZIP</label>
        <input id="zip" required type="number" name="zip"></input>

        <label htmlFor="adress">Address</label>
        <input id="adress" required type="text" name="adress"></input>
        <label htmlFor="city">City</label>
        <input id="city" required type="text" name="city"></input>
        <input type="submit"></input>
      </form>
      <div className="welcome">Create Manager</div>
      <form
        action="http://localhost:3000/manager"
        method="post"
        encType="application/json"
      >
        <label htmlFor="manager">Manager Name</label>

        <input id="manager" required type="text" name="manager"></input>

        <label htmlFor="cid">Club ID</label>
        <input id="cid" required type="number" name="cid"></input>
        <input type="submit"></input>
      </form>

      <div className="welcome">Create Player</div>
      <form
        action="http://localhost:3000/player"
        method="post"
        enctype="multipart/form-data"
      >
        <label htmlFor="pname">Player Name</label>

        <input id="pname" required type="text" name="pname"></input>

        <label htmlFor="cid">Club ID</label>
        <input id="cid" required type="number" name="cid"></input>

        <label htmlFor="image">Image</label>
        <input id="image" required type="file" name="image"></input>
        <label htmlFor="countryname">Country</label>
        <input id="countryname" required type="text" name="countryname"></input>

        <label htmlFor="pace">Player Stats</label>
        <label htmlFor="pace">PAC</label>
        <input id="pace" required type="number" name="pace"></input>
        <label htmlFor="dribbling">DRI</label>
        <input id="dribbling" required type="number" name="dribbling"></input>

        <label htmlFor="shooting">SHO</label>
        <input id="shooting" required type="number" name="shooting"></input>

        <label htmlFor="defending">DEF</label>
        <input id="defending" required type="number" name="defending"></input>

        <label htmlFor="passing">PAS</label>
        <input id="passing" required type="number" name="passing"></input>

        <label htmlFor="physical">PHY</label>
        <input id="physical" required type="number" name="physical"></input>

        <input type="submit"></input>
      </form>
      <div style={{ marginBottom: "100px" }}></div>
    </React.Fragment>
  );
}
export default Create;
