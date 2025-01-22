import React from 'react';
import Main from '../components/Main/Main';
import '../css/Home.css'
import logo from '../assets/images/logo.png'

const Home = () => (
  <Main>
    <section className="about">
      <img src={logo} alt="Logo do Restaurante Souza" className="logo" />
      <p>
        Em um tempo em que a pequena Hortolândia começava a se transformar em uma cidade vibrante, o <strong>Restaurante e Pizzaria Souza</strong> nasceu com uma visão: oferecer uma experiência gastronômica única, combinando tradição e inovação.
      </p>
      <p>
        Nosso cardápio conta com mais de 50 opções de pizzas, todas preparadas com ingredientes selecionados e massas artesanais feitas diariamente. Temos também deliciosas massas, sobremesas exclusivas e uma variedade de bebidas para harmonizar com cada prato.
      </p>
      <p>
        Seja para um jantar romântico, uma comemoração especial ou simplesmente para matar aquela fome, nosso espaço aconchegante e nossa equipe atenciosa estão sempre prontos para recebê-lo.
      </p>
    </section>
  </Main>
);

export default Home;
