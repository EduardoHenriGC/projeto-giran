import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 18rem;

  .btn {
    color: #fff;
    position: absolute;
    bottom: 10px;
    left: 40%;

    font-size: 2.4rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    :hover {
      background-color: #fff;
      color: #222;
      cursor: pointer;
    }
  }

  h3 {
    text-transform: uppercase;
    font-size: 1.4rem;
    color: #fff;
  }

  ul {
    display: flex;

    width: 100%;

    margin: 0 auto;
    justify-content: center;
    align-items: center;

    li {
      border-radius: 0.25rem;

      width: 350px;
      height: 220px;
      display: flex;

      text-align: center;
      position: relative;
      margin: 20px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 0.25rem;
        border: 2px solid #131e2f;
      }
    }
  }

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
  }
  .modal-content {
    background-color: #fff;
    position: fixed;
    z-index: 1;
    top: 20%;
    bottom: 20%;
    right: 20%;
    left: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
  }
  .right-section {
    width: 65%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    h2 {
      text-align: center;
      text-transform: uppercase;
      color: red;
      font-size: 1.3rem;
    }

    span {
      font-size: 1.3rem;
      width: 90%;
      margin: 0;
    }
  }
  .btn-close {
    font-size: 35px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    color: #111;
    :hover {
      color: red;
    }
  }
  .left-section {
    width: 35%;
    height: 350px;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    font-size: 1.2rem;

    margin-right: 1rem;
    img {
      border-radius: 0.25rem;
      height: 100%;
      width: 100%;
    }
  }
  .left-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    font-size: 1.1rem;
  }
  @media (min-width: 900px) and (max-width: 1100px) {
    width: 100%;
    .modal-content {
      top: 20%;
      bottom: 20%;
      right: 10%;
      left: 10%;
    }
    ul {
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0;
      margin-right: 30px;

      li {
        align-items: center;
        justify-content: center;
      }
    }
  }
  @media (max-width: 900px) {
    margin-top: 0;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    .modal-content {
      z-index: 1;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      border-radius: 0;
      border: none;
      display: flex;
      flex-direction: column;
      padding: 2rem 0;
    }
    .btn-close {
      font-size: 40px;
      left: 20px;
      top: 20px;
    }
    ul {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100vw;

      margin: 0;

      li {
        align-items: center;
        justify-content: center;
        height: 140px;
        width: 250px;
        img {
          margin-right: 35px;
        }
      }
    }
    .btn {
      left: 35%;
      font-size: 33px;
    }
    .right-section {
      height: 70vh;
      width: 100%;
      margin: 0 auto;
      span {
        width: 96%;
      }
    }
    .left-section {
      height: 30vh;
      width: 70%;
      margin: 0 auto;
      margin-top: 40px;
    }
    .left-info {
      display: flex;
      flex-direction: row;
      gap: 10px;
      justify-content: space-between;
      font-size: 1rem;
      margin-bottom: 40px;
    }
  }
  @media (max-width: 768px) {
    h3 {
      display: none;
    }
  }
`;
