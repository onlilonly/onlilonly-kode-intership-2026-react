import React, { useState } from "react";
import { TopAppBarUI } from "../ui/TopAppBarUI/TopAppBarUI";
import { SortModal } from "../SortModal/SortModal";

interface TopAppBarProps {
    filters: string[];
    onSearch?: (value: string) => void;
    onFilterChange?: (filter: string) => void;
    onSortChange?: (option: "alphabet" | "birthday") => void;
    activeFilter: string;
    sortOption: string;
}

export const TopAppBar: React.FC<TopAppBarProps> = React.memo(
    ({ filters, onSearch, onFilterChange, onSortChange, activeFilter, sortOption }) => {
        const [searchValue, setSearchValue] = useState("");
        const [isSortModalOpen, setIsSortModalOpen] = useState(false);

        const handleSearchChange = (value: string) => {
            setSearchValue(value);
            onSearch?.(value);
        };

        const handleFilterClick = (filter: string) => {
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
                />

                <SortModal
                    isOpen={isSortModalOpen}
                    onClose={closeSortModal}
                    onOptionChange={handleSortChange}
                />
            </>
        );
    },
);
