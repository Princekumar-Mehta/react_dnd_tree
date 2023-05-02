import { uuidv4 } from "./helperFunctions";

export const INITIAL_TREE = [
  {
    id: 1,
    uid: uuidv4(),
    title: "Tatooine",
    children: [
      { id: 2, uid: uuidv4(), title: "Endor", children: [] },
      { id: 3, uid: uuidv4(), title: "Hoth", children: [] },
    ],
  },
  {
    id: 5,
    uid: uuidv4(),
    title: "Death Star",
    children: [],
  },
];

export const COLLECTION_TREE = [
  {
    id: 1,
    uid: uuidv4(),
    title: "Agra",
    children: [
      { id: 2, uid: uuidv4(), title: "New Delhi", children: [] },
      { id: 3, uid: uuidv4(), title: "Mumbai", children: [] },
      { id: 4, uid: uuidv4(), title: "Rajasthan", children: [] },
    ],
  },
  {
    id: 5,
    uid: uuidv4(),
    title: "Rishikesh",
    children: [],
  },
  {
    id: 6,
    uid: uuidv4(),
    title: "Varanasi",
    children: [
      {
        id: 7,
        uid: uuidv4(),
        title: "Amritsar",
        children: [{ id: 8, uid: uuidv4(), title: "Goa", children: [] }],
      },
    ],
  },
];
