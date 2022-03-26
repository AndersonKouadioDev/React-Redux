import axios from "axios";
import { GET_TASK, ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./types";

const DB_LINK = "http://localhost:8000/tasks";

export const getTask = () => (dispatch) => {
  axios
    .get(DB_LINK)
    .then((res) => {
      dispatch({
        type: GET_TASK,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const addTask = (task) => (dispatch) => {
  axios
    .post(DB_LINK, task)
    .then((res) => {
      dispatch({
        type: ADD_TASK,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const updateTask = (id, task) => (dispatch) => {
  axios
    .put(DB_LINK + `/${id}`, task)
    .then((res) => {
      dispatch({
        type: UPDATE_TASK,
        payload: res.data,
      });
    })
    .catch((err) => console.log("ERREUR: ",err));
};

export const deleteTask = (id) => (dispatch) => {
  axios
    .delete(DB_LINK + `/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
