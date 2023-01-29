import { useCallback, useRef, useState } from "react";
import ReactFlow, {
  Controls,
  Background,
  useEdgesState,
  addEdge,
  ConnectionMode,
  useNodesState,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import DefaultEdge from "../../components/Edges/DefaultEdge";
import DottedEdge from "../../components/Edges/DottedEdge";
import Circle from "../../components/nodes/Circle";
import Square from "../../components/nodes/Square";
import ToolBar from "../../components/ToolBar";
import { MainBoardWrapper } from "./styled";

const NODES_TYPES = {
  square: Square,
  circle: Circle,
};

const EDGE_TYPES = {
  default: DefaultEdge,
  dotted: DottedEdge,
};

let id = 0;
const getId = () => `dndnode_${id++}`;

function MainBoard() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [edgesTypes, setEdgesTypes] = useState("dotted");

  const onConnect = useCallback((connection) => {
    console.log("onConnect", connection);
    return setEdges((edges) => addEdge(connection, edges));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: {},
      };

      setNodes((nds) => nds.concat(newNode));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [reactFlowInstance]
  );

  return (
    <ReactFlowProvider>
      <MainBoardWrapper ref={reactFlowWrapper}>
        <ReactFlow
          nodeTypes={NODES_TYPES}
          edgeTypes={EDGE_TYPES}
          nodes={nodes}
          edges={edges}
          connectionMode={ConnectionMode.Loose}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodesChange={onNodesChange}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          defaultEdgeOptions={{
            type: edgesTypes,
          }}
          snapToGrid={true}
        >
          <Background variant="dots" gap={12} size={1} color="#3b444b" />
          <Controls />
        </ReactFlow>
        <ToolBar />
      </MainBoardWrapper>
    </ReactFlowProvider>
  );
}

export default MainBoard;
