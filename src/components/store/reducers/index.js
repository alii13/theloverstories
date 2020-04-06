import { projectsRef } from "../../config/fbconfig";
const FETCH_TODOS = "CREATE_PROJECT";
export const addToDo = newToDo => async dispatch => {
  projectsRef.push().set(newToDo);
};
