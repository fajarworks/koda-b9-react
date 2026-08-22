import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};
export const createTodoThunk = createAsyncThunk(
  "todo/createTodo",
  async (payload, { rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(payload);
        }, 3000);
      });
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // createTodo: (state, { payload }) => {
    //   state.todo?.push(payload);
    // },
    removeTodo: (state, { payload }) => {
      state.todo = state.todo.filter((e) => e.id !== payload);
    },
    toggleTodo: (state, { payload }) => {
      const todo = state.todo.find((e) => e.id === payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    return builder.addAsyncThunk(createTodoThunk, {
      pending: (state) => {
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
      },
      fulfilled: (state, { payload }) => {
        state.todo.push(payload);
        state.isPending = false;
        state.isFulfilled = true;
      },
      rejected: (state, { payload }) => {
        state.isPending = false;
        state.isRejected = true;
        state.error = payload;
      },
    });
  },
});

export const { removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
