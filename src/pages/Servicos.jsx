import React from 'react';
import Main from '../components/Main/Main';
import '../css/Servicos.css'

const Servicos = () => (
  <Main>
    <section className="services">
      <h2>Nossos Serviços</h2>
      <p>Descubra os serviços que oferecemos para tornar sua experiência ainda mais especial:</p>
      <ul>
        <li>
          <h3>Delivery</h3>
          <p>Receba nossas deliciosas pizzas, marmitas e sobremesas no conforto da sua casa. Serviço rápido e eficiente!</p>
        </li>
        <li>
          <h3>Festas</h3>
          <p>Organize eventos memoráveis com nosso serviço de catering. Pizzas, massas e sobremesas personalizadas para sua ocasião.</p>
        </li>
        <li>
          <h3>Marmitas</h3>
          <p>Refeições equilibradas e saborosas para o seu dia a dia. Escolha entre diversas opções preparadas com carinho.</p>
        </li>
      </ul>
    </section>

  </Main>
);

export default Servicos;
