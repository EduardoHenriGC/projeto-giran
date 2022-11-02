import { React, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";

const BoxHero = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <li>
        <img src={props.recomendacao.img} alt="" />

        <IoMdAddCircleOutline
          onClick={() => {
            setModal(!modal);
          }}
          className="btn"
        />
      </li>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <div className="right-section">
              <h2>{props.recomendacao.nome}</h2>
              <span>{props.recomendacao.descricao}</span>
              <AiFillCloseCircle
                className="btn-close"
                onClick={() => setModal(!modal)}
              />
            </div>
            <div className="left-section">
              <img src={props.recomendacao.imgmodal} alt="" />
              <div className="left-info">
                {" "}
                <span>{props.recomendacao.ano}</span>
                <span>{props.recomendacao.duracao}</span>
                <span>{props.recomendacao.stream}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BoxHero;
