import { ADD_TASK, DELETE_TASK, GET_TASK, UPDATE_TASK } from "../actions/types";

const initialState = {
  tasks: [],
};

export default function r_tasks(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TASK:
      return {
        ...state,
        tasks: payload,
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? payload : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter((todo) => todo.id !== payload)],
      };

    default:
      return state;
  }
}
