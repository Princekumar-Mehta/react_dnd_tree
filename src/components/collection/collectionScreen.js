import React, { useState } from "react";
import { COLLECTION_TREE } from "../../utils/constants";
import CollectionTree from "./collectionTree";

function CollectionScreen() {
  const [tree, setTree] = useState(COLLECTION_TREE);
  return (
    <div>
      <CollectionTree items={tree} />
    </div>
  );
}

export default CollectionScreen;
