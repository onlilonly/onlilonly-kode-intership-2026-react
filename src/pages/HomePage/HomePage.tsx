import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getUsers, getUsersByDepartment } from "../../store/usersSlice";
import HomePageUI from "../../components/ui/pages/HomePageUI/HomePageUI";
import { FILTER_LABELS } from "../../constants/filters";

export const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { users, isLoading, error } = useAppSelector((state) => state.users);

    const [searchValue, setSearchValue] = useState("");
    const [sortOption, setSortOption] = useState<"alphabet" | "birthday">(
        "alphabet",
    );
    const [activeFilter, setActiveFilter] = useState<string>("all");

    const filters = Object.keys(FILTER_LABELS);

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

            if (filter === "all") {
                dispatch(getUsers());
            } else {
                dispatch(getUsersByDepartment(filter));
            }
        },
        [dispatch],
    );

    const filteredUsers = useMemo(() => {
        return users.filter((user) => {
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
    }, [users, searchValue]);

    //сортировка по дате по ТЗ будет сделана позже
    const sortedUsers = useMemo(() => {
        return [...filteredUsers].sort((a, b) => {
            if (sortOption === "birthday") {
                return (
                    new Date(a.birthday).getTime() -
                    new Date(b.birthday).getTime()
                );
            }
            return a.firstName.localeCompare(b.firstName);
        });
    }, [filteredUsers, sortOption]);

    if (isLoading) return <div>Загрузка пользователей...</div>;
    if (error) return <div>Ошибка: {error}</div>;

    return (
        <HomePageUI
            filters={filters}
            onSearch={onSearch}
            onFilterChange={onFilterChange}
            onSortChange={onSortChange}
            users={sortedUsers}
            activeFilter={activeFilter}
        />
    );
};
