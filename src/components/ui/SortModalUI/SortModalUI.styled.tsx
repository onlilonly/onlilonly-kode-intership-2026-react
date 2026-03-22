import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const ModalContainer = styled.div`
    min-width: 373px;
    background: ${({ theme }) => theme.bg};
    border-radius: 20px;
    padding: 16px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 0 16px 24px;
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
    line-height: 24px;
    color: ${({ theme }) => theme.text};
`;

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;

    svg {
        display: block;
    }
`;

export const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;

    label {
        display: flex;
        align-items: center;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        line-height: 20px;
        position: relative;
        padding-left: 28px;
        color: ${({ theme }) => theme.text};

        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        span {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            border: 2px solid ${({ theme }) => theme.accent};
            border-radius: 50%;
            background-color: ${({ theme }) => theme.bg};

            &::after {
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 20px;
                height: 20px;
                border: 7px solid ${({ theme }) => theme.accent};
                border-radius: 50%;
                background-color: ${({ theme }) => theme.bg};
                opacity: 0;
                transition: opacity 0.2s;
            }
        }

        input:checked + span::after {
            opacity: 1;
        }
    }
`;
