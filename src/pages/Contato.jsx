import React from 'react';
import Main from '../components/Main/Main';
import '../css/Contato.css'

const Contato = () => (
  <Main>
    <section className="contact">
      <h2>Entre em Contato</h2>
      <p>Tem dúvidas, sugestões ou deseja saber mais sobre nossos serviços? Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
      <form>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Digite seu email" required />

        <label htmlFor="comentarios">Comentários:</label>
        <textarea id="comentarios" name="comentarios" rows="4" placeholder="Digite sua mensagem"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>

  </Main>
);

export default Contato;
