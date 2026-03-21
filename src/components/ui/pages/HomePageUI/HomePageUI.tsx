import React from "react";
import { Container } from "./HomePageUI.styled";
import { TopAppBar } from "../../../TopAppBar/TopAppBar";
import { UserList } from "../../../UserList/UserList";
import { UsersSkeleton } from "../../../../pages/LoaderPage/LoaderPage";
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
            {isLoading ? (
                <UsersSkeleton />
            ) : (
                <UserList
                    variant="list"
                    users={users}
                    sortOption={sortOption}
                />
            )}
        </Container>
    );
};

export default HomePageUI;
