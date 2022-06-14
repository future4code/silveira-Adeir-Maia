## 1.a
É uma coluna onde relacionamos dados de outras tablelas, nessa colunas só poderão haver dados que estão presenstes
na coluna da tabela que está sendo referenciada.

## 1.b
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Moves(id)
);
INSERT INTO Rating (id,comment,rate,movie_id)
value(
"comente01",
"Esse filme é muito bom",
9.2,
"004"
),(
"comente02",
"Não sei, não vi, não sou capaz de opinar",
9.2,
"002"
),(
"comente03",
"Juliana Paes é uma excelente atriz, mas a proposta do filme não me agrada",
9.2,
"003"
);
```

## 1.c
a query retornou um erro pois a coluna movie_id não pode receber um dado que não esta presente na coluna da tabela a qual está se referenciando.

## 1.d
```
ALTER TABLE Moves DROP evaluation;
```

## 1.e
Não é possivel excluir uma linha que possui um dado que serve de referência para outra tabela, pois uma tabela não pode referenciar
um dado nulo.

## 2.a
Essa é uma tablema que relaciona um ator a varios fimes e um filme a varios atores.

## 2.b
```
INSERT INTO Movie_Cast (movie_id, actor_id) value ("002","010"),("003","005"),("004","006");
```
## 2.c
a query retornou um erro pois a coluna movie_id não pode receber um dado que não esta presente na coluna da tabela a qual está se referenciando.

## 2.d
a query retornou um erro pois a coluna movie_id não pode receber um dado que não esta presente na coluna da tabela a qual está se referenciando.

## 3.a 
Mostra os filmes e o rating do filme. Serve para relacionar um filme a uma nota.

## 3.b
```
SELECT Moves.name as nome , Moves.id as  id , Rating.rate as nota FROM Moves JOIN Rating ON Moves.id = Rating.movie_id
```