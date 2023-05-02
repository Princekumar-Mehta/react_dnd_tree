import Tree from "./Tree";
import { ItemTypes } from "../../utils/itemTypes";
import { useDrag, useDrop, dropSouce, droptarget } from "react-dnd";
import Details from "../visuals/Details";
import Button from "../visuals/Button";

import { TreeContext, SetTreeContext } from "../../utils/context";
import {
  moveItem,
  moveDown,
  deleteItem,
  moveUp,
} from "../../utils/helperFunctions";
import { useContext } from "react";

export default function Item({ parent, item }) {
  const tree = useContext(TreeContext);
  const setTree = useContext(SetTreeContext);
  const [, drop] = useDrop({
    accept: ItemTypes.ITEM,
    canDrop: false,
    hover: (draggedItem, monitor) => {
      if (draggedItem.uid === item.uid || draggedItem.uid === parent) return;
      if (!monitor.isOver({ shallow: true })) return;

      moveItem(draggedItem.uid, item.uid, parent, tree, setTree);
    },
  });

  const [, drag, preview] = useDrag({
    type: ItemTypes.ITEM,
    item: {
      id: item.id,
      uid: item.uid,
      parent,
      children: item.children,
    },
    isDragging: (monitor) => item.uid === monitor.getItem().uid,
  });

  return (
    <div ref={drop}>
      <div ref={preview}>
        <div className="item" ref={drag}>
          <Details id={item.id} uid={item.uid} title={item.title} />

          <Button
            onClick={() => {
              moveUp(item.uid, parent, tree, setTree);
            }}
          >
            UP
          </Button>
          <Button
            onClick={() => {
              moveDown(item.uid, parent, tree, setTree);
            }}
          >
            DOWN
          </Button>
          <Button
            onClick={() => {
              deleteItem(item.uid, parent, tree, setTree);
            }}
          >
            DELETE
          </Button>
        </div>
        <Tree parent={item.uid} items={item.children} />
      </div>
    </div>
  );
}
