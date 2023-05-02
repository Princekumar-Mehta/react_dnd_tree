import { ItemTypes } from "../../utils/itemTypes";
import { useDrag, useDrop } from "react-dnd";
import CollectionTree from "./collectionTree";
import Details from "../visuals/Details";

export default function CollectionItem({ item }) {
  const [, drag, preview] = useDrag({
    type: ItemTypes.NEW_ITEM,
    item: {
      item,
    },
    isDragging: (monitor) => item.uid === monitor.getItem().uid,
  });

  return (
    <div>
      <div>
        <div
          ref={drag}
          style={{
            background: "#f5f5f5",
            border: "1px solid #ccc",
            padding: "1em",
            marginBottom: -1,
          }}
        >
          <Details id={item.id} uid={item.uid} title={item.title} />
        </div>

        <CollectionTree items={item.children} />
      </div>
    </div>
  );
}
