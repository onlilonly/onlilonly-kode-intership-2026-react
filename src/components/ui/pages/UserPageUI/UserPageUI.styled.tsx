import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: ${({ theme }) => theme.bg};
`;

export const NavIconContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 22px 24px;
    width: 100%;
    min-height: 60px;
    background-color: ${({ theme }) => theme.card};
`;

export const NavIcon = styled.svg`
    width: 15px;
    height: 12px;
    flex-shrink: 0;
    cursor: pointer;
`;
