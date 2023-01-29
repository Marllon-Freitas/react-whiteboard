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
        className="square"
        onDragStart={(event) => onDragStart(event, "square")}
        draggable
      ></ToolbarButton>
      <ToolbarButton
        className="circle"
        onDragStart={(event) => onDragStart(event, "circle")}
        draggable
      ></ToolbarButton>
    </ToolbarRoot>
  );
}

export default ToolBar;
