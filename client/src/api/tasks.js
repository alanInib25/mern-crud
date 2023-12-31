import axios from "./axios";

export const createTasksRequest = (task) => axios.post("/tasks", task);
export const getTasksRequest = () => axios.get("/tasks");
export const getTaskRequest = (id) => axios.get(`/tasks/${id}`);
export const editTaskRequest = (task) => axios.put(`/tasks/${task.id}`, task);
export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`);
