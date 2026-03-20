import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./UserPageUI.styled";
import UserCard from "../../../UserCard/UserCard";
import type { TUser } from "../../../../types/index";
import { NavIcon, NavIconContainer } from "./UserPageUI.styled";

interface UserPageUIProps {
    user: TUser;
}

const UserPageUI: React.FC<UserPageUIProps> = ({ user }) => {
    const navigate = useNavigate();
    
    return (
        <Container>
            <NavIconContainer>
                <NavIcon
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 7 11"
                    onClick={() => navigate(-1)}
                >
                    <path
                        fill="#050510"
                        d="m.296 5.95 4.24 4.24a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41l-3.54-3.54 3.54-3.54a1 1 0 0 0 0-1.41 1 1 0 0 0-.71-.29 1 1 0 0 0-.71.29L.296 4.53a1 1 0 0 0 0 1.42"
                    />
                </NavIcon>
            </NavIconContainer>
            <UserCard user={user} variant="profile" />
        </Container>
    );
};

export default UserPageUI;
