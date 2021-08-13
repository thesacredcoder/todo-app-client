import * as api from "../api";
import { CREATE, DELETE, FETCH_ALL, UPDATE } from "../constants/actionTypes";

export const getTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTasks();

    const action = { type: FETCH_ALL, payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};

export const createTask = (task) => async (dispatch) => {
  try {
    const { data } = await api.createTask(task);

    const action = { type: CREATE, payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await api.deleteTask(id);

    const action = { type: DELETE, payload: id };
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};

export const updatedTask = (id, task) => async (dispatch) => {
  try {
    const { data } = await api.updateTask(id, task);

    const action = { type: UPDATE, payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};
