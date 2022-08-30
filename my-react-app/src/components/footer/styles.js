import styled from "styled-components";

export const Footercss = styled.div`
  background-color: #333;
  padding: 10px;
  margin-top: 100px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .lista {
    margin: 4px;
  }
  span {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
