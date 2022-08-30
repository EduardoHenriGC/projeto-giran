import React from "react";
import Lista from "./filmes";
import { Filme } from "./styles";

const filmes = [
  {
    nome: "O Lobo de Wall Street",
    duracao: "3 horas",
    lancamento: "2013",
    genero: "biografia/drama",
    img: "http://3.bp.blogspot.com/-d78HCA4objs/WrY9vzXXA9I/AAAAAAAAPVk/FAht5SkHcUcS15h9jhPPPSqulxp0Luf6gCK4BGAYYCw/s1600/o%2Blobo%2Bde%2Bwall%2Bstreet.png",
    sinopse:
      "Jordan Belfort é um ambicioso corretor da bolsa de valores que cria um verdadeiro império, enriquecendo de forma rápida, porém ilegal. Ele e seus amigos mergulham em um mundo de excessos, mas seus métodos ilícitos despertam a atenção da polícia.",
    nota: "82",
    video: "https://www.youtube.com/embed/XQ-m6j8NB5U",
  },
  {
    nome: "Interestelar",
    duracao: "2h e 49m",
    lancamento: "2014",
    genero: "Ficção científica/Aventura ",
    img: "https://1.bp.blogspot.com/-jYGOODdy0Es/YUItjuBQNWI/AAAAAAABHE0/NeXyB7BdzQ8vUS8eauzZJjnb4kbBJ_t3wCLcBGAsYHQ/s1600/Interstellar.jpg",
    sinopse:
      "Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.",
    nota: "86",
    video: "https://www.youtube.com/embed/mbbPSq63yuM",
  },
  {
    nome: "Coringa",
    duracao: "2h e 2m",
    lancamento: "2019",
    genero: "Suspense/Crime",
    img: "https://www.viastral.com.br/uploads/materias/CORINGACAPA%20(1).jpg",
    sinopse:
      "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
    nota: "84",
    video: "https://www.youtube.com/embed/jfVTJm9NilA",
  },
];

const ListaFilmes = filmes.map((c) => <Lista filmes={c} />);
const Topfilmes = () => {
  return (
    <Filme>
      <ul className="container">{ListaFilmes}</ul>
    </Filme>
  );
};

export default Topfilmes;
