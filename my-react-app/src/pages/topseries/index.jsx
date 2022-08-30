import React from "react";
import Series from "./series";
import { Serie } from "./styles";
import Footer from "../../components/footer/index";

const series = [
  {
    nome: "Ruptura",
    duracao: "1 temporada",
    lancamento: "2022",
    genero: "drama",
    img: "https://cdn.mos.cms.futurecdn.net/AVzyBfXAWedDzXGgWGhhUY.jpg",
    sinopse:
      "Mark lidera uma equipe de funcionários cujas memórias foram cirurgicamente divididas entre vida profissional e pessoal. Quando uma misteriosa colega aparece fora do trabalho, ele começa uma jornada para descobrir a verdade sobre seu emprego.",
    nota: "92",
    video: "https://www.youtube.com/embed/W2FDCuAsAiM",
  },
  {
    nome: "The Sandman",
    duracao: "1 temporada",
    lancamento: "2022",
    genero: "drama, fantasia, horror",
    img: "https://ambrosia.com.br/wp-content/uploads/2022/08/sandman-serie-netflix-novidades-ambrosia.jpeg",
    sinopse:
      "Após anos aprisionado, Morpheus, o Rei dos Sonhos, embarca em uma jornada entre mundos para recuperar o que lhe foi roubado e restaurar seu poder.",
    nota: "78",
    video: "https://www.youtube.com/embed/fUg4xE-7LyM",
  },
  {
    nome: "Better Call Saul ",
    duracao: "6 temporadas",
    lancamento: "2015",
    genero: "drama",
    img: "https://img1.goodfon.com/wallpaper/nbig/b/a6/better-call-saul-luchshe-1211.jpg",
    sinopse:
      "Jimmy McGill, também como conhecido como Saul Goodman, tenta ser um homem honesto e construir uma carreira de respeito. Mas há um lado seu que só quer aplicar golpes e se tornar um advogado picareta.",
    nota: "89",
    video: "https://www.youtube.com/embed/zzy6wWjFONY",
  },
];

const ListaSeries = series.map((c) => <Series series={c} />);
const Topseries = () => {
  return (
    <Serie>
      <ul className="container">{ListaSeries}</ul>
      <Footer />
    </Serie>
  );
};

export default Topseries;
