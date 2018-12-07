DROP TABLE user_parts;
DROP TABLE pedal_parts;
DROP TABLE parts;
DROP TABLE pedals;

DROP SEQUENCE part_id_seq;
DROP SEQUENCE pedal_id_seq;

CREATE TABLE parts (
	id			INT PRIMARY KEY
	, type		TEXT NOT NULL
	, value		TEXT
);

CREATE TABLE pedals (
	id			INT PRIMARY KEY
	, name		TEXT NOT NULL
  , type TEXT
  , videoUrl Text
);

CREATE TABLE pedal_parts (
	part_id		 INT
	, pedal_id		INT
	, count		INT
	, PRIMARY KEY(part_id, pedal_id)
	, CONSTRAINT part_id_fk FOREIGN KEY (part_id) REFERENCES parts(id)
	, CONSTRAINT pedal_id_fk FOREIGN KEY (pedal_id) REFERENCES pedals(id)
);

CREATE TABLE user_parts (
	part_id		 INT
	, user_email		text
	, count		INT
	, PRIMARY KEY(part_id, user_email)
	, CONSTRAINT part_id_fk FOREIGN KEY (part_id) REFERENCES parts(id)
	, CONSTRAINT user_email_fk FOREIGN KEY (user_email) REFERENCES users(email)
);

CREATE SEQUENCE part_id_seq;
ALTER TABLE parts ALTER id SET DEFAULT NEXTVAL('part_id_seq');

CREATE SEQUENCE pedal_id_seq;
ALTER TABLE pedals ALTER id SET DEFAULT NEXTVAL('pedal_id_seq');

INSERT INTO pedals(name, type, videoUrl) values('Woolly Mammoth', 'Fuzz', 'https://www.youtube.com/embed/zEodGhAmV6U');

INSERT INTO parts(type, value) values('Potentiometer', '2k Lin');
INSERT INTO parts(type, value) values('Potentiometer', '500k Lin');
INSERT INTO parts(type, value) values('Potentiometer', '10k Lin');
INSERT INTO parts(type, value) values('Resistor', '51k');
INSERT INTO parts(type, value) values('Resistor', '20k');
INSERT INTO parts(type, value) values('Resistor', '100k');
INSERT INTO parts(type, value) values('Resistor', '2k2');
INSERT INTO parts(type, value) values('Resistor', '5k');
INSERT INTO parts(type, value) values('Resistor', '10k');
INSERT INTO parts(type, value) values('Capacitor', '0.22');
INSERT INTO parts(type, value) values('Capacitor', '100');
INSERT INTO parts(type, value) values('Capacitor', '0.01');
INSERT INTO parts(type, value) values('Transistor', '2N3904');

INSERT INTO pedal_parts(part_id, pedal_id, count) values
  (1, 1, 1)
  ,(2, 1, 1)
  ,(3, 1, 2)
  ,(4, 1, 1)
  ,(5, 1, 1)
  ,(6, 1, 1)
  ,(7, 1, 1)
  ,(8, 1, 1)
  ,(9, 1, 1)
  ,(10, 1, 2)
  ,(11, 1, 2)
  ,(12, 1, 2)
  ,(13, 1, 2);

  INSERT INTO user_parts(part_id, user_email, count) values
  (1, 'test', 1)
  ,(2, 'test', 1)
  ,(3, 'test', 2)
  ,(4, 'test', 1)
  ,(5, 'test', 1)
  ,(6, 'test', 1)
  ,(7, 'test', 1)
  ,(8, 'test', 1)
  ,(9, 'test', 1)
  ,(10, 'test', 2)
  ,(11, 'test', 2)
  ,(12, 'test', 2)
  ,(13, 'test', 2);