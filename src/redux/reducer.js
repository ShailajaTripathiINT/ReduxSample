import { NAME } from "./action_type";

const initialState = { NAME: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME:
      return { ...state, NAME: "Redux-Sample1" };
    default:
      return state;
  }
};
export default reducer;