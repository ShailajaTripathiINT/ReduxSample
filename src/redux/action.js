import { NAME } from "./action_type";
export const changeName = (update) => {
  return {
    type: NAME,
    payload: update ,
  };
};