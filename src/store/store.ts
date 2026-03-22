import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import themeSlice from "./themeSlice"

export const rootReducer = combineReducers({
    users: usersSlice,
    theme: themeSlice
});

const store = configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.MODE !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
