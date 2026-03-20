import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin-top: 16px;
    gap: 4px;
`;

export const YearSeparator = styled.div`
    width: 100%;
    padding: 24px;
    font-weight: 500;
    font-size: 0.938rem;
    color: #c3c3c6;
    background-color: inherit;
    display: flex;
    align-items: center;
    line-height: 20px;

    &:before,
    &:after {
        content: "";
        border-bottom: 1px solid #c3c3c6;
        flex: 1;
    }

    &:before {
        margin-right: 60px;
    }

    &:after {
        margin-left: 60px;
    }
`;
