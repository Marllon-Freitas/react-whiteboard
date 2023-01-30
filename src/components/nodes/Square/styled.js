import styled from "styled-components";

export const SquareWrapper = styled.div`
  min-width: 200px;
  min-height: 200px;
  width: 100%;
  height: 100%;
  background-color: #8049f4;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  .square-input-wrapper input,
  .square-input-wrapper .square-input-wrapper-text {
    min-height: 2rem;
    border: none;
    border-radius: 5px;
    outline: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-color: transparent;
    text-align: center;
    color: #fff;
    font-size: 1rem;
  }
  
  .square-input-wrapper input {
    width: 100%;
  }
`;
