import { useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/itemTypes";
import CollectionItem from "./collectionItem";

export default function CollectionTree({ items }) {
  if (!items) return null;

  return (
    <div
      style={{
        position: "relative",
        minHeight: 10,
        paddingTop: 10,
        marginTop: -11,
        marginLeft: "2em",
        width: 300,
      }}
    >
      {items.map((item, i) => {
        return <CollectionItem key={item.uid} id={item.uid} item={item} />;
      })}
    </div>
  );
}
