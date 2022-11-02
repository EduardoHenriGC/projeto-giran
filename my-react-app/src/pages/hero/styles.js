import styled from "styled-components";

export const Heros = styled.div`
  .hero-menu {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),
      url("https://images4.alphacoders.com/119/1194463.jpg");
    background-position: top;
    background-size: cover;

    height: 91vh;
    width: 100%;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
  }
  h1 {
    color: #fff;

    font-size: 2.6rem;

    text-align: center;
  }
  h2 {
    font-size: 2rem;

    color: #ccc;
  }
  .gradient {
    color: red;
  }

  .gradient:hover {
    background-image: linear-gradient(to bottom, yellow, red, yellow);

    background-clip: text;
    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;

    color: black;
  }

  p {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.1;
    text-align: center;
  }

  @media (max-width: 800px) {
    .hero-menu {
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
        url("https://i0.wp.com/techwek.com/wp-content/uploads/2021/10/top-papel-de-parede-masculino.jpg?fit=564%2C1002&ssl=1");
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
    }
  }
`;
