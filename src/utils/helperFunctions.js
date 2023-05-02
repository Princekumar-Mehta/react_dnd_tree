export const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const removeNode = (uid, items) => {
  for (const node of items) {
    if (node.uid === uid) {
      items.splice(items.indexOf(node), 1);
      return;
    }

    if (node.children && node.children.length) {
      removeNode(uid, node.children);
    }
  }
};

export const findItem = (uid, items) => {
  if (!items) return;
  for (const node of items) {
    if (node.uid === uid) return node;
    if (node.children && node.children.length) {
      const result = findItem(uid, node.children);
      if (result) {
        return result;
      }
    }
  }

  return false;
};
export const moveItem = (uid, afteruid, nodeuid, tree, setTree) => {
  if (uid === afteruid) return;

  let cloneTree = [...tree];

  const item = { ...findItem(uid, cloneTree) };
  if (!item.uid) {
    return;
  }

  const destination = nodeuid
    ? findItem(nodeuid, cloneTree).children
    : cloneTree;

  if (!afteruid) {
    removeNode(uid, cloneTree);
    destination.push(item);
  } else {
    const index = destination.indexOf(
      destination
        .filter((destinationItem) => destinationItem.uid === afteruid)
        .shift()
    );
    removeNode(uid, cloneTree);
    destination.splice(index, 0, item);
  }

  setTree(cloneTree);
};

export const moveDown = (nodeuid, parent, tree, setTree) => {
  let cloneTree = structuredClone(tree);
  let items;
  if (parent !== null) {
    items = findItem(parent, cloneTree).children;
  } else {
    items = cloneTree;
  }
  let item1 = findItem(nodeuid, cloneTree);
  let item1Index = items.indexOf(item1);
  if (item1Index === items.length - 1) return;
  let temp = items[item1Index];
  items[item1Index] = items[item1Index + 1];
  items[item1Index + 1] = temp;

  setTree(cloneTree);
};
export const moveUp = (nodeuid, parent, tree, setTree) => {
  const cloneTree = structuredClone(tree);

  let items;
  if (parent !== null) {
    items = findItem(parent, cloneTree).children;
  } else {
    items = cloneTree;
  }
  let item1 = findItem(nodeuid, cloneTree);
  let item1Index = items.indexOf(item1);
  if (item1Index === 0) return;
  let temp = items[item1Index];
  items[item1Index] = items[item1Index - 1];
  items[item1Index - 1] = temp;

  setTree(cloneTree);
};
export const toggleArea = (dropArea, setDropArea) => {
  setDropArea(!dropArea);
  return;
};
export const deleteItem = (nodeuid, parent, tree, setTree) => {
  let cloneTree = structuredClone(tree);
  let items = [];
  if (parent == null) {
    removeNode(nodeuid, cloneTree);
  } else {
    let parentNode = findItem(parent, cloneTree);
    removeNode(nodeuid, parentNode.children);
  }
  setTree(cloneTree);
};
export const addItem = (item, tree, setTree) => {
  let cloneTree = structuredClone(tree);
  cloneTree.push(item);
  setTree(cloneTree);
};
