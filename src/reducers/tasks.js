import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/actionTypes";

const tasks = (tasks = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...tasks, action.payload];
    case DELETE:
      return tasks.filter((task) => task._id !== action.payload);
    case UPDATE:
      return tasks.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );
    default:
      return tasks;
  }
};

export default tasks;
