import React from "react";

const Lista = (props) => {
  return (
    <li>
      <h2>{props.filmes.nome}</h2>
      <p></p>
      <p className="genero">{props.filmes.genero}</p>
      <div className="container-img">
        <img src={props.filmes.img} alt="" />
      </div>
      <div className="container-info">
        <span className="tempo">{props.filmes.duracao}</span>
        <p className="notacontent">
          nota: <span className="nota">{props.filmes.nota}</span>
        </p>
      </div>

      <br />
      <div className="container-sinopse">
        <span>
          <span className="color-pick">SINOPSE:</span> {props.filmes.sinopse}
        </span>
      </div>
      <div className="video-container">
        <iframe
          width="100%"
          height="100%"
          src={props.filmes.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </li>
  );
};

export default Lista;
