import type { TUser, TDepartment } from "../types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface UsersResponse {
    items: TUser[];
}

const checkResponse = async <T>(res: Response): Promise<T> => {
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data?.message || `Ошибка: ${res.status}`);
    }

    return data;
};

export const getUsersApi = (): Promise<TUser[]> =>
    fetch(`${BASE_URL}/users?__example=all`)
        .then((res) => checkResponse<UsersResponse>(res))
        .then((data) => data.items);

export const getUsersByDepartmentApi = (
    department: TDepartment,
): Promise<TUser[]> =>
    fetch(`${URL}/users?__example=${department}`)
        .then((res) => checkResponse<UsersResponse>(res))
        .then((data) => data.items);
