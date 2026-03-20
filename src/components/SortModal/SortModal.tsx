import React, { useState } from "react";
import { SortModalUI } from "../ui/SortModalUI/SortModalUI";

interface SortModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOption?: "alphabet" | "birthday";
  onOptionChange?: (option: "alphabet" | "birthday") => void;
}

export const SortModal: React.FC<SortModalProps> = ({
  isOpen,
  onClose,
  onOptionChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<"alphabet" | "birthday">("alphabet");

  const handleOptionChange = (option: "alphabet" | "birthday") => {
    setSelectedOption(option);
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