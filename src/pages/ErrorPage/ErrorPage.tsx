import {
    ErrorContainer,
    Emoji,
    Title,
    Subtitle,
    RetryButton,
} from "./ErrorPage.styled";
import { useNavigate } from "react-router-dom";
import React from "react";
import ufo from "../../assets/flying-saucer_1f6f8.png";
import glass from '../../assets/left-pointing-magnifying-glass_1f50d.png'

export const ErrorBlockPage: React.FC = () => {
    const navigate = useNavigate();
    const onRetry = () => {
        navigate("/");
    };

    return (
        <ErrorContainer>
            <Emoji src={ufo}></Emoji>

            <Title>Какой-то сверхразум все сломал</Title>

            <Subtitle>Постараемся быстро починить</Subtitle>

            <RetryButton onClick={onRetry}>Попробовать снова</RetryButton>
        </ErrorContainer>
    );
};

export const NoOneFoundBlock: React.FC = () => {
  return (
        <ErrorContainer>
            <Emoji src={glass}></Emoji>

            <Title>Мы никого не нашли</Title>

            <Subtitle>Попробуй скорректировать запрос</Subtitle>
        </ErrorContainer>
    );
}
