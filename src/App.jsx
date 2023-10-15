import './App.css'
import React from 'react'
import Navbar from './components/navbar'
import "animate.css";
import Cards from './components/cards';
import Footer from './components/footer';


function App() {
  return (
    <>
      <Navbar />
      <div className="conteudofundo">
        <div className='conteudo'>
          <div className="texto-conteudo">
            <h1 className="animate__animated animate__fadeIn ">Encontre a felicidade no seu corpo, na academia que te desafia e apoia.</h1>
            <p className="animate__animated animate__fadeIn ">Descubra um ambiente que equilibra desafio e conforto para o seu máximo desempenho.</p>
          </div>
        </div>
      </div>

      <div className="Quem-Somos">
        <div className="titulo">
          <h2>O que é a Alphafit?</h2>
        </div>
        <div className="conteudodoquemsomos">
          <p className='paragrafotitulo'>
            Alphafit é onde o bem-estar se encontra com a superação.
          </p>
          <p>
            Localizada em uma posição privilegiada, com fácil acesso, nossa academia se dedica a
            oferecer atividades físicas que proporcionam prazer, satisfação e bem-estar.
            Buscamos atender aos objetivos, expectativas e necessidades dos nossos clientes,
            valorizando o investimento de cada um,
            <b> com o objetivo de promover uma melhoria na qualidade de vida de todos.</b>
          </p>
        </div>
      </div>
      <div className="Quem-Somos">
        <div className="titulo">
          <h2>Por que escolher a Alphafit?</h2>
        </div>
        <div className="content">
          <Cards /> 
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>

    
  )
}

export default App