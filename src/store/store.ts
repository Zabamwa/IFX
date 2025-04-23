import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "../api/posts";
import { userApi } from "../api/users";
import themeReducer from "./themeSlice";

const apiReducers = {
  [postApi.reducerPath]: postApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
};

const apiMiddleware = [postApi.middleware, userApi.middleware];

export const store = configureStore({
  reducer: {
    ...apiReducers,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...apiMiddleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
