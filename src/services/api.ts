import type { TUser, TDepartment } from "../types";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface UsersResponse {
    items: TUser[];
}

const api = axios.create({
    baseURL: BASE_URL,
});

export const getUsersApi = async (): Promise<TUser[]> => {
    const { data } = await api.get<UsersResponse>("/users", {
        params: { __example: "all" },
    });

    return data.items;
};

export const getUsersByDepartmentApi = async (
    department: TDepartment,
): Promise<TUser[]> => {
    const { data } = await api.get<UsersResponse>("/users", {
        params: { __example: department },
    });

    return data.items;
};
