import React, { useEffect, useState } from "react";
import { ToolbarButton, ToolbarRoot } from "./styled";

function ToolBar() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <ToolbarRoot>
      <ToolbarButton
        onDragStart={(event) => onDragStart(event, "square")}
        draggable
      ></ToolbarButton>
    </ToolbarRoot>
  );
}

export default ToolBar;
