import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getUsers, getUsersByDepartment } from "../../store/usersSlice";
import HomePageUI from "../../components/ui/pages/HomePageUI/HomePageUI";
import { FILTER_LABELS } from "../../constants/filters";

export const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { users, usersByDepartment, isLoading, error } = useAppSelector(
        (state) => state.users,
    );

    const [searchValue, setSearchValue] = useState("");
    const [sortOption, setSortOption] = useState<"alphabet" | "birthday">(
        "alphabet",
    );
    const [activeFilter, setActiveFilter] = useState<string>("all");

    const filters = Object.keys(FILTER_LABELS);

    const baseUsers = useMemo(() => {
        return activeFilter === "all" ? users : usersByDepartment;
    }, [activeFilter, users, usersByDepartment]);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onSortChange = useCallback((option: "alphabet" | "birthday") => {
        setSortOption(option);
    }, []);

    const onFilterChange = useCallback(
        (filter: string) => {
            setActiveFilter(filter);

            if (filter !== "all") {
                dispatch(getUsersByDepartment(filter));
            }
        },
        [dispatch],
    );

    const filteredUsers = useMemo(() => {
        return baseUsers.filter((user) => {
            if (!searchValue) return true;
            return (
                user.firstName
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                user.lastName
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                user.userTag.toLowerCase().includes(searchValue.toLowerCase())
            );
        });
    }, [baseUsers, searchValue]);

    const sortedUsers = useMemo(() => {
        if (sortOption === "birthday") {
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
    }, [filteredUsers, sortOption]);

    return (
        <HomePageUI
            filters={filters}
            onSearch={onSearch}
            onFilterChange={onFilterChange}
            onSortChange={onSortChange}
            users={sortedUsers}
            activeFilter={activeFilter}
            sortOption={sortOption}
            isLoading={isLoading}
            error={error}
        />
    );
};
