import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TUser, TDepartment } from "../types";
import { getUsersApi, getUsersByDepartmentApi } from "../services/api";

export type userState = {
    users: TUser[];
    isLoading: boolean;
    error: string | null;
};

const initialState: userState = {
    users: [],
    isLoading: false,
    error: null,
};

export const getUsers = createAsyncThunk<TUser[]>("users/getUser", async () => {
    const data = await getUsersApi();
    return data;
});

export const getUsersByDepartment = createAsyncThunk<TUser[], TDepartment>(
    "users/getUsersByDepartment",
    async (department) => {
        const data = await getUsersByDepartmentApi(department);
        return data;
    },
);

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(
                getUsers.fulfilled,
                (state, action: PayloadAction<TUser[]>) => {
                    state.isLoading = false;
                    state.users = action.payload;
                },
            )
            .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error =
                    action.error.message ||
                    "Не удалось загрузить список пользователей";
            })
            .addCase(getUsersByDepartment.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(
                getUsersByDepartment.fulfilled,
                (state, action: PayloadAction<TUser[]>) => {
                    state.isLoading = false;
                    state.users = action.payload;
                },
            )
            .addCase(getUsersByDepartment.rejected, (state, action) => {
                state.isLoading = false;
                state.error =
                    action.error.message ||
                    "Не удалось загрузить список пользователей по департаменту";
            });
    },
});

export default usersSlice.reducer;
