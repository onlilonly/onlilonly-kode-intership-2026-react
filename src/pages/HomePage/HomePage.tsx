import React, { useEffect, useCallback, useMemo, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useNetworkStatus } from "../../hooks/useNetworkStatus";
import { useSortedFilteredUsers } from "../../hooks/useSortedFilteredUsers";
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
    const [inputValue, setInputValue] = useState(search);

    useEffect(() => {
        setInputValue(search);
    }, [search]);

    const onSearch = useCallback((value: string) => {
        setInputValue(value);
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            dispatch(setSearch(inputValue));
        }, 500);

        return () => clearTimeout(handler);
    }, [inputValue, dispatch]);

    const option = useAppSelector((state) => state.users.option);
    const activeFilter = useAppSelector((state) => state.users.filter);

    const sortedUsers = useSortedFilteredUsers({
        users,
        usersByDepartment,
        search,
        option,
        activeFilter,
    });

    const filters = Object.keys(FILTER_LABELS) as TDepartment[];

    useEffect(() => {
        dispatch(getUsers());
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

    return (
        <HomePageUI
            filters={filters}
            searchValue={inputValue}
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
