import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state for counter
const initialData = { counter: 0, showCounter: true };

// Counter slice
const Counter = createSlice({
  name: "counter",
  initialState: initialData,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Initial state for auth
const initialAuthData = {
  isAuthenticated: false,
};

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthData,
  reducers: {
    login(state) {
      state.isAuthenticated = true; // Fixing the state update logic
    },
    logOut(state) {
      state.isAuthenticated = false; // Fixing the state update logic
    },
  },
});

// Store configuration
const store = configureStore({
  reducer: {
    counter: Counter.reducer,
    auth: authSlice.reducer,
  },
});

// Exporting actions and store
export const counterAction = Counter.actions;
export const authAction = authSlice.actions;
export default store;
