import React from "react";
import { List } from "./UserListUI.styled";
import type { TUser } from "../../../types";
import UserCard from "../../UserCard/UserCard";

interface UserListUIProps {
    users: TUser[];
    variant?: "list" | "profile";
}

const UserListUI: React.FC<UserListUIProps> = ({ users, variant = "list" }) => {
    return (
        <List>
            {users.map((user) => (
                <UserCard key={user.id} user={user} variant={variant} />
            ))}
        </List>
    );
};

export default UserListUI;
