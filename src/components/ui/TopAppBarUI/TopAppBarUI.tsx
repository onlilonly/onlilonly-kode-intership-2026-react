import React from "react";
import {
    TopBarContainer,
    SearchLabel,
    SearchInputContainer,
    SearchIcon,
    SearchInput,
    FiltersContainer,
    FilterButton,
    FilterIcon,
    Separator,
    Li,
} from "./TopAppBarUI.styled";
import { ThemeToggle } from "../ThemeToggle";
import { FILTER_LABELS } from "../../../constants/filters";
import type { TDepartment } from "../../../types";
import { useTheme } from "styled-components";

interface TopBarContainerUIProps {
    searchValue: string;
    onSearchChange: (value: string) => void;
    filters: TDepartment[];
    activeFilter: string;
    onFilterClick: (filter: TDepartment) => void;
    onFilterIconClick?: () => void;
    sortOption: string;
}

export const TopAppBarUI: React.FC<TopBarContainerUIProps> = ({
    searchValue,
    onSearchChange,
    filters,
    activeFilter,
    onFilterClick,
    onFilterIconClick,
    sortOption,
}) => {
    const theme = useTheme();
    return (
        <>
            <TopBarContainer>
                <SearchLabel>
                    Поиск
                    <ThemeToggle />
                </SearchLabel>

                <SearchInputContainer>
                    <SearchInput
                        placeholder="Введи имя, тег, почту..."
                        value={searchValue}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                    <SearchIcon
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 21 20"
                    >
                        <path
                            fill={
                                searchValue ? theme.text : theme.secondaryText
                            }
                            d="m19.73 18.31-3.71-3.68a9 9 0 1 0-1.39 1.39l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39M9.02 16.02a7 7 0 1 1 0-13.999 7 7 0 0 1 0 14"
                        />
                    </SearchIcon>
                    <FilterIcon
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 12"
                        onClick={onFilterIconClick}
                    >
                        <path
                            fill={
                                sortOption === "birthday"
                                    ? theme.accent
                                    : theme.secondaryText
                            }
                            d="M1 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 2h14a1 1 0 1 0 0-2H5a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10-5H9a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2m0 5h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2"
                        />
                    </FilterIcon>
                </SearchInputContainer>

                <FiltersContainer>
                    {filters.map((filter) => (
                        <Li key={filter}>
                            <FilterButton
                                active={filter === activeFilter}
                                onClick={() => onFilterClick(filter)}
                            >
                                {FILTER_LABELS[filter]}
                            </FilterButton>
                        </Li>
                    ))}
                </FiltersContainer>
            </TopBarContainer>
            <Separator />
        </>
    );
};
