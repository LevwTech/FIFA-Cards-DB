DROP TRIGGER IF EXISTS before_insert_pace;
DELIMITER $$
CREATE TRIGGER before_insert_pace
BEFORE INSERT ON `player`
FOR EACH ROW BEGIN
	IF (NEW.Pace < 0) THEN
		SET NEW.Pace= 0;
	ELSEIF (NEW.Pace > 100) THEN
		SET NEW.Pace= 100;
	END IF;
    
    IF (NEW.Dribbling < 0) THEN
		SET NEW.Dribbling= 0;
	ELSEIF (NEW.Dribbling > 100) THEN
		SET NEW.Dribbling= 100;
	END IF;
    
    IF (NEW.Physical < 0) THEN
		SET NEW.Physical= 0;
	ELSEIF (NEW.Physical > 100) THEN
		SET NEW.Physical= 100;
	END IF;
    
    IF (NEW.Passing < 0) THEN
		SET NEW.Passing= 0;
	ELSEIF (NEW.Passing > 100) THEN
		SET NEW.Passing= 100;
	END IF;
    
    IF (NEW.Shooting < 0) THEN
		SET NEW.Shooting= 0;
	ELSEIF (NEW.Shooting > 100) THEN
		SET NEW.Shooting= 100;
	END IF;
    
    IF (NEW.Defending < 0) THEN
		SET NEW.Defending= 0;
	ELSEIF (NEW.Defending > 100) THEN
		SET NEW.Defending= 100;
	END IF;
END$$
DELIMITER ;