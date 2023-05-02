import React, { useContext } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/itemTypes";
import { uuidv4 } from "../../utils/helperFunctions";
import { addItem } from "../../utils/helperFunctions";

import { TreeContext, SetTreeContext } from "../../utils/context";
const DropArea = () => {
  const tree = useContext(TreeContext);
  const setTree = useContext(SetTreeContext);
  const updateuIds = (cloneItem) => {
    cloneItem.uid = uuidv4();
    cloneItem.children.forEach((item) => {
      updateuIds(item);
    });
  };
  const [, drop] = useDrop({
    accept: ItemTypes.NEW_ITEM,
    canDrop: false,
    hover: (draggedItem, monitor) => {
      if (!monitor.isOver({ shallow: true })) return;
      let cloneItem = structuredClone(draggedItem.item);
      updateuIds(cloneItem);
      addItem(cloneItem, tree, setTree);
    },
  });
  return <div ref={drop} className="dropArea"></div>;
};

export default DropArea;
