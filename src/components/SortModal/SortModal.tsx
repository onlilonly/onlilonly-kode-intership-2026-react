import React from "react";
import { SortModalUI } from "../ui/SortModalUI/SortModalUI";

interface SortModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedOption: "alphabet" | "birthday";
    onOptionChange?: (option: "alphabet" | "birthday") => void;
}

export const SortModal: React.FC<SortModalProps> = ({
    isOpen,
    onClose,
    onOptionChange,
    selectedOption,
}) => {
    const handleOptionChange = (option: "alphabet" | "birthday") => {
        onOptionChange?.(option);
        onClose();
    };

    return (
        <SortModalUI
            isOpen={isOpen}
            onClose={onClose}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
        />
    );
};
