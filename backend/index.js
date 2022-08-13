const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
app.use(express.static("uploads")); // serving images folder publicly
var bodyParser = require("body-parser");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 100, // only accept  till 100  mbs
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpe?g|png|PNG|JPG|JPEG|gif|bmp)$/)) {
      return cb(new Error("File must be an Image")); //
    }
    cb(undefined, true);
  },
});
app.use(cors({ origin: "*" }));

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mysql = require("mysql");
const connection = mysql.createConnection({
  // no need to set env vars
  host: "localhost",
  user: "root",
  password: "Levw1234",
  database: "fifa",
});

connection.connect(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("server started on port 3000");
  });
});

// Here are all the Creates
app.post("/player", upload.single("image"), async (req, res) => {
  const image = `http://localhost:3000/${req.file.filename}`;
  const playerImage = connection.query(
    `INSERT INTO player(Pace, Dribbling, Physical, Passing, Shooting, Defending, Pname, Image, CID, CountryName)
      VALUES (${req.body.pace},${req.body.dribbling},${req.body.physical},${req.body.passing},${req.body.shooting},${req.body.defending},'${req.body.pname}','${image}','${req.body.cid}','${req.body.countryname}');`,
    function (error, results, fields) {
      if (error) throw error;
      res.send("inserted");
    }
  );
});
app.post("/club", (req, res) => {
  connection.query(
    `INSERT INTO club(ClubName, EstablishDate, Street, ZIP, City)
      VALUES ('${req.body.club}','${req.body.date}','${req.body.street}','${req.body.zip}','${req.body.city}');`,
    function (error, results, fields) {
      if (error) throw error;
      res.send("inserted");
    }
  );
});

app.post("/country", (req, res) => {
  connection.query(
    `INSERT INTO country(CountryName, Continent)
      VALUES ('${req.body.country}','${req.body.continent}');`,
    function (error, results, fields) {
      if (error) throw error;
      res.send("inserted");
    }
  );
});

app.post("/league", (req, res) => {
  connection.query(
    `INSERT INTO league(LeagueName, Category, CountryName)
      VALUES ('${req.body.league}','${req.body.category}','${req.body.country}');`,
    function (error, results, fields) {
      if (error) throw error;
      res.send("insereted");
    }
  );
});

app.post("/manager", (req, res) => {
  connection.query(
    `INSERT INTO manager(ManagerName, CID)
      VALUES ('${req.body.manager}','${req.body.cid}');`,
    function (error, results, fields) {
      if (error) throw error;
      res.send("insereted");
    }
  );
});

// Here are all the gets
app.get("/players", (req, res) => {
  connection.query(`SELECT * from player`, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});
app.get("/clubs", (req, res) => {
  connection.query(`SELECT * from club`, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});
app.get("/leagues", (req, res) => {
  connection.query(`SELECT * from league`, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});
app.get("/managers", (req, res) => {
  connection.query(`SELECT * from manager`, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});
app.get("/countries", (req, res) => {
  connection.query(`SELECT * from country`, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

// Complex Queries
app.get("/complex1", (req, res) => {
  const {
    paceMin = 0,
    dribblingMin = 0,
    physicalMin = 0,
    passingMin = 0,
    shootingMin = 0,
    defendingMin = 0,
    paceMax = 100,
    dribblingMax = 100,
    physicalMax = 100,
    passingMax = 100,
    shootingMax = 100,
    defendingMax = 100,
  } = req.query;
  // This Query takes from the endpoint all the minimum and maximum of the 6 stats and
  // returns all the players withthin that range of stats and their count
  connection.query(
    `SELECT *, x.count from player,
    (
      select count(*) as count FROM player
      WHERE (
        player.Pace > ${paceMin}
        AND player.Dribbling >= ${dribblingMin}
        AND player.Physical >= ${physicalMin}
        AND player.Passing >= ${passingMin}
        AND player.Shooting >= ${shootingMin}
        AND player.Defending >= ${defendingMin}
        AND player.Pace <= ${paceMax}
        AND player.Dribbling <= ${dribblingMax}
        AND player.Physical <= ${physicalMax}
        AND player.Passing <= ${passingMax}
        AND player.Shooting <= ${shootingMax}
        AND player.Defending <= ${defendingMax}
      )
      ) as x
    WHERE (
      player.Pace >= ${paceMin}
      AND player.Dribbling >= ${dribblingMin}
      AND player.Physical >= ${physicalMin}
      AND player.Passing >= ${passingMin}
      AND player.Shooting >= ${shootingMin}
      AND player.Defending >= ${defendingMin}
      AND player.Pace <= ${paceMax}
      AND player.Dribbling <= ${dribblingMax}
      AND player.Physical <= ${physicalMax}
      AND player.Passing <= ${passingMax}
      AND player.Shooting <= ${shootingMax}
      AND player.Defending <= ${defendingMax}
      )`,
    function (error, results, fields) {
      if (error) throw error;
      res.send({ players: results });
    }
  );
});
// This Query takes the club id from the endpoint and selects all the players in this club
// Most importantly it also returns Average stats of all players as the (Club Stats)
app.get("/club", (req, res) => {
  const cid = req.query.cid;
  connection.query(
    `SELECT * FROM player,
    (select ClubName FROM club) as x,
    (
      select AVG(Pace) as clubPace,
      AVG(Dribbling) as clubDribbling,
      AVG(Physical) as clubPhysical,
      AVG(Passing) as clubPassing,
      AVG(Shooting) as clubShooting,
      AVG(Defending) as clubDefending
      FROM player where player.CID=${cid}
    ) as y
    WHERE player.CID = ${cid}`,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});
