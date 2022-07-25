-- Active: 1654804493662@@35.226.146.116@3306@silveira-21814323-adeir-maia
CREATE TABLE Amaro_Product (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255)
);

CREATE TABLE Amaro_Tags (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) 
);

CREATE TABLE Amaro_Products_Tags (
    id_product VARCHAR(255) NOT NULL,
    id_tag VARCHAR(255) NOT NULL,
    FOREIGN KEY(id_product) REFERENCES Amaro_Product(id),
    FOREIGN KEY(id_tag) REFERENCES Amaro_Tags(id)
)