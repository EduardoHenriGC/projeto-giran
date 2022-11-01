import React from "react";
import { Pages } from "../Pages";
import Jogos from "./jogos";
import Footer from "../../components/footer/index";
const jogos = [
  {
    nome: "Bloodborne",
    duracao: "44 Hrs",
    lancamento: "2015",
    genero: "RPG de ação,  aventura, Survival horror",
    img: "https://www.psu.com/wp/wp-content/uploads/2020/09/Bloodborne-PS4-Wallpaper-47-1024x576.jpg",
    sinopse:
      "Bloodborne é um RPG eletrônico de ação produzido pela FromSoftware e publicado pela Sony Computer Entertainment a 24 de Março de 2015 em exclusivo para a PlayStation 4, sendo o quarto game da serie Souls. Bloodborne foi realizado por Hidetaka Miyazaki, diretor de Demon's Souls e Dark Souls.",
    nota: "92",
    video: "https://www.youtube.com/embed/-HXZmtYx60Y",
  },
  {
    nome: "A Plague Tale: Innocence",
    duracao: "12 hrs",
    genero: "ação e aventura,  furtividade, Survival horror",
    img: "https://w0.peakpx.com/wallpaper/749/338/HD-wallpaper-video-game-a-plague-tale-innocence-a-plague-tale-innocence-amicia-de-rune-hugo-de-rune.jpg",
    sinopse:
      "A Plague Tale: Innocence é um jogo eletrônico de ação-aventura e stealth desenvolvido pela Asobo Studio e publicado pela Focus Home Interactive. Foi lançado para Microsoft Windows, PlayStation 4 e Xbox One em 14 de maio de 2019 e recebeu críticas positivas através da crítica especializada.",
    nota: "81",
    video: "https://www.youtube.com/embed/FfgNBfOK0wo",
  },
  {
    nome: "guardiões da galáxia ",
    duracao: "20 hrs",
    genero: "ação e aventura, tiro",
    img: "https://img.elo7.com.br/product/zoom/421198F/papel-de-parede-guardioes-da-galaxia-papel-de-parede-autocolante.jpg",
    sinopse:
      "Guardians of the Galaxy é um jogo eletrônico de ação-aventura desenvolvido pela Eidos Montréal e publicado pela Square Enix. É baseado nos personagens, mitologia e adaptações em outras mídias do grupo de super-heróis de histórias em quadrinhos Guardiões da Galáxia da Marvel Comics.",
    nota: "80",
    video: "https://www.youtube.com/embed/Hh9vXojYq9A",
  },
];

const ListaJogos = jogos.map((c) => <Jogos jogos={c} />);

const Topjogos = () => {
  return (
    <Pages>
      <ul className="container">{ListaJogos}</ul>
      <Footer />
    </Pages>
  );
};

export default Topjogos;
