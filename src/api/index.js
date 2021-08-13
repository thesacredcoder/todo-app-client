import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/tasks",
  baseURL: "https://the-todo-app-akash.herokuapp.com/tasks",
});

export const fetchTasks = () => API.get("/");
export const createTask = (newTask) => API.post("/", newTask);
export const deleteTask = (id) => API.delete(`/${id}`);
export const updateTask = (id, updatedTask) => API.patch(`/${id}`, updatedTask);
