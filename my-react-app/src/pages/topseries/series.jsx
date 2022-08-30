import React from "react";

const Series = (props) => {
  return (
    <li>
      <h2>{props.series.nome}</h2>
      <p></p>
      <p className="genero">{props.series.genero}</p>
      <div className="container-img">
        <img src={props.series.img} alt="" />
      </div>
      <div className="container-info">
        <span className="tempo">{props.series.duracao}</span>
        <p className="notacontent">
          nota: <span className="nota">{props.series.nota}</span>
        </p>
      </div>
      <br />
      <div className="container-sinopse">
        <span>
          <span className="color-pick">SINOPSE:</span> {props.series.sinopse}
        </span>
      </div>
      <div className="video-container">
        <iframe
          width="100%"
          height="100%"
          src={props.series.video}
          title="YouTube video player"
          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </li>
  );
};

export default Series;
