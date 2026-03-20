import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #fff;
`;

export const NavIconContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 22px 24px;
    width: 100%;
    min-height: 60px;
    background-color: #f7f7f8;
`;

export const NavIcon = styled.svg`
    width: 15px;
    height: 12px;
    flex-shrink: 0;
    cursor: pointer;
`;
