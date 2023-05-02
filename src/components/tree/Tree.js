import Item from "./Item";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/itemTypes";
import {
  findItem,
  moveDown,
  moveUp,
  moveItem,
} from "../../utils/helperFunctions";
import { TreeContext, SetTreeContext } from "../../utils/context";
import { useContext } from "react";
export default function Tree({ items, parent }) {
  const tree = useContext(TreeContext);
  const setTree = useContext(SetTreeContext);
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ITEM,
    drop: (props, monitor) => {},
    hover: (props, monitor) => getMoving(props, monitor),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  function getMoving(props, monitor) {
    if (!monitor.isOver({ shallow: true })) return;
    const descendantNode = findItem(parent, props.children);
    if (descendantNode) return;
    if (props.parent === parent || props.uid === parent) return;

    moveItem(props.uid, undefined, parent, tree, setTree);
  }

  if (!items) return null;

  return (
    <div
      ref={drop}
      style={{
        position: "relative",
        minHeight: 10,
        paddingTop: 10,
        marginTop: -11,
        marginLeft: "2em",
        width: 300,
        backgroundColor: isOver ? "lightgreen" : "white",
      }}
    >
      {items.map((item, i) => {
        return (
          <Item key={item.uid} uid={item.uid} parent={parent} item={item} />
        );
      })}
    </div>
  );
}
