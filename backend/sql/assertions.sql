DELIMITER $$
BEGIN;
CREATE ASSERTION country_constraint
CHECK(NOT EXISTS (SELECT COUNT(CountryName) AS countt FROM country WHERE countt > 195));
END$$
DELIMITER ;