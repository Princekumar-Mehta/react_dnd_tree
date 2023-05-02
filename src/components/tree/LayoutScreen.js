import { useState } from "react";
import CollectionScreen from "../collection/collectionScreen";
import Tree from "../tree/Tree";
import DropArea from "../visuals/DropArea";
import { INITIAL_TREE } from "../../utils/constants";
import { removeNode, findItem, toggleArea } from "../../utils/helperFunctions";
import { SetTreeContext, TreeContext } from "../../utils/context";
/**
 *
 * ADOPTED FROM HERE
 * https://github.com/tamagokun/example-react-dnd-nested
 *
 */

export default function LayoutScreen() {
  const [tree, setTree] = useState(INITIAL_TREE);

  const [dropArea, setDropArea] = useState(false);

  return (
    <TreeContext.Provider value={tree}>
      <SetTreeContext.Provider value={setTree}>
        <div className="App">
          <div className="split left">
            <CollectionScreen />
          </div>
          <div className="split right">
            <Tree parent={null} items={tree} />
            {dropArea ? <DropArea /> : <></>}
            <button onClick={() => toggleArea(dropArea, setDropArea)}>
              Add item
            </button>
          </div>
        </div>
      </SetTreeContext.Provider>
    </TreeContext.Provider>
  );
}
