import styled from "styled-components";

export const MainBoardWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1E272E;

  .react-flow__edge-path {
    stroke-width: 1.5px;
    stroke: #fff;
  }

  .react-flow__edge-path.dotted-edge {
    stroke-dasharray: 5 5;
  }
`;
