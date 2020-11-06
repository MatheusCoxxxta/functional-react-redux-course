import { useReducer } from "react";

const INITIAL_STATE = {
  result: "",
};

const sumReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SUM":
      return { ...state, result: action.payload };
    case "SUB":
      return { ...state, result: action.payload };
    default:
      return state;
  }
};

const useStore = () => useReducer(sumReducer, INITIAL_STATE);
export default useStore;
