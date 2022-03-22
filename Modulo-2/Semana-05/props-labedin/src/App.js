import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import minhaFoto from './img/Adeir.jpg'
import tbm from './img/tbm.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={minhaFoto}
          nome="Adeir Moreira Maia"
          descricao="Eu sou Adeir Moreira Maia, aluno do curso de Desenvolvedor Web Full Stack da Labenu. Estou no segundo módulo aprendendo React. 
          No primeiro módulo aprendi javaScript Html e Css."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png"
          texto="Ver mais"
        />
      </div>
      <div className='page-section-container'>
        <CardPequeno
          img='https://i.pinimg.com/736x/11/0c/f7/110cf7e9239491d7b8742409fab5cf5d.jpg'
          img1='https://static.vecteezy.com/ti/vetor-gratis/p2/564178-icone-de-casa-gr%C3%A1tis-vetor.jpg'
          email='adeir.maia@hotmail.com'
          endereço='Rua 21 de abril, Esplanada, N84, Santa Luzia, MG' />

      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={tbm}
          nome="TBM industria e Comécio"
          descricao="Asisitente de Crontrole de Qualidade"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
          link='https://www.instagram.com/adeirmaia/'
        />

        <ImagemButton
          imagem='https://cdn-icons-png.flaticon.com/512/1409/1409946.png'
          texto='Instagran'
          link='https://www.instagram.com/adeirmaia/' />

        <ImagemButton
          imagem='https://cdn-icons-png.flaticon.com/512/174/174857.png'
          texto='Linkedin'
          link='https://www.linkedin.com/in/adeir-moreira-5492431b9/' />
      </div>
    </div>
  );
}

export default App;
