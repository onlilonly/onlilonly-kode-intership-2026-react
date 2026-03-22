import { useMemo } from "react";
import type { TUser, TDepartment } from "../types";

interface Params {
    users: TUser[];
    usersByDepartment: TUser[];
    search: string;
    option: "alphabet" | "birthday";
    activeFilter: TDepartment;
}

export const useSortedFilteredUsers = ({
    users,
    usersByDepartment,
    search,
    option,
    activeFilter,
}: Params) => {
    const baseUsers = useMemo(() => {
        return activeFilter === "all" ? users : usersByDepartment;
    }, [activeFilter, users, usersByDepartment]);

    const filteredUsers = useMemo(() => {
        return baseUsers.filter((user) => {
            if (!search) return true;
            return (
                user.firstName.toLowerCase().includes(search.toLowerCase()) ||
                user.lastName.toLowerCase().includes(search.toLowerCase()) ||
                user.userTag.toLowerCase().includes(search.toLowerCase())
            );
        });
    }, [baseUsers, search]);

    const sortedUsers = useMemo(() => {
        if (option === "birthday") {
            const today = new Date();

            return [...filteredUsers]
                .map((user) => {
                    const birthDate = new Date(user.birthday);

                    let nextBirthday = new Date(
                        today.getFullYear(),
                        birthDate.getMonth(),
                        birthDate.getDate(),
                    );
                    if (nextBirthday < today) {
                        nextBirthday.setFullYear(today.getFullYear() + 1);
                    }

                    return {
                        ...user,
                        nextBirthday,
                    };
                })
                .sort(
                    (a, b) =>
                        a.nextBirthday.getTime() - b.nextBirthday.getTime(),
                );
        }

        return [...filteredUsers].sort((a, b) =>
            a.firstName.localeCompare(b.firstName),
        );
    }, [filteredUsers, option]);

    return sortedUsers;
};
