-- DROP TABLE users;
-- CREATE TABLE users (
--   email TEXT PRIMARY KEY
--   , username TEXT NOT NULL
--   , salt VARCHAR(32)
--   , hash VARCHAR(128)
-- );

DROP TABLE user_components;
DROP TABLE schematic_components;
DROP TABLE components;
DROP TABLE schematics;

DROP SEQUENCE component_id_seq;
DROP SEQUENCE schematic_id_seq;

CREATE TABLE components (
	id			INT PRIMARY KEY
	, type		TEXT NOT NULL
	, value		TEXT
);

CREATE TABLE schematics (
	id			INT PRIMARY KEY
	, name		TEXT NOT NULL
  , type TEXT
  , videoUrl Text
);

CREATE TABLE schematic_components (
	component_id		 INT
	, schematic_id		INT
	, schematic_component_count		INT
	, PRIMARY KEY(component_id, schematic_id)
	, CONSTRAINT component_id_fk FOREIGN KEY (component_id) REFERENCES components(id)
	, CONSTRAINT schematic_id_fk FOREIGN KEY (schematic_id) REFERENCES schematics(id)
);

CREATE TABLE user_components (
	component_id		 INT
	, user_email		text
	, user_component_count		INT
	, PRIMARY KEY(component_id, user_email)
	, CONSTRAINT component_id_fk FOREIGN KEY (component_id) REFERENCES components(id)
	, CONSTRAINT user_email_fk FOREIGN KEY (user_email) REFERENCES users(email)
);

CREATE SEQUENCE component_id_seq;
ALTER TABLE components ALTER id SET DEFAULT NEXTVAL('component_id_seq');

CREATE SEQUENCE schematic_id_seq;
ALTER TABLE schematics ALTER id SET DEFAULT NEXTVAL('schematic_id_seq');

INSERT INTO schematics(name, type, videoUrl) values('Woolly Mammoth', 'Fuzz', 'https://www.youtube.com/embed/zEodGhAmV6U');
INSERT INTO schematics(name, type, videoUrl) values('Tremulus Lune', 'Tremolo', 'https://www.youtube.com/embed/_QqpbnI5sOU');
INSERT INTO schematics(name, type, videoUrl) values('Spring Breeze', 'Delay', 'https://www.youtube.com/embed/vbEKie_WjPw');

INSERT INTO components(type, value) values('Potentiometer', '2k Lin');
INSERT INTO components(type, value) values('Potentiometer', '500k Lin');
INSERT INTO components(type, value) values('Potentiometer', '10k Lin');
INSERT INTO components(type, value) values('Resistor', '51k');
INSERT INTO components(type, value) values('Resistor', '20k');
INSERT INTO components(type, value) values('Resistor', '100k');
INSERT INTO components(type, value) values('Resistor', '2k2');
INSERT INTO components(type, value) values('Resistor', '5k');
INSERT INTO components(type, value) values('Resistor', '10k');
INSERT INTO components(type, value) values('Capacitor', '0.22');
INSERT INTO components(type, value) values('Capacitor', '100');
INSERT INTO components(type, value) values('Capacitor', '0.01');
INSERT INTO components(type, value) values('Transistor', '2N3904');
-- 13
INSERT INTO components(type, value) values('Resistor', '1k');
INSERT INTO components(type, value) values('Resistor', '220k');
INSERT INTO components(type, value) values('Resistor', '1M');
INSERT INTO components(type, value) values('Resistor', '330R');
INSERT INTO components(type, value) values('Resistor', '2k7');
INSERT INTO components(type, value) values('Resistor', '470k');

INSERT INTO schematic_components(component_id, schematic_id, schematic_component_count) values
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
  ,(13, 1, 2)
  ,(14, 2, 2)
  ,(15, 2, 5)
  ,(16, 2, 2)
  ,(17, 2, 1)
  ,(18, 2, 1)
  ,(19, 2, 1);

  INSERT INTO user_components(component_id, user_email, user_component_count) values
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