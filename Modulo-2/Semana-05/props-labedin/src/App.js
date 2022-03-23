import React from 'react';
import styled from 'styled-components';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Formmaçao from './components/Formacao';
import minhaFoto from './img/Adeir.jpg'
import tbm from './img/tbm.jpg'

const Aplicacao = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`
const Titulos = styled.h3`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 30px;
`
function App() {
  return (
    <Aplicacao>
      <PageSectionContainer >
        <Titulos>Dados pessoais</Titulos>
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
      </PageSectionContainer>
      <PageSectionContainer >
        <CardPequeno
          img='https://i.pinimg.com/736x/11/0c/f7/110cf7e9239491d7b8742409fab5cf5d.jpg'
          img1='https://static.vecteezy.com/ti/vetor-gratis/p2/564178-icone-de-casa-gr%C3%A1tis-vetor.jpg'
          email='adeir.maia@hotmail.com'
          endereço='Rua 21 de abril, Esplanada, N84, Santa Luzia, MG' />

        <PageSectionContainer >
          <Titulos>Formação Acadêmica</Titulos>
          <Formmaçao
            curso1='Ensino Médio Completo - 2012 - E.E. Geraldo Teixeira da Costa.'
            curso2='Técnico em Mecânica - 2014  - CFP João Carlos Giovaninni.'
            curso3='Desenvolvedor Web Full Stack  - agosto-2022  - Labenu.'
          />


        </PageSectionContainer>

      </PageSectionContainer>
      <PageSectionContainer >
        <Titulos>Experiências profissionais</Titulos>
        <CardGrande
          imagem={tbm}
          nome="TBM industria e Comécio"
          descricao="Asisitente de Crontrole de Qualidade"
        />
      </PageSectionContainer>

      <PageSectionContainer >
        <Titulos>Minhas redes sociais</Titulos>
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
      </PageSectionContainer>
    </Aplicacao>
  );
}

export default App;
