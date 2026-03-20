import React from "react";
import { Container } from "./HomePageUI.styled";
import { TopAppBar } from "../../../TopAppBar/TopAppBar";
import { UserList } from "../../../UserList/UserList";
import type { TUser } from "../../../../types";

interface HomePageProps {
    filters: string[];
    onSearch?: (value: string) => void;
    onFilterChange?: (filter: string) => void;
    onSortChange?: (option: "alphabet" | "birthday") => void;
    users: TUser[];
    activeFilter: string;
}

const HomePageUI: React.FC<HomePageProps> = ({
    filters,
    onSearch,
    onFilterChange,
    onSortChange,
    users,
    activeFilter,
}) => {
    return (
        <Container>
            <TopAppBar
                filters={filters}
                onSearch={onSearch}
                onFilterChange={onFilterChange}
                onSortChange={onSortChange}
                activeFilter={activeFilter}
            />
            <UserList variant="list" users={users} />
        </Container>
    );
};

export default HomePageUI;
