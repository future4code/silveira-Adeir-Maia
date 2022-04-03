import React from "react";
import Etapa1 from "./componentes/estapa1/etapa1";
import Etapa2 from "./componentes/estapa2/estapa2";
import Etapa3 from "./componentes/estapa3/estapa3";
import Final from "./componentes/estapa4/estapa4";
import { Body, Main } from "./componentes/estilos/styles";


class App extends React.Component {
  state = {
    etapa: 1
  }
  escolhaDaPagina = (etapa) => {
    switch (etapa) {
      case 1:
        return <Etapa1 trocaEtapaPassadoProps={this.trocaEtapa} trocaEtapaPassadoProps2={this.trocaEtapa2} />
      case 2:
        return <Etapa2 trocaEtapaPassadoProps2={this.trocaEtapa2} />
      case 3:
        return <Etapa3 trocaEtapaPassadoProps2={this.trocaEtapa2} />
      default:
        return <Final />
    }
  }
  trocaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }
  trocaEtapa2 = () => {
    this.setState({ etapa: this.state.etapa + 2 })
  }
  render() {
    let pagina = this.escolhaDaPagina(this.state.etapa)

    return (
      <Body>
        <Main>
          {pagina}
        </Main>
      </Body>
    );
  }
}





export default App;
