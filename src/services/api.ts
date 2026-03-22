import type { TUser, TDepartment } from "../types";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface UsersResponse {
    items: TUser[];
}

const api = axios.create({
    baseURL: BASE_URL,
});

type CacheEntry = { data: TUser[]; timestamp: number };
const cache: Record<string, CacheEntry> = {};
const TTL = 5 * 60 * 1000;

export const getUsersApi = async (): Promise<TUser[]> => {
    const key = "all";
    const now = Date.now();

    if (cache[key] && now - cache[key].timestamp < TTL) {
        return cache[key].data;
    }

    const { data } = await api.get<UsersResponse>("/users", {
        params: { __example: "all" },
    });

    cache[key] = { data: data.items, timestamp: now };
    return data.items;
};

export const getUsersByDepartmentApi = async (
    department: TDepartment,
): Promise<TUser[]> => {
    const key = department;
    const now = Date.now();

    if (cache[key] && now - cache[key].timestamp < TTL) {
        return cache[key].data;
    }

    const { data } = await api.get<UsersResponse>("/users", {
        params: { __example: department },
    });

    cache[key] = { data: data.items, timestamp: now };
    return data.items;
};
