-- Active: 1654804493662@@35.226.146.116@3306@silveira-21814323-adeir-maia
CREATE TABLE FutureEats_User (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    cpf VARCHAR(255) NOT NULL UNIQUE,
    hashPassword VARCHAR(255) NOT NULL
);
CREATE TABLE FutureEats_Adress (
    id VARCHAR(255) PRIMARY KEY,
    userId VARCHAR(255) NOT NULL,
    CEP VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    number VARCHAR(255) NOT NULL,
    neighbourhood VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    complement VARCHAR(255) NOT NULL,
    FOREIGN KEY (userId) REFERENCES FutureEats_User(id)
);
CREATE TABLE FutureEats_Restaurants (
    id VARCHAR(255) PRIMARY KEY,
    logoUrl TEXT NOT NULL,
    address VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    deliveryTime INT NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(255) NOT NULL,
    shipping INT NOT NULL
);
CREATE TABLE FutureEats_Products (
    restaurantId VARCHAR(255) NOT NULL,
    id VARCHAR(255) PRIMARY KEY,
    price INT NOT NULL,
    photoUrl TEXT NOT NULL,
    description TEXT NOT NULL,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    FOREIGN KEY (restaurantId) REFERENCES FutureEats_Restaurants(id)
);
CREATE TABLE FutureEats_Order (
    id VARCHAR(255) PRIMARY KEY,
    restaurantId VARCHAR(255) NOT NULL,
    restaurantName VARCHAR(255) NOT NULL,
    clientId VARCHAR(255) NOT NULL,
    createdAt BIGINT NOT NULL,
    expiresAt BIGINT NOT NULL,
    totalPrice INT NOT NULL,
    FOREIGN KEY (restaurantId) REFERENCES FutureEats_Restaurants(id),
    FOREIGN KEY (clientId) REFERENCES FutureEats_User(id)
    
);
