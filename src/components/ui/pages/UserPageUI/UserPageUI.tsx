import React from "react";
import { Container } from "./UserPageUI.styled";
// TODO: после создания компонентов импортировать
import type { TUser } from "../../../../types/index";

interface UserPageUIProps {
    user: TUser;
}

const UserPageUI: React.FC<UserPageUIProps> = ({ user }) => {
    return (
        <Container>
            {/* TODO: заменить на <UserCard /> после создания */}
            <div>UserCard</div>
        </Container>
    );
};

export default UserPageUI;
