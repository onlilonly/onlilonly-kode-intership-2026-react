import type { FC } from "react";
import { useMemo } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import UserListUI from "../ui/UserListUI/UserListUI";
import type { TUser } from "../../types";

interface UserListProps {
    variant?: "list" | "profile";
}

export const UserList: FC<UserListProps> = ({ variant = "list" }) => {
    const users: TUser[] = useAppSelector((state) => state.users.users);
    const sortedUsers = useMemo(() => {
        return [...users].sort((a, b) =>
            a.firstName.localeCompare(b.firstName, "en", {
                sensitivity: "base",
            }),
        );
    }, [users]);

    return <UserListUI users={sortedUsers} variant={variant} />;
};
