import React, { useEffect, useCallback, useMemo, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useNetworkStatus } from "../../hooks/useNetworkStatus";
import {
    getUsers,
    getUsersByDepartment,
    setSearch,
    setOption,
    setFilter,
} from "../../store/usersSlice";
import HomePageUI from "../../components/ui/pages/HomePageUI/HomePageUI";
import { FILTER_LABELS } from "../../constants/filters";
import type { TDepartment } from "../../types";

export const HomePage: React.FC = () => {
    const isOnline = useNetworkStatus();
    const dispatch = useAppDispatch();
    const { users, usersByDepartment, isLoading, error } = useAppSelector(
        (state) => state.users,
    );
    const [wasOffline, setWasOffline] = useState(false);
    useEffect(() => {
        let timer: number;
        if (!isOnline) {
            setWasOffline(true);
        }

        if (isOnline && wasOffline) {
            timer = setTimeout(() => {
                setWasOffline(false);
            }, 500);
            dispatch(getUsers());
        }

        return () => clearTimeout(timer);
    }, [isOnline, wasOffline, dispatch]);

    const topBarStatus: "ok" | "loading" | "error" = !isOnline
        ? "error"
        : wasOffline
          ? "loading"
          : "ok";
    const search = useAppSelector((state) => state.users.search);
    const option = useAppSelector((state) => state.users.option);
    const activeFilter = useAppSelector((state) => state.users.filter);

    const filters = Object.keys(FILTER_LABELS) as TDepartment[];

    const baseUsers = useMemo(() => {
        return activeFilter === "all" ? users : usersByDepartment;
    }, [activeFilter, users, usersByDepartment]);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const onSearch = useCallback((value: string) => {
        dispatch(setSearch(value));
    }, []);

    const onSortChange = useCallback((option: "alphabet" | "birthday") => {
        dispatch(setOption(option));
    }, []);

    const onFilterChange = useCallback(
        (filter: TDepartment) => {
            dispatch(setFilter(filter));

            if (filter !== "all") {
                dispatch(getUsersByDepartment(filter));
            }
        },
        [dispatch],
    );

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

    return (
        <HomePageUI
            filters={filters}
            searchValue={search}
            onSearch={onSearch}
            onFilterChange={onFilterChange}
            onSortChange={onSortChange}
            users={sortedUsers}
            activeFilter={activeFilter}
            sortOption={option}
            isLoading={isLoading}
            error={error}
            status={topBarStatus}
        />
    );
};
