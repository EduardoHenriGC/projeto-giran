import React from "react";

const Jogos = (props) => {
  return (
    <li>
      <h2>{props.jogos.nome}</h2>
      <p></p>
      <p className="genero">{props.jogos.genero}</p>
      <div className="container-img">
        <img src={props.jogos.img} alt="" />
      </div>
      <div className="container-info">
        <span className="tempo">{props.jogos.duracao}</span>
        <p className="notacontent">
          nota: <span className="nota">{props.jogos.nota}</span>
        </p>
      </div>
      <br />
      <div className="container-sinopse">
        <span>
          <span className="color-pick">SINOPSE:</span> {props.jogos.sinopse}
        </span>
      </div>
      <div className="video-container">
        <iframe
          width="100%"
          height="100%"
          src={props.jogos.video}
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      </div>
    </li>
  );
};

export default Jogos;
