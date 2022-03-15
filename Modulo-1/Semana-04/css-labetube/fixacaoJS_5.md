Resolução do exercício de revisão *javascript*

~~~javascript
function criarArrayNomesAnimais() {
    const animais = [
        { nome: "Cachorro", classificacao: "mamífero" },
        { nome: "Papagaio", classificacao: "ave" },
        { nome: "Gato", classificacao: "mamífero" },
        { nome: "Carpa", classificacao: "peixe" },
        { nome: "Pomba", classificacao: "ave" }
    ]
    let string = animais.reduce((a, e) => {
        a.push(e.nome)
        return a
    }, [])
    return string
}
```