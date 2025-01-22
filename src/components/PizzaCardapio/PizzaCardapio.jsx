import React, { useState, useEffect } from 'react';
import { xml2js } from 'xml-js';

const PizzaCardapio = () => {
  const [pizzas, setPizzas] = useState([]);

  const carregarCardapio = () => {
    fetch('/src/assets/cardapio_pizzas.xml')
      .then((response) => response.text())
      .then((data) => {
        const jsonData = xml2js(data, { compact: true });
        console.log(jsonData); // Check the structure of the parsed data
  
        // Check if jsonData.cardapio and jsonData.cardapio.CD exist
        if (jsonData && jsonData.cardapio && jsonData.cardapio.CD) {
          const cardapio = jsonData.cardapio.CD.map((item) => ({
            numero: item.numero._text,
            sabor: item.sabor._text,
            descricao: item.descricao._text,
            preco_12: item.preco_12._text,
            preco_8: item.preco_8._text,
            preco_4: item.preco_4._text,
          }));
          setPizzas(cardapio);
        } else {
          console.error('CD property not found in the XML data:', jsonData);
        }
      })
      .catch((error) => {
        console.error('Error fetching or parsing XML:', error);
      });
  };

  useEffect(() => {
    carregarCardapio(); // Chama diretamente a função para carregar o cardápio ao montar o componente
  }, []);
  

  return (
    <div className="pizza-cardapio">
      <h1>Cardápio de Pizzas</h1>
      <table>
        <thead>
          <tr>
            <th>Número</th>
            <th>Sabor</th>
            <th>Descrição</th>
            <th>Preço (12 pedaços)</th>
            <th>Preço (8 pedaços)</th>
            <th>Preço (4 pedaços)</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza) => (
            <tr key={pizza.numero}>
              <td>{pizza.numero}</td>
              <td>{pizza.sabor}</td>
              <td>{pizza.descricao}</td>
              <td>R$ {pizza.preco_12}</td>
              <td>R$ {pizza.preco_8}</td>
              <td>R$ {pizza.preco_4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PizzaCardapio;
