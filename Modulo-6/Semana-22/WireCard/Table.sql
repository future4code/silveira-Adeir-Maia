-- Active: 1654804493662@@35.226.146.116@3306@silveira-21814323-adeir-maia
CREATE TABLE IF NOT EXISTS Wirecard_client_id (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Wirecard_Buyer (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    buyer_name VARCHAR(255) NOT NULL,
    buyer_email VARCHAR(255) NOT NULL,
    buyer_CPF VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Wirecard_CredidCard (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    card_name VARCHAR(255) NOT NULl,
    card_number BIGINT NOT NULL,
    card_expiration VARCHAR(255) NOT NULL,
    card_CVV INT NOT NULL
);

CREATE TABLE IF NOT EXISTS Wirecard_Payment_Boleto (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    amount INT NOT NULL,
    type Enum ('BOLETO') NOT NULL,
    status ENUM('CONCLUED','PENDENT','EXPIRED') DEFAULT ('PENDENT'),
    clientId VARCHAR(255) NOT NULL,
    buyerId VARCHAR(255) NOT NULL,
    FOREIGN KEY(clientId) REFERENCES Wirecard_client_id(id),
    FOREIGN KEY(buyerId) REFERENCES Wirecard_Buyer(id)
);

CREATE TABLE IF NOT EXISTS Wirecard_Payment_CreditCard (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    amount INT NOT NULL,
    type Enum ('CREDITCARD') NOT NULL,
    status ENUM('CONCLUED','PENDENT','REFUSED','REVERSED') DEFAULT ('PENDENT'),
    clientId VARCHAR(255) NOT NULL,
    buyerId VARCHAR(255) NOT NULL,
    creditCard VARCHAR(255) NOT NULL,
    FOREIGN KEY(clientId) REFERENCES Wirecard_client_id(id),
    FOREIGN key(buyerId) REFERENCES Wirecard_Buyer(id),
    FOREIGN key(creditCard) REFERENCES Wirecard_CredidCard(id)
);

INSERT INTO Wirecard_client_id (id,name) values('Jr3PybPdvçIZXHQ5hG3yfKdZcyEwkMÇ','Casas Bahia');
INSERT INTO Wirecard_client_id (id,name) values('a7GEsTYwhcGDcçIDo2rZHlfYxJzfIzg','Kabum');
INSERT INTO Wirecard_client_id (id,name) values('pnVLNKXOcuoltzNzKKbk3Qe8nwIkHt5','Pichau');
INSERT INTO Wirecard_client_id (id,name) values('1XT3ywI5kMwJOlkOAgsZTVxbfBOvPHy','Amazon');
INSERT INTO Wirecard_client_id (id,name) values('NNWdW246HQsp5bxU5QX7vAb1fcrT5ÇD','Aliexpress');
-- INSERT INTO Wirecard_Buyer (id,buyer_name,buyer_email,buyer_CPF) 
-- VALUES(
--     'MORjJwEKZzPsKOmhDUÇFlWÇNdo4v62v',
--     'Alexandre o Grande',
--     'alexandre@grande.com',
--     '035.537.196-05'
-- ),
-- (
--     'UNNLumgyssEdjxTxhNp42lvraDh6RBT',
--     'Maomé II',
--     'maome@sultao.com',
--     '660.617.518-69'
-- ),
-- (
--     'jK6tRYEyEgZ3hd0b4FZsCtPIKWtJubç',
--     'Julio Cesar',
--     'cesar@imperador.com',
--     '172.091.928-32'
-- ),
-- (
--     'FwrAjrJt4VbmufvGVDbwGXlIaXYCQlu',
--     'Dom Pedro II',
--     'dom@independencia.com',
--     '472.241.434-30'
-- ),
-- (
--     'yRiCnJVf57OAPWçy4uDw0yVçujQ1xyW',
--     'Rainha Vitória',
--     'vitoria@inglaterra.com',
--     '614.456.921-98'
-- )