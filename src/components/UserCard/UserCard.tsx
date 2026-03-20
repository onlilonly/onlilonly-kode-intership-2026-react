import React from "react";
import UserCardUI from "../ui/UserCardUI/UserCardUI";
import type { TUser } from "../../types";
import { useNavigate } from "react-router-dom";

interface UserCardProps {
    user: TUser;
    variant?: "list" | "profile";
    sortOption: string;
}

const UserCard: React.FC<UserCardProps> = ({ user, sortOption, variant = "list" }) => {
    const navigate = useNavigate();

    const handleClick = (id: string) => {
        if (variant === "list") {
            navigate(`/users/${id}`);
        }
    };

    return <UserCardUI user={user} variant={variant} onClick={handleClick} sortOption={sortOption}/>;
};

export default UserCard;
