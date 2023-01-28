import React from "react";
import { NodeProps, Handle, Position } from "reactflow";
import { SquareWrapper } from "./styled";

function Square(NodeProps) {
  return (
    <SquareWrapper>
      <Handle
        id="right"
        className="handle handle--right"
        position={Position.Right}
        type="source"
      />
      <Handle
        id="left"
        className="handle handle--left"
        position={Position.Left}
        type="source"
      />
      <Handle
        id="top"
        className="handle handle--top"
        position={Position.Top}
        type="source"
      />
      <Handle
        id="bottom"
        className="handle handle--bottom"
        position={Position.Bottom}
        type="source"
      />
    </SquareWrapper>
  );
}

export default Square;
