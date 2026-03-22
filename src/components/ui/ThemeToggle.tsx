import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { toggleTheme } from "../../store/themeSlice";
import { useTheme } from "styled-components";

export const ThemeToggle = () => {
  const yourTheme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      style={{
        padding: "5px",
        borderRadius: "20px",
        border: `1px solid ${theme.secondaryText}`,
        cursor: "pointer",
        background: theme.card,
      }}
    >
      {yourTheme === "dark" ? "⛅" : "🌙"}
    </button>
  );
};