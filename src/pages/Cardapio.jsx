import React from 'react';
import Main from '../components/Main/Main';
import '../css/Cardapio.css';
import prato1 from '../assets/images/prato1.jpg';
import prato2 from '../assets/images/prato2.jpg';
import prato3 from '../assets/images/prato3.jpg';

const Cardapio = () => {
  // Definir matriz de itens do cardápio
  const cardapio = [
    { img: prato1, tamanho: 'Pequena', preco: 'R$ 24,00', descricao: '200g de comida, com aproximadamente 100g de carne.' },
    { img: prato2, tamanho: 'Média', preco: 'R$ 32,00', descricao: '300g de comida, com aproximadamente 150g de carne.' },
    { img: prato3, tamanho: 'Grande', preco: 'R$ 40,00', descricao: '400g de comida, com aproximadamente 200g de carne.' },
  ];

  return (
    <Main>
      <table>
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Tamanho</th>
            <th>Preço</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {cardapio.map((item, index) => (
            <tr key={index}>
              <td><img src={item.img} alt={item.descricao} /></td>
              <td>{item.tamanho}</td>
              <td>{item.preco}</td>
              <td>{item.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Main>
  );
};

export default Cardapio;
