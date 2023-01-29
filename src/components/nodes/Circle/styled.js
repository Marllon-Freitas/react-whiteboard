import styled from "styled-components";

export const CircleWrapper = styled.div`
  min-width: 200px;
  min-height: 200px;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: #8049f4;

  .line {
    border: 1px solid #80caff;
  }

  &:first-child .handle-resize {
    width: 0.75rem;
    height: 0.75rem;
    background-color: #fff;
    border: 2px solid #80caff;
  }

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
