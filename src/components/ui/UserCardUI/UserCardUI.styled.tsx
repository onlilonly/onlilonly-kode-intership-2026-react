import styled, { css } from "styled-components";

export const Card = styled.li<{ variant?: "list" | "profile" }>`
    display: flex;
    background-color: #fff;
    cursor: pointer;

    ${({ variant }) =>
        variant === "profile" &&
        css`
            flex-direction: column;
            align-items: center;
            background-color: #fff;
            padding-bottom: 16px;
            cursor: default;
        `}
`;

export const ListCard = styled(Card)`
    flex-direction: row;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ProfileCard = styled(Card)`
    flex-direction: column;
    align-items: center;
    padding: 0 16px 24px;
    background-color: #f7f7f8;
`;

export const Avatar = styled.img<{
    variant?: "list" | "profile";
    large?: boolean;
}>`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    margin: 6px 16px 6px 0;

    ${({ variant, large }) =>
        (variant === "profile" || large) &&
        css`
            width: 104px;
            height: 104px;
            margin-right: 0;
            margin-bottom: 24px;
        `}
`;

export const Info = styled.div<{ variant?: "list" | "profile" }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ListInfo = styled(Info)`
    align-items: flex-start;
`;

export const ProfileInfo = styled(Info)`
    align-items: center;
`;

export const Name = styled.span<{ variant?: "list" | "profile" }>`
    display: flex;
    flex-direction: row;
    font-weight: 500;
    font-size: 1rem;
    color: #050510;
    padding-top: 17px;
    align-items: flex-end;
    line-height: 20px;

    ${({ variant }) =>
        variant === "profile" &&
        css`
            font-size: 1.5rem;
            font-weight: 700;
            margin: 12px 0;
            padding-top: 0;
            justify-content: center;
        `}
`;

export const Tag = styled.span<{ variant?: "list" | "profile" }>`
    font-size: 0.875rem;
    font-weight: 500;
    color: #97979b;
    margin-left: 4px;
    line-height: 18px;

    ${({ variant }) =>
        variant === "profile" &&
        css`
            font-size: 1.063rem;
            font-weight: 400;
        `}
`;

export const Department = styled.span`
    font-size: 0.813rem;
    font-weight: 400;
    line-height: 16px;
    color: #55555c;
`;

export const Extra = styled.div`
    padding: 20px 16px;
    font-size: 0.75rem;
    color: #050510;
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    justify-content: flex-start;
    background-color: #fff;

    &:last-child {
        margin-top: 4px;
    }
`;

export const BirthdayBlockProfile = styled.div`
    display: flex;
    width: 100%;
    font-size: 0.938rem;
    font-weight: 400;
    color: #55555c;
    align-items: center;
    line-height: 20px;
    justify-content: space-between;
`;

export const Birthday = styled.span`
    display: block;
    font-size: 1rem;
    font-weight: 500;
    color: #050510;
`;

export const UserAge = styled.span`
    display: block;
    font-size: 1rem;
    font-weight: 500;
    color: inherit;
`;

export const Phone = styled.span`
    display: block;
    font-size: 1rem;
    font-weight: 500;
    color: #050510;
`;

export const BirthdayBlock = styled.div`
    font-size: 0.938rem;
    font-weight: 400;
    color: #55555c;
`;
