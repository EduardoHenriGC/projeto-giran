import React from "react";
import BoxHero from "./BoxItem";
import { Container } from "./styles";

const recomendacao = [
  {
    img: "https://cinebuzz.uol.com.br/media/uploads/nao_confie_em_estranhos_sugere_ethan_hawke_sobre_seu_personagem_em_o_telefone_preto.jpg",
    imgmodal:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDXQ9fOAnGoxJbqvoRVBJac1Z3_43jRF0RoIpGVw-PwrORX4FsnXjh6Xu5o5fg-YMFc67awxtDTNCDPKFcDu7Y7LlWTDgE0UxFB96o6aIj7jegE-_lciN5LxXRcSO8A1W97U_fxflI8WRgdZy6XD3UYgCjEyagsj72ZESy5_VDYfLKJ3khce3DhEGJ/s650/O%20Telefone%20Preto%20(2021).jpg",
    nome: "Telefone preto",

    descricao:
      "Finney Shaw, de 13 anos, é sequestrado por um sádico assassino mascarado e mantido em um porão à prova de som. Até que um telefone desconectado na parede começa a tocar, e ele logo descobre que pode ouvir as vozes das vítimas anteriores do maníaco.",
    duracao: "1h 42m",
    ano: "21/07/2022",

    stream: "apple tv, amazon Prime",
  },
  {
    img: "https://cdn1.epicgames.com/salesEvent/salesEvent/PlagueTale2_2560x1440-f5840bd8286204cb20ae573e160c29f3",
    imgmodal:
      "https://psverso.com.br/wp-content/uploads/2022/08/A-Plague-Tale-Requiem-trailer-visao-geral-gameplay.jpg",
    nome: "A Plague Tale: Requiem",
    descricao:
      "A Plague Tale: Requiem é um jogo eletrônico de ação-aventura e furtividade desenvolvido pela Asobo Studio e publicado pela Focus Home Interactive. Foi lançado em 18 de outubro de 2022 para Microsoft Windows, Nintendo Switch, PlayStation 5 e Xbox Series X/S.",
    duracao: "19 hrs",
    ano: "2022",

    stream: "Ps5, Series X e S, Switch, pc",
  },
  {
    img: "https://media.hugogloss.uol.com.br/uploads/2022/10/fotojet-43.jpg",
    imgmodal:
      "https://pyxis.nymag.com/v1/imgs/43e/80c/79c39ecbde9037bc7ecab83b7fc44e7436-recaps-ring.rsquare.w700.jpg",
    nome: "House of the dragon",
    descricao:
      "Os apoiadores de Aegon Targaryen entram em conflito com os adeptos de sua meia-irmã, Rhaenyra, pelo trono de Viserys I, seu falecido pai, iniciando uma guerra civil cerca de 200 anos antes dos eventos retratados em Game of Thrones.",
    duracao: "1 temporada",
    ano: "2022",

    stream: "hboMax",
  },
];

const Lista = recomendacao.map((c) => <BoxHero recomendacao={c} />);

const BoxMenu = () => {
  return (
    <Container>
      <h3>indicações da semana</h3>
      <ul>{Lista}</ul>
    </Container>
  );
};

export default BoxMenu;
