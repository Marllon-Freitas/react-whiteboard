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

  .edgebutton {
  width: 20px;
  height: 20px;
  background: #eee;
  border: 1px solid #fff;
  cursor: pointer;
  border-radius: 50%;
  font-size: 12px;
  line-height: 1;
}

.edgebutton:hover {
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.08);
}

.edgebutton-foreignobject div {
  background: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
}
`;
