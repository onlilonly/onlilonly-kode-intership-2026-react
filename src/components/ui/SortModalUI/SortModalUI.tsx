import React from "react";
import {
    Overlay,
    ModalContainer,
    Header,
    Title,
    CloseButton,
    RadioContainer,
} from "./SortModalUI.styled";

interface SortModalUIProps {
    isOpen: boolean;
    onClose: () => void;
    selectedOption?: "alphabet" | "birthday";
    onOptionChange?: (option: "alphabet" | "birthday") => void;
}

export const SortModalUI: React.FC<SortModalUIProps> = ({
    isOpen,
    onClose,
    selectedOption,
    onOptionChange,
}) => {
    if (!isOpen) return null;

    return (
        <Overlay>
            <ModalContainer>
                <Header>
                    <div></div>
                    <Title>Сортировка</Title>
                    <CloseButton onClick={onClose}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <rect
                                width="24"
                                height="24"
                                fill="#f7f7f8"
                                rx="12"
                            />
                            <path
                                fill="#c3c3c6"
                                d="M16.736 7.264a.9.9 0 0 1 0 1.272L13.273 12l3.463 3.464a.9.9 0 0 1 .081 1.18l-.08.092a.9.9 0 0 1-1.273 0L12 13.273l-3.464 3.463a.9.9 0 1 1-1.272-1.272L10.727 12 7.264 8.536a.9.9 0 0 1-.08-1.18l.08-.092a.9.9 0 0 1 1.272 0L12 10.727l3.464-3.463a.9.9 0 0 1 1.272 0"
                            />
                        </svg>
                    </CloseButton>
                </Header>
                <RadioContainer>
                    <label>
                        <input
                            type="radio"
                            name="sort"
                            value="alphabet"
                            checked={selectedOption === "alphabet"}
                            onChange={() => onOptionChange?.("alphabet")}
                        />
                        <span />
                        По алфавиту
                    </label>
                </RadioContainer>
                <RadioContainer>
                    <label>
                        <input
                            type="radio"
                            name="sort"
                            value="birthday"
                            checked={selectedOption === "birthday"}
                            onChange={() => onOptionChange?.("birthday")}
                        />
                        <span />
                        По дню рождения
                    </label>
                </RadioContainer>
            </ModalContainer>
        </Overlay>
    );
};
