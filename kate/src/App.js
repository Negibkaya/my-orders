import React, { useState, useRef } from "react";
import Tree from "react-d3-tree";
import "./App.css";

// Пример объектной модели
const initialData = {
  name: "Top Reason",
  attributes: { type: "reason" },
  children: [
    {
      name: "Failure 1",
      attributes: { type: "failure" },
      children: [
        { name: "Sign A", attributes: { type: "sign" } },
        { name: "Sign B", attributes: { type: "sign" } },
      ],
    },
    {
      name: "Failure 2",
      attributes: { type: "failure" },
      children: [{ name: "Sign C", attributes: { type: "sign" } }],
    },
  ],
};

// Кастомные стили для узлов дерева
const getNodeStyle = (type) => ({
  shape: type === "reason" ? "rect" : type === "failure" ? "rect" : "circle",
  shapeProps: {
    width: type === "reason" ? 120 : 80,
    height: type === "reason" ? 40 : 40,
    r: type === "sign" ? 20 : 0,
    fill:
      type === "reason"
        ? "lightgrey"
        : type === "failure"
        ? "lightblue"
        : "lightgreen",
    strokeDasharray: type === "reason" ? "5,5" : null,
  },
});

const App = () => {
  const [data, setData] = useState(initialData);
  const treeContainerRef = useRef();

  const renderCustomNode = ({ nodeDatum, toggleNode }) => {
    const { shape, shapeProps } = getNodeStyle(nodeDatum.attributes.type);

    return (
      <g>
        {shape === "rect" && (
          <rect
            {...shapeProps}
            x={-shapeProps.width / 2}
            y={-shapeProps.height / 2}
          />
        )}
        {shape === "circle" && <circle {...shapeProps} />}
        <text x="0" y="0" textAnchor="middle" alignmentBaseline="middle">
          {nodeDatum.name}
        </text>
      </g>
    );
  };

  // Функция добавления узла
  const addNode = (name, parentName, type) => {
    const findAndAddNode = (node) => {
      if (node.name === parentName) {
        const newNode = { name, attributes: { type } };
        node.children = node.children ? [...node.children, newNode] : [newNode];
        return true;
      }
      if (node.children) {
        return node.children.some(findAndAddNode);
      }
      return false;
    };

    const updatedData = JSON.parse(JSON.stringify(data));
    if (findAndAddNode(updatedData)) {
      setData(updatedData);
    }
  };

  const handleAddNode = () => {
    const name = prompt("Название нового узла:");
    const parent = prompt("Родительский узел:");
    const type = prompt("Тип (reason, failure, sign):");
    if (name && parent && type) {
      addNode(name, parent, type);
    }
  };

  return (
    <div className="App">
      <button onClick={handleAddNode}>Добавить узел</button>
      <div style={{ width: "100%", height: "500px" }} ref={treeContainerRef}>
        <Tree
          data={data}
          renderCustomNodeElement={renderCustomNode}
          orientation="vertical"
          pathFunc="straight"
          nodeSize={{ x: 180, y: 180 }}
          translate={{ x: 200, y: 100 }}
        />
      </div>
    </div>
  );
};

export default App;
