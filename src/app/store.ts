import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./reducers/user-data/userData-reducer";

export const store = configureStore({
  reducer: {
    userData: userDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
