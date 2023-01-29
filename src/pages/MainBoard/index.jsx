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
import Square from "../../components/nodes/Square";
import ToolBar from "../../components/ToolBar";
import { MainBoardWrapper } from "./styled";

const NODES_TYPES = {
  square: Square,
};

const EDGE_TYPES = {
  default: DefaultEdge,
};

const INITIAL_NODES = [
  {
    id: "1",
    type: "square",
    position: { x: 150, y: 25 },
    data: {},
  },
  {
    id: "2",
    type: "square",
    position: { x: 700, y: 125 },
    data: {},
  },
];
let id = 0;
const getId = () => `dndnode_${id++}`;

function MainBoard() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback((connection) => {
    return setEdges((edges) => addEdge(connection, edges));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // function addSquareNode(mousePosition) {
  //   console.log("buceta");
  //   const newNode = {
  //     id: `${nodes.length + 1}`,
  //     type: "square",
  //     position: { x: mousePosition.x, y: mousePosition.y },
  //     data: {},
  //   };

  //   setNodes((nodes) => [...nodes, newNode]);
  // }


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
        data: { },
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
            type: "default",
          }}
        >
          <Background variant="dots" gap={12} size={1} color="#d7dce1" />
          <Controls />
        </ReactFlow>
        <ToolBar />
      </MainBoardWrapper>
    </ReactFlowProvider>
  );
}

export default MainBoard;
