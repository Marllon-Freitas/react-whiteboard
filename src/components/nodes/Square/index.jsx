import React from "react";
import { NodeResizer, NodeResizeControl } from "@reactflow/node-resizer";
import "@reactflow/node-resizer/dist/style.css";
import { NodeProps, Handle, Position } from "reactflow";
import { SquareWrapper } from "./styled";
import "@reactflow/node-resizer/dist/style.css";

function Square({ selected }) {
  return (
    <SquareWrapper>
      <NodeResizer
        minWidth={200}
        minHeight={200}
        isVisible={selected}
        lineClassName="line"
        handleClassName="handle-resize"

      />
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
