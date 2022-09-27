import { createSlice } from "@reduxjs/toolkit";

const init = {
  jobs: [],
};

const toDoSlice = createSlice({
  name: "todo2",
  initialState: init,
  reducers: {
    add: (state, action) => {
      //=> todo/add
      state.jobs.push(action.payload);
    },

    remove: (state, action) => {
      state.jobs.splice(action.payload, 1);
    },

    complete: (state, action) => {
      state.jobs[action.payload.index].complete = action.payload.complete;
    },
  },
});

export const todoSelector = (state) => state.todo.jobs; //Tạo selector

export const {
  add: addToDo,
  remove: removeToDo,
  complete: completeToDo,
} = toDoSlice.actions;

export default toDoSlice.reducer; //Bắt buộc phải export reducer để store sử dụng
