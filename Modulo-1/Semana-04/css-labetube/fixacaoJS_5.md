Resolução do exercício de revisão *javascript* 15/03

~~~javascript
function criarArrayNomesAnimais() {
    const animais = [
        { nome: "Cachorro", classificacao: "mamífero" },
        { nome: "Papagaio", classificacao: "ave" },
        { nome: "Gato", classificacao: "mamífero" },
        { nome: "Carpa", classificacao: "peixe" },
        { nome: "Pomba", classificacao: "ave" }
    ]
    return animais.map(e => e.nome)
}
```