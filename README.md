[Frontend repo only](https://github.com/LevwTech/fifa-db-frontend)
[Backend repo only](https://github.com/LevwTech/fifa-db-backend)
# Frontend

 Used React, Javascript, Html and Css to create a user interface to talk to the backend via rest api and insert to the database via forms from client side and display the data obtained from select queries. We display players inform of nice fifa cards.
![image](https://user-images.githubusercontent.com/69399787/166916582-86c48ca0-3de3-4bd3-ac76-84e427726cb7.png)
![image](https://user-images.githubusercontent.com/69399787/166915811-56fdf8fb-f5e3-45c6-af41-4bb9f1b5f50f.png)
We must follow domain, key, null, referential & entity integrity rules while creating the tables. Otherwise, it will result in an error from the database/backend.
Start Creating Tuples in that order:
Country > League > Club > Manager > Player
 ![image](https://user-images.githubusercontent.com/69399787/166915766-1b249878-c1a5-4df6-b5be-e89c6618741e.png)
![image](https://user-images.githubusercontent.com/69399787/166915777-456b49fd-d8ff-47da-90d8-1c62b2c16f00.png)
![image](https://user-images.githubusercontent.com/69399787/166915793-c92a0885-d0fb-4cb7-a730-10b5b134349d.png)

 # Backend
 
  Used Nodejs and Mysql

Backend of Fifa football management system for database project

To Run the App first install MySql
create connection with
host: "localhost"
user: "root"
password: "Levw1234"
database: "fifa"

create new schema called fifa, right click and make it default
create the fifa.sql query file and insert the sql code and run it
same with triggers.sql and assertions.sql 
(sql file for each is in sql folder)

Run Node with npm start (at port 3000 so serving images work fine) and React with npm start (at port 3001)

now you can start Creating Tuples in that order:
Country > League > Club > Manager > Player

Requirments and Specifications
The Club entity refers to the sports club which all other entities branch from. It has a unique ID ‘CID’, ClubName, and an establish date. The Club also has a composite attribute referring to its detailed Address (street, city, zip code). Each Club has a manager who manages the Club and Players who play for the club.

The player entity has all the information on players including their name, unique ID, Image and a   composite attribute that lists their stats (Pace, Dribbling, Shooting, Physical, Defending, Passing)
Each Country has unique name and a  continent which it belongs to and each player has a nationality and each country has leagues.
Each Manager has a ID and a name who manages a club. Clubs participate in leagues.
Each League holds the league that each club participates in with a name and a ranking category which ranks it among other leagues in the country.








ER Model
![image](https://user-images.githubusercontent.com/69399787/166915517-86e08244-b860-400f-9a99-b56242229717.png)










Relational Schema
![image](https://user-images.githubusercontent.com/69399787/166915548-85e2538e-5e4d-44c8-8548-1103e04e33a3.png)








Triggers

Trigger makes sure that if any of the player stats (pace, dribbling, shooting, passing, physical defending) are values between 0 and 100 so if less than 0 is inserted the value is set to 0 and if more than 100 the value is set to 100

 

Assertions
 Assertion makes sure the number of tuples in country table cannot exceed 195. As this is the number of countries in the world.

Backend
Connected to the database using NodeJS express server
And implemented queries for creating and reading each table (10 queries)
Such as 
Select * from player - to get all players.
And 
Insert INTO country (CountryName, Continent) - to create a country.
We then created then created two complex queries that use aggregate functions and nested queries.
The first complex query takes from the request all the maximum and minimum stats and returns all the players within that range of stats and ther count.
The second complex query takes the club ID from the endpoint and selects all players in that club and most importantly, it also returns Average stats of all players as the Club Stats.
