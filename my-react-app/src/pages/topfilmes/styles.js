import styled from "styled-components";

export const Filme = styled.div`
  .container {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: 0 auto;
    padding: 0;
  }
  .container-info {
    background-color: green;
  }
  .tempo {
    float: left;
    background-color: #333;
    color: #fff;
    padding: 8px;
    border-radius: 5px;
    margin-top: 10px;
  }
  img {
    width: 800px;
    box-shadow: 2px -1px 7px 9px rgba(0, 0, 0, 0.76);
    -webkit-box-shadow: 2px -1px 7px 9px rgba(0, 0, 0, 0.76);
    -moz-box-shadow: 2px -1px 7px 9px rgba(0, 0, 0, 0.76);
    border-radius: 0.25rem;
  }
  .container-sinopse {
    width: 800px;
    padding-top: 20px;
    padding-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    font-size: 1.4rem;
  }
  .container-img {
    width: 800px;
  }
  h2 {
    text-transform: uppercase;
    font-size: 2rem;
    text-align: center;
  }
  .color-pick {
    color: red;
    font-weight: 600;
  }
  .notacontent {
    float: right;
    font-weight: 600;
    text-transform: uppercase;
  }
  .nota {
    margin: 0;
    background-color: green;
    padding: 8px;
    border-radius: 50%;
    color: gold;
  }
  .genero {
    display: flex;
    align-items: flex-start;

    font-size: 1.2rem;
  }

  .video-container {
    height: 400px;
    width: 700px;
    margin: 0 auto;
    padding-bottom: 150px;
  }

  @media (max-width: 900px) {
    .container {
      align-items: center;
    }
    .tempo {
      width: 111px;

      margin-top: 8px;
    }
    .video-container {
      width: 98%;
      height: 270px;
      margin: 0 auto;
    }
    .container-info {
      width: 90%;
      margin: 0 auto;
    }
    .container-img {
      width: 100%;
      margin: 0 auto;
    }
    img {
      width: 90%;
    }
    h2 {
      font-size: 1.6rem;
      text-align: center;
      padding-top: 50px;
    }
    span {
      font-size: 1.1rem;
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }

    .container-sinopse {
      width: 90%;
      margin: 0 auto;
      text-align: center;
    }
    .genero {
      margin-left: 28px;
    }
  }
`;
