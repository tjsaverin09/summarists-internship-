import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { createLogger } from "redux-logger";
import loginModalSlice from "../redux/loginModalSlice";
import { selectedBookApi } from "./selectedBookApiSlice";
import { recBooksApi } from "./recBooksApiSlice";
import { sugBooksApi } from "./sugBooksApiSlice";
import { allBooksApi } from "./allBookApiSlice";


const logger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = configureStore({
  reducer: {
    loginModal: loginModalSlice,
    [selectedBookApi.reducerPath]: selectedBookApi.reducer,
    [recBooksApi.reducerPath]: recBooksApi.reducer,
    [sugBooksApi.reducerPath]: sugBooksApi.reducer,
    [allBooksApi.reducerPath]: allBooksApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(selectedBookApi.middleware, recBooksApi.middleware, sugBooksApi.middleware, allBooksApi.middleware, logger),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
