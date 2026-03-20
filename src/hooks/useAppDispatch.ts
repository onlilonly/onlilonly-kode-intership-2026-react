import { useDispatch as dispatchHook } from "react-redux";
import type { AppDispatch } from "../store/store";

export type AppDispatchType = AppDispatch;
export const useAppDispatch: () => AppDispatchType = () => dispatchHook();
