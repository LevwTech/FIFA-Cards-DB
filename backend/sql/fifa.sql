CREATE TABLE club (
  CID int(11) NOT NULL AUTO_INCREMENT,
  ClubName varchar(50) NOT NULL,
  EstablishDate date NOT NULL,
  Street varchar(50) NOT NULL,
  ZIP int(11) NOT NULL,
  City varchar(50) NOT NULL,
  PRIMARY KEY (CID)
);

CREATE TABLE country (
  CountryName varchar(50) NOT NULL,
  Continent varchar(50) NOT NULL,
  PRIMARY KEY (CountryName)
);


CREATE TABLE league (
  LeagueName varchar(50) NOT NULL,
  Category varchar(50) NOT NULL,
  CountryName varchar(50) NOT NULL,
  PRIMARY KEY (LeagueName)
);


CREATE TABLE manager (
  MID int(11) NOT NULL AUTO_INCREMENT,
  ManagerName varchar(11) NOT NULL,
  CID int(11) NOT NULL,
  PRIMARY KEY (MID)
);


CREATE TABLE player (
  ID int(11) NOT NULL AUTO_INCREMENT,
  Pace int(11) NOT NULL,
  Dribbling int(11) NOT NULL,
  Physical int(11) NOT NULL,
  Passing int(11) NOT NULL,
  Shooting int(11) NOT NULL,
  Defending int(11) NOT NULL,
  Pname varchar(11) NOT NULL,
  Image text NOT NULL,
  CID int(11) NOT NULL,
  CountryName varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

ALTER TABLE league
  ADD KEY FK_CountryName_League (CountryName),
  ADD CONSTRAINT FK_CountryName_League FOREIGN KEY (CountryName) REFERENCES country (CountryName);

ALTER TABLE manager
  ADD KEY Manager_CID (CID),
  ADD CONSTRAINT Manager_CID FOREIGN KEY (CID) REFERENCES club (CID);


ALTER TABLE player
  ADD KEY FK_CID (CID),
  ADD KEY FK_CountryName (CountryName),
  ADD CONSTRAINT FK_CID FOREIGN KEY (CID) REFERENCES club (CID),
  ADD CONSTRAINT FK_CountryName FOREIGN KEY (CountryName) REFERENCES country (CountryName);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Levw1234';
flush privileges;