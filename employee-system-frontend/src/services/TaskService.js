import axios from "axios"

const TASK_REST_API_URL = 'http://localhost:8080/api/tasks'
  
export const getAllTasks = () => axios.get(TASK_REST_API_URL)

export const createTask = (task) => axios.post(TASK_REST_API_URL, task)

export const getTask = (id) => axios.get(TASK_REST_API_URL + '/' + id)

export const updateTask = (id, task) => axios.put(TASK_REST_API_URL + '/' + id, task)

export const deleteTask = (id) => axios.delete(TASK_REST_API_URL + '/' + id)

export const finishedTask = (id) => axios.patch(TASK_REST_API_URL + '/' + id + '/finished')

export const unfinishedTask = (id) => axios.patch(TASK_REST_API_URL + '/' + id + '/unfinished')