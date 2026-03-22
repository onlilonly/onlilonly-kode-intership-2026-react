import styled from "styled-components";

export const ErrorContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

export const Emoji = styled.img`
    display: block;
    object-fit: cover;
    object-position; center;
    font-size: 56px;
`;

export const Title = styled.h2`
    font-size: 1.063rem;
    font-weight: 600;
    color: #050510;
    line-height: 22px;
`;

export const Subtitle = styled.h3`
    font-size: 1rem;
    font-weight: 400;
    color: #97979B;
    line-height: 20px;
`;

export const RetryButton = styled.button`
    font-size: 1rem;
    font-weight: 600;
    color: #6534FF;
    line-height: 20px;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
