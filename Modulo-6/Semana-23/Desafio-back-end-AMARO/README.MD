<p>
<a href="#sobre">Sobre</a> |
<a href="#tecnologias">Tecnologias</a> |
<a href="#link">Link da API</a> |
<a href="#documentação">Documentação</a> |
<a href="#features">Features</a> |
<a href="#desenvolvedores">Desenvolvedores</a>
</p>

<h1 id="sobre">📕 AMARO API</h1>

Amaro é uma API que simula uma pequena parte do sistema de uma loja virtual, possiu 2 endpoints: 1 para cadastro de produtos e outro para consulta por id, name ou tags. A API foi desenvolvida utilizado as tecnologias **TYPESCRIPT, NODE.JS, EXPRESS.JS, MYSQL** como banco de dados e **JEST** para testes unitários. Além disso, o projeto foi estruturado utilizando **PROGRAMAÇÃO ORIENTADA A OBJETOS(POO)** e princípios **S.O.L.I.D.** 

 <h2 id="tecnologias">🛠 Tecnologias</h2>

- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/docs/)
- [Jest](https://jestjs.io/pt-BR/docs/api)
- [MySql](https://dev.mysql.com/doc/)

<h2 id="link">🔗 Link base da API</h2>

### - https://amaro-adeir-moreira.herokuapp.com/

<h2 id="documentação">📃 Documentação do Postman</h2>
Na documentação você encontra as instruções de como usar e o que cada endPoint espera receber. Você também pode clicar em "Run in Postman" para rodar os endpoint no seu postman.

### - [Postman](https://documenter.getpostman.com/view/20351643/UzXNVHpT)

<h2 id="features">✔️ Features</h2>

## 📦 Registro de Produtos
EndPoint para cadastrar um produto. O dados devem ser enviados em formato JSON. Espera receber um nome de produto e as tags associadas a ele, que serão usadas na busca por aquele produto. O nome precisa ser uma string e as tags devem ser passadas em um Array de strings. O dados são verificados para determinar se são válidos e caso não sejam a API retorna um erro específico para cada caso  

## Exemplos:

### Caminho: <a href="#link">Link da API</a>/product/register

~~~JSON
{
    "name":"Camisa Preta",
    "tags":["camisa","casual","verão"]
}
~~~

## 🔎 Procura por Produtos
O Endpoint para busca de produtos. Se a busca for por id ou por name, os termos devem ser enviados por query, se for por tags, devem ser enviardas em um array de strings no corpo da requisição. Os dados são verificados para determinar se são válidos,caso não sejam, um erro espeficifico é retornado em cada caso. Um array vazio é retornado caso a busca não encontre resultados.

## Exemplos:

##### BUSCA POR ID - Caminho: <a href="#link">Link da API</a>/product/?id=cb966f31-aab5-4f69-9067-5a552332c720
##### BUSCA POR NAME - Caminho: <a href="#link">Link da API</a>/product/?name=calça
##### BUSCA POR TAGS - Caminho: <a href="#link">Link da API</a>/product
~~~JSON
{
    "tags":["casual"]
}
~~~

<h2 id="desenvolvedores">👨‍💻 Desenvolvedor</h2>
<table>         
<td><a href="https://github.com/future4code/silveira-Adeir-Maia"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98994187?v=4" width="100px;" alt="Imagem profile Adeir Moreira desenvolvedor"/><br /><sub><b>Adeir Moreira</b></sub></a><br /> 

</table>

<a href="#voltar">Voltar para o topo ⬆️</a>
