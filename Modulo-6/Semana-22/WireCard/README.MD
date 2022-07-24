<p>
<a href="#sobre">Sobre</a> |
<a href="#documentação">Documentação</a> |
<a href="#orientacoes">Orientações</a> |
<a href="#features">Features</a> |
<a href="#tecnologia">Tecnologia</a> |
<a href="#desenvolvedores">Desenvolvedores</a>
</p>

<h1 id="sobre">📕 WIRECARD BACKEND API</h1>

O projeto **WIRECARD** simula o registro de pagamentos de uma prestadora de serviços financeiros e foi baseado no case [Wirecard Backend Challenge](https://github.com/wirecardBrasil/challenge/tree/master/backend). **WIRECARD** é uma API para registro de pagamentos com Cartão de Credito e Boleto, possui dois Endpoints: um para resgistro do pagamento e outro para verificar os dados do pagamento assim como seu status. A API foi desenvolvida utilizado as tecnologias **TYPESCRIPT, NODE.JS, EXPRESS.JS, MYSQL** como banco de dados e **JEST** para testes unitários.  Além disso, o projeto foi estruturado utilizando **PROGRAMAÇÃO ORIENTADA A OBJETOS(POO)** e princípios **S.O.L.I.D.** 

<h2 id="documentação">📃 Documentação do Postman</h2>

- [Postman](https://documenter.getpostman.com/view/20351643/UzXKXKLD)

<h2 id="orientacoes">🚨 Orientações para Uso</h2>

A API espera receber os seguinte dados em JSON:

- ID do cliente
- nome do comprador
- e-mail do comprador
- CPF do comprador
- valor do pagamento
- tipo do pagamento (boleto ou creditcard)
- nome do titular do cartão de crédito(Se o pagamento for cartão de crédito)
- número do cartão de crédito(Se o pagamento for cartão de crédito)
- data de expiração do cartão de credito(Se o pagamento for cartão de crédito)
- código de verificação do cartão de crédito(Se o pagamento for cartão de crédito)

O EndPoint de registro retorna o ID do pagamento e o status, caso seja por cartão de crédito, ou o ID do pagamento e o número do boleto, caso seja por boleto.

O EndPoint do status retorna as informações do pagamento e seu status.


<h2 id="features">✔️ Features</h2>

## 👤 Registro de Pagamento
EndPoint para cadastro de pagamentos à clientes WIRECARD previamente cadastrados e identificados pelo ID.

### CLIENTES E SEUS IDS

* AMAZON - ID: 1XT3ywI5kMwJOlkOAgsZTVxbfBOvPHy,
* Kabum - ID: a7GEsTYwhcGDcçIDo2rZHlfYxJzfIzg,
* Casas Bahia - ID: Jr3PybPdvçIZXHQ5hG3yfKdZcyEwkMÇ,
* Aliexpress - ID: NNWdW246HQsp5bxU5QX7vAb1fcrT5ÇD,
* Pichau -ID: pnVLNKXOcuoltzNzKKbk3Qe8nwIkHt5

#### Exemplos:

1. Requisição de pagamento com cartão de crédito
```
{
    "clientId": "NNWdW246HQsp5bxU5QX7vAb1fcrT5ÇD",
    "buyer_name": "Clark",
    "buyer_email": "SuperMan@dc.com",
    "buyer_CPF": "324.426.782-10",
    "amount":750,
    "type" :"creditcard",
    "card_name":"Clark Kent", 
    "card_number":5522876347347826, 
    "card_expiration":"/04/2025", 
    "card_CVV":428
}
```
2. Resposta
```
{
    "payment_id": "89394e8e-a715-4559-b1f3-173a4b3a0439",
    "payment_Status": "REVERSED"
}

```
3. pagamento com boleto
```
{
    "clientId": "NNWdW246HQsp5bxU5QX7vAb1fcrT5ÇD",
    "buyer_name": "Lois Lane",
    "buyer_email": "Lois@planetadiario.com",
    "buyer_CPF": "428.012.030-76",
    "amount":450,
    "type" :"boleto"
}
```
4. Resposta
```
{
    "payment_id": "55946455-c7e5-4a93-b487-544c16340ae2",
    "number_Boleto": "518502135255547520028857285515474374744865051811"
}
```

## 🎙 Status de Pagamento
Endpoint para consulta do status e informações sobre pagamento. Espera receber o Id e o tipo do pagamento.
1. Requisição 
```
{
    "payment_id":"89394e8e-a715-4559-b1f3-173a4b3a0439",
    "payment_Type":"creditcard"
}
```
2. Resposta 
```
{
    "ClientId": "NNWdW246HQsp5bxU5QX7vAb1fcrT5ÇD",
    "Client_name": "Aliexpress",
    "Buyer_Id": "c754e33d-7dab-4e8c-ae48-565f208e6366",
    "Buyer_name": "Clark",
    "Buyer_email": "SuperMan@dc.com",
    "Buyer_CPF": "324.426.782-10",
    "PaymentId": "89394e8e-a715-4559-b1f3-173a4b3a0439",
    "CreditCard_id": "d9ee9c46-1fbd-4bdb-8b91-1d866d3fabab",
    "CreditCard_name": "Clark Kent",
    "Creditcard_number": 5522876347347826,
    "creditCard_expiration": "/04/2025",
    "Creditcard_CVV": 428,
    "Amount": 750,
    "Status": "REVERSED"
}
```
3. Requisição
```
{
    "payment_id":"7ba135a6-26c5-4fa2-83ba-e35a076414a5",
    "payment_Type":"boleto"
}
```
4. Resposta
```
{
    "ClientId": "NNWdW246HQsp5bxU5QX7vAb1fcrT5ÇD",
    "Client_name": "Aliexpress",
    "Buyer_Id": "1f1bc664-e1af-4be3-bc82-687f2adf5dc7",
    "Buyer_name": "Lois Lane",
    "Buyer_email": "Lois@planetadiario.com",
    "Buyer_CPF": "428.012.030-76",
    "PaymentId": "7ba135a6-26c5-4fa2-83ba-e35a076414a5",
    "Boleto_number": "770565103656132433640302616661428461234374301035",
    "Amount": 450,
    "Status": "PENDENT"
}
```

 <h2 id="tecnologia">🛠 Tecnologia</h2>

- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/docs/)
- [Jest](https://jestjs.io/pt-BR/docs/api)
- [MySql](https://dev.mysql.com/doc/)



<h2 id="desenvolvedores">👨‍💻 Desenvolvedor</h2>
<table>         
<td><a href="https://github.com/future4code/silveira-Adeir-Maia"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98994187?v=4" width="100px;" alt="Imagem profile Adeir Moreira desenvolvedor"/><br /><sub><b>Adeir Moreira</b></sub></a><br /> 

</table>

<a href="#voltar">Voltar para o topo ⬆️</a>