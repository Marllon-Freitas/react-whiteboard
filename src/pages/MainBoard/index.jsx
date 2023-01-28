import { useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  useEdgesState,
  addEdge,
  ConnectionMode,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import DefaultEdge from "../../components/Edges/DefaultEdge";
import Square from "../../components/nodes/Square";
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

function MainBoard() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);

  const onConnect = useCallback((connection) => {
    return setEdges((edges) => addEdge(connection, edges));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainBoardWrapper>
      <ReactFlow
        nodeTypes={NODES_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        edges={edges}
        connectionMode={ConnectionMode.Loose}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        defaultEdgeOptions={{
          type: "default",
        }}
      >
        <Background variant="dots" gap={12} size={1} color="#d7dce1" />
        <Controls />
      </ReactFlow>
    </MainBoardWrapper>
  );
}

export default MainBoard;
