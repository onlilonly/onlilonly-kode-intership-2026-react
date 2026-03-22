import styled from "styled-components";

export const TopBarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bg};
    padding: 8px 16px 0px;
    position: sticky;
    top: 0;
`;

export const SearchLabel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 8px;
    margin-bottom: 12px;
    margin-left: 8px;
    text-align: start;
    line-height: 1.75rem;
    color: ${({ theme }) => theme.text};
`;

export const SearchInputContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.card};
    padding: 8px 12px;
    border-radius: 16px;
    width: 100%;
`;

export const SearchIcon = styled.svg`
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-right: 10px;
    order: -1;
`;

export const FilterIcon = styled.svg`
    width: 20px;
    height: 12px;
    flex-shrink: 0;
    cursor: pointer;
`;

export const SearchInput = styled.input`
    border: none;
    outline: none;
    flex: 1;
    background: transparent;
    height: 24px;
    width: 100%;
    color: ${({ theme }) => theme.text};
    caret-color: ${({ theme }) => theme.accent};

    &::placeholder {
        color: ${({ theme }) => theme.secondaryText};
    }

    &:focus + svg path {
        fill: ${({ theme }) => theme.text};
        transition: fill 0.2s;
    }
`;

export const FiltersContainer = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    margin-top: 8px;
    padding-top: 8px;
    list-style: none;
    width: clamp(21.4375rem, -2rem + 100vw, 118rem);
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Li = styled.li`
    margin: 0;
    padding: 0;
`;

export const FilterButton = styled.button<{ active?: boolean }>`
    background: transparent;
    border: none;
    padding: 8px 12px;
    font-size: 0.938rem;
    line-height: 20px;
    font-weight: ${({ active }) => (active ? "600" : "500")};
    color: ${({ active, theme }) =>
        active ? theme.text : theme.secondaryText};
    border-bottom: ${({ active, theme }) =>
        active ? `2px solid ${theme.accent}` : "2px solid transparent"};
    cursor: pointer;
`;
export const Separator = styled.hr`
    margin: 0;
    padding: 0;
    border: none;
    width: 100%;
    border-top:  ${({ theme }) => `0.33px solid ${theme.secondaryText}`};
    position: sticky;
    top: 150px;
`;
