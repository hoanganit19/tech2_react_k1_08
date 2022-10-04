import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../config.json";

const { SERVER_API } = config;

const todoApi = SERVER_API + "/todos";

const init = {
  jobs: [],
  loading: "idle",
};

const toDoSlice = createSlice({
  name: "todo", //tương ứng với tên tính năng
  initialState: init,
  // reducers: {
  //   add: (state, action) => {
  //     //=> todo2/add
  //     state.jobs.push(action.payload);
  //   },

  //   remove: (state, action) => {
  //     state.jobs.splice(action.payload, 1);
  //   },

  //   complete: (state, action) => {
  //     state.jobs[action.payload.index].complete = action.payload.complete;
  //   },
  // },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.jobs = action.payload;
        state.loading = "idle";
      })
      .addCase(fetchAddTodo.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      })
      .addCase(fetchDeleteTodo.fulfilled, (state, action) => {
        state.jobs = action.payload;
      })
      .addCase(fetchCompleteTodo.fulfilled, (state, action) => {
        state.jobs = action.payload;
      })
      .addCase(fetchFilterTodos.fulfilled, (state, action) => {
        state.jobs = action.payload;
      });
  },
});

export const todoSelector = (state) => state.todo.jobs; //Tạo selector => UI gọi useSelector

export const todoLoadingSelector = (state) => state.todo.loading;

export const {
  add: addToDo,
  remove: removeToDo,
  complete: completeToDo,
} = toDoSlice.actions; //Import vào UI để dispatch

//Middleware
// export const thunkFunction = (todo) => {
//   return function(dispatch, getState){
//     //console.log(todo);
//     //console.log(getState());
//     todo.name+=' - Update';
//     dispatch(addToDo(todo));
//   }
// }

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await fetch(todoApi);
  const data = await response.json();

  return data;
});

export const fetchAddTodo = createAsyncThunk(
  "todo/fetchAddTodo",
  async (todo) => {
    const response = await fetch(todoApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    const data = await response.json();

    return data;
  }
);

export const fetchDeleteTodo = createAsyncThunk(
  "todo/fetchDeleteTodo",
  async (id) => {
    const response = await fetch(todoApi + "/" + id, {
      method: "DELETE",
    });

    const deleteStatus = await response.json();

    if (typeof deleteStatus === "object") {
      const response = await fetch(todoApi);
      const data = await response.json();
      return data;
    }
  }
);

export const fetchCompleteTodo = createAsyncThunk(
  "todo/fetchCompleteTodo",
  async (payload) => {
    const { id, status } = payload;
    const response = await fetch(todoApi + "/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complete: status,
      }),
    });

    const updateStatus = await response.json();

    if (typeof updateStatus === "object") {
      const response = await fetch(todoApi);
      const data = await response.json();
      return data;
    }
  }
);

export const fetchFilterTodos = createAsyncThunk(
  "todo/fetchFilterTodos",
  async (keyword) => {
    
    const response = await fetch(todoApi + "/?q=" + keyword, );

    const data = await response.json();

    return data;
  }
);

export default toDoSlice.reducer; //Bắt buộc phải export reducer để store sử dụng
