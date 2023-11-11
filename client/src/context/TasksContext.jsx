import { useState, createContext, useContext } from "react";
import {
  createTasksRequest,
  getTasksRequest,
  getTaskRequest,
  deleteTaskRequest,
  editTaskRequest,
} from "../api/tasks";

const TaksContext = createContext();

//uso de contexto
export const useTasks = () => {
  const context = useContext(TaksContext);
  if (!context)
    throw new Error("useTasks must be used withing an AuthProvider");
  return context;
};

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState([]);

  //crea task
  const createTask = async (task) => {
    try {
      await createTasksRequest(task);
    } catch (error) {
      console.log(error);
      Array.isArray(error.response.data)
        ? setErrors(error.response.data)
        : setErrors([error.response.data.message]);
      return;
    }
  };

  //trae task
  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      if (res.status === 200) return res.data;
    } catch (error) {
      Array.isArray(error.response.data)
        ? setErrors(error.response.data)
        : setErrors([error.response.data.message]);
      return;
    }
  };

  //trae tasks
  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      if (res.status === 200) return setTasks(res.data);
    } catch (error) {
      Array.isArray(error.response.data)
        ? setErrors(error.response.data)
        : setErrors([error.response.data.message]);
      return;
    }
  };

  //elimina task
  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status === 204)
        return setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      Array.isArray(error.response.data)
        ? setErrors(error.response.data)
        : setErrors([error.response.data.message]);
      return;
    }
  };

  //edita task
  const editTask = async (task) => {
    try {
      const res = await editTaskRequest(task);
      console.log(res);
    } catch (error) {
      Array.isArray(error.response.data)
        ? setErrors(error.response.data)
        : setErrors([error.response.data]);
      return;
    }
  };

  return (
    <TaksContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        getTask,
        deleteTask,
        editTask,
        errors,
      }}
    >
      {children}
    </TaksContext.Provider>
  );
}
