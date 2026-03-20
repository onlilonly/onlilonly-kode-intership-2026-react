import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usersSice from "./usersSlice";

export const rootReducer = combineReducers({
    users: usersSice
});

const store = configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.MODE !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
