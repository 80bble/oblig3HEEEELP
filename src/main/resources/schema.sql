CREATE TABLE TICKET
(
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    film VARCHAR(255) NOT NULL,
    antall INTEGER NOT NULL,
    navn VARCHAR(255) NOT NULL,
    etternavn VARCHAR(255) NOT NULL,
    telefon INTEGER NOT NULL,
    epost VARCHAR(255) NOT NULL,

    PRIMARY KEY (id)
);