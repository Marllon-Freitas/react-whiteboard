import styled from "styled-components";

import * as Toolbar from "@radix-ui/react-toolbar";

export const ToolbarRoot = styled(Toolbar.Root)`
  height: 80px;
  width: 100%;
  max-width: 384px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.6);
  padding: 1rem;
  overflow: hidden;
`;

export const ToolbarButton = styled(Toolbar.Button)`
  height: 8rem;
  width: 8rem;
  border-radius: 0.5rem;
  background-color: #8049f4;
  margin-top: 1.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-2rem);
  }
`;
