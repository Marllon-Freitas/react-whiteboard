import styled from "styled-components";

export const SquareWrapper = styled.div`
  width: 250px;
  height: 250px;
  background-color: #8049f4;

  .handle {
    background-color: #80caff;
    opacity: 0.8;
    border: none;
    transition: all 0.2s ease;
    width: 0.5rem;
    height: 0.5rem;
  }

  .handle:hover {
    opacity: 1;
  }
  .handle.react-flow__handle-right {
    margin-right: -1rem;
  }

  .handle.react-flow__handle-left {
    margin-left: -1rem;
  }
  .handle.react-flow__handle-top {
    margin-top: -1rem;
  }
  .handle.react-flow__handle-bottom {
    margin-bottom: -1rem;
  }
`;
