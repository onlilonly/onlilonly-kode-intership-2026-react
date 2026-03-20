import type { FC } from "react";
import UserListUI from "../ui/UserListUI/UserListUI";
import type { TUser } from "../../types";

interface UserListProps {
    variant?: "list" | "profile";
    users: TUser[];
    sortOption: string;
}

export const UserList: FC<UserListProps> = ({ variant = "list", users, sortOption}) => {

    return <UserListUI users={users} variant={variant} sortOption={sortOption}/>;
};
