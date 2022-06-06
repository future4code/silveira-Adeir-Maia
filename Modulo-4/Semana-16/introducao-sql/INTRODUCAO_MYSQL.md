1.a 
CREATE TABLE  cria a tabela
VARCHAR(255) diz que o campo vai receber uma sting de até 255 caracteres.
PRIMARY KEY diz que essa coluna represa a identificação 
DATE diz que essa coluna vai receber dadas no formato ano/mes/dia

1.b
SHOW DATABASE mostra a database
SHOW TABLES mostra a tableas que essa database tem

1.c 
com esse comando conseguimos ver a estrutura da tabela.

2.b 
código de erro 1062 : Entrada duplicada para a chave primaria 002.

2.c
código de erro 1136 : A contagem de valores não corresponde a contagem de colunas.
falta colocar as colunas "birth_date" e "gender".

2.d
código de erro 1364: O campo "name" não tem um valor padrão 
a coluna "name" não tem um valor padrão e não pode ser null, é preciso indicar essa coluna e passar um valor para ela

2.e 
código de erro 1292: Valor de data "1950" incorreto para a coluna birth_date
a data precisa ser string e ter esse formato "yyyy-mm-dd"

3.a 
SELECT * from Actor WHERE gender = "female"

3.b
SELECT salary from Actor WHERE name = "Tony Ramos"

3.c 
não retornou nenhum erro porque a sintaxe não está errada e não retornou nenhuma linha porque não há nenhum ator ou atriz com gênero "invalid".

3.d
SELECT id, name, salary from Actor WHERE salary <= 500000

3.e
código de erro 1054 : Não há coluna "nome" na lista de colunas 
a coluna que armazena o nome dos atores se chama "name" com "A" de amor.
SELECT id, name from Actor WHERE id = "002"
funcionou!

4.a
Procure na tabela Actor e me monstre todas as colunas dos resultados que corresponderem as seguintes condições:
o valor da coluna "name" começa com A OU(OR) com J E(AND) que o valor da coluna "salary" é maior que 300.000

4.b
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000

4.c
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";

4.d
SELECT * FROM Actor WHERE ((name LIKE "%a%" OR name LIKE "%A%") OR (name LIKE "%g%" OR name LIKE "%G%")) AND (salary > 350000 AND salary < 900000)

5.a
CREATE TABLE Moves (
	  id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    evaluation INT NOT NULL
)
Cria uma tablela chamada Moves com 5 colunas 
1° chamada "id" em que seu valor deve ser uma string com no máximo 255 caracteres e é a chave primária. 
2° chamada "name" em que seu valor deve ser uma string com no máximo 255 caracteres, não deve ser nula e deve ser única. 
3° chamada "synopsis" do tipo TEXT e não deve ser nula.
4° chamada "release-Data" do tipo DATA e não deve ser nula.
5° chamada "evaluation" do tipo INT e não deve ser nula.

6.a
SELECT id, name, evaluation from Moves WHERE id = "004"

6.b
SELECT * FROM Moves WHERE name = "Se Eu Fosse Você";

6.c
SELECT id, name, synopsis from Moves WHERE evaluation <= 7;

7.a
SELECT * FROM Moves WHERE name LIKE "%vida%";

7.b
SELECT * FROM Moves WHERE (name LIKE "%Deus%" OR synopsis LIKE "%Deus%");

7.c
SELECT * FROM Moves WHERE release_date < "2022/06/06";

7.d
SELECT * FROM Moves WHERE release_date < CURDATE() AND (name LIKE "%Deus%" OR synopsis LIKE "%Deus%") AND evaluation <= 7;

