import { useSelector as selectorHook } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../store/store";

export type RootStateType = RootState;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = selectorHook;
