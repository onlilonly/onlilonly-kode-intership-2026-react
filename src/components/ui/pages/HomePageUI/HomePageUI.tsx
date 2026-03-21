import React from "react";
import { Container } from "./HomePageUI.styled";
import { TopAppBar } from "../../../TopAppBar/TopAppBar";
import { UserList } from "../../../UserList/UserList";
import { UsersSkeleton } from "../../../../pages/LoaderPage/LoaderPage";
import {
    ErrorBlockPage,
    NoOneFoundBlock,
} from "../../../../pages/ErrorPage/ErrorPage";
import type { TUser } from "../../../../types";

interface HomePageProps {
    filters: string[];
    onSearch?: (value: string) => void;
    onFilterChange?: (filter: string) => void;
    onSortChange?: (option: "alphabet" | "birthday") => void;
    users: TUser[];
    activeFilter: string;
    sortOption: string;
    isLoading: boolean;
    error: string | null;
}

const HomePageUI: React.FC<HomePageProps> = ({
    filters,
    onSearch,
    onFilterChange,
    onSortChange,
    users,
    activeFilter,
    sortOption,
    isLoading,
    error,
}) => {
    return (
        <Container>
            <TopAppBar
                filters={filters}
                onSearch={onSearch}
                onFilterChange={onFilterChange}
                onSortChange={onSortChange}
                activeFilter={activeFilter}
                sortOption={sortOption}
            />
            {error !== null ? (
                <ErrorBlockPage />
            ) : isLoading ? (
                <UsersSkeleton />
            ) : users.length > 0 ? (
                <UserList
                    variant="list"
                    users={users}
                    sortOption={sortOption}
                />
            ) : (
                <NoOneFoundBlock />
            )}
        </Container>
    );
};

export default HomePageUI;
