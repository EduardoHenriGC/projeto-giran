import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 18rem;

  .btn {
    background-color: #ddd;

    position: absolute;
    bottom: 10px;
    left: 50%;

    font-size: 2.4rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    :hover {
      background-color: #c9ca48;
      cursor: pointer;
    }
  }
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: #fafafa;
    font-size: 1.5rem;
    margin-left: 2.5rem;
  }

  ul {
    display: flex;

    width: 100%;

    margin: 0 auto;
    justify-content: center;
    align-items: center;

    li {
      background-color: blue;
      border-radius: 0.25rem;
      width: 25%;
      min-width: 270px;
      height: 220px;
      display: flex;
      text-align: center;
      position: relative;
      margin: 20px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 0.25rem;
        border: 3px solid #131e2f;
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
    background-color: #adbdce;
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

    span {
      font-size: 1.3rem;
      width: 90%;
      margin: 0;
    }

    h3 {
      text-transform: uppercase;
    }
  }
  .btn-close {
    font-size: 35px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    color: #fff;
    :hover {
      color: red;
    }
  }
  .left-section {
    width: 35%;
    height: 450px;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    font-size: 1.2rem;

    margin-left: 1rem;
    img {
      border-radius: 0.25rem;
      height: 100%;
      width: 100%;
    }
  }
  @media (min-width: 961px) and (max-width: 1100px) {
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

      margin-right: 25px;
    }
    li {
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 960px) {
    margin-top: 0;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    .modal-content {
      top: 80px;
      bottom: 0;
      right: 0;
      left: 0;
      border-radius: 0;
      border: none;
      display: flex;
      flex-direction: column;
    }

    ul {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 65vh;
      margin: 0;
    }
    li {
      align-items: center;
      justify-content: center;
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
      gap: 10px;
      justify-content: space-between;
      font-size: 1rem;
    }
  }
`;
