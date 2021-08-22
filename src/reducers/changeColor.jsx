const initialState = [
  {
    id: 1,
    color: "#5E4FDB",
  },
  {
    id: 2,
    color: "#F3F2FC",
  },
  {
    id: 3,
    color: "#1ABC9C",
  },
  {
    id: 4,
    color: "#D64B4B",
  },
  {
    id: 5,
    color: "#852121",
  },
  {
    id: 6,
    color: "#C06801",
  },
  {
    id: 7,
    color: "#FFF7E3",
  },
  {
    id: 8,
    color: "#0E4316",
  },
  {
    id: 9,
    color: "#E1EFE1",
  },
  {
    id: 10,
    color: "#000000",
  },
  {
    id: 11,
    color: "#FFFFFF",
  },
  {
    id: 12,
    color: "#808080",
  },
  {
    id: 13,
    color: "#D8D8D8",
  },
  {
    id: 14,
    color: "#F0F0F0",
  },
  {
    id: 15,
    color: "#F6F6F6",
  },
];
const changeColor = (state = initialState, action) => {
  switch (action.type) {
    case "CLICKED":
      return state;
    default:
      return state;
  }
};

export default changeColor;
