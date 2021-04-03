import { CONSTANTS } from ".";
import uuid from "uuidv4";

export const addList = (title) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title,
  };
};
