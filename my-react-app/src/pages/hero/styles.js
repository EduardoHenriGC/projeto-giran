import styled from "styled-components";
import bg from "../../assets/bg-goku.jpg";
import mk from "../../assets/bg-mk.jpg";

export const Heros = styled.div`
  .hero-menu {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
      url(${bg});
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

  @media (max-width: 600px) {
    .hero-menu {
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
        url(${mk});
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;
