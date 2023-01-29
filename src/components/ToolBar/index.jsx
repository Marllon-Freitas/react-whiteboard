import React from "react";
import { ToolbarButton, ToolbarRoot } from "./styled";

function ToolBar({ addSquareNode }) {
  return (
    <ToolbarRoot>
      <ToolbarButton onClick={addSquareNode}></ToolbarButton>
    </ToolbarRoot>
  );
}

export default ToolBar;
