import React, { useState } from "react";
import { TopAppBarUI } from "../ui/TopAppBarUI/TopAppBarUI";
import { SortModal } from "../SortModal/SortModal";
import type { TDepartment } from "../../types";

interface TopAppBarProps {
    filters: TDepartment[];
    searchValue: string;
    onSearch?: (value: string) => void;
    onFilterChange: (filter: TDepartment) => void;
    onSortChange?: (option: "alphabet" | "birthday") => void;
    activeFilter: string;
    sortOption: "alphabet" | "birthday";
    status: "ok" | "loading" | "error";
}

export const TopAppBar: React.FC<TopAppBarProps> = React.memo(
    ({
        filters,
        searchValue,
        onSearch,
        onFilterChange,
        onSortChange,
        activeFilter,
        sortOption,
        status,
    }) => {
        const [isSortModalOpen, setIsSortModalOpen] = useState(false);

        const handleSearchChange = (value: string) => {
            onSearch?.(value);
        };

        const handleFilterClick = (filter: TDepartment) => {
            onFilterChange?.(filter);
        };

        const openSortModal = () => setIsSortModalOpen(true);
        const closeSortModal = () => setIsSortModalOpen(false);

        const handleSortChange = (option: "alphabet" | "birthday") => {
            onSortChange?.(option);
        };

        return (
            <>
                <TopAppBarUI
                    searchValue={searchValue}
                    onSearchChange={handleSearchChange}
                    filters={filters}
                    activeFilter={activeFilter}
                    onFilterClick={handleFilterClick}
                    onFilterIconClick={openSortModal}
                    sortOption={sortOption}
                    status={status}
                />

                <SortModal
                    isOpen={isSortModalOpen}
                    onClose={closeSortModal}
                    onOptionChange={handleSortChange}
                    selectedOption={sortOption}
                />
            </>
        );
    },
);
