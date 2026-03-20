import React, { use } from "react";
import {
    ListCard,
    ProfileCard,
    Avatar,
    ListInfo,
    ProfileInfo,
    Name,
    Tag,
    Department,
    Extra,
    BirthdayBlock,
    Container
} from "./UserCardUI.styled";
import type { TUser } from "../../../types";
import DefaultAvatar from "../../../assets/default-avatar.png";

interface UserCardUIProps {
    user: TUser & { nextBirthday?: Date };
    variant?: "list" | "profile";
    onClick?: (id: string) => void;
    sortOption: string;
}

const UserCardUI: React.FC<UserCardUIProps> = ({
    user,
    variant = "list",
    onClick,
    sortOption,
}) => {
    const isProfile = variant === "profile";

    if (isProfile) {
        return (
            <ProfileCard
                onClick={() => onClick && onClick(user.id)}
                variant={variant}
            >
                <Avatar
                    src={DefaultAvatar || user.avatarUrl}
                    alt={`${user.firstName} ${user.lastName}`}
                    variant={variant}
                    large
                />
                <ProfileInfo variant={variant}>
                    <Name variant={variant}>
                        {user.firstName} {user.lastName}
                    </Name>
                    <Tag variant={variant}>@{user.userTag}</Tag>
                    <Department>
                        {user.department} - {user.position}
                    </Department>
                    {(user.birthday || user.phone) && (
                        <Extra>
                            {user.birthday && <span> {user.birthday}</span>}
                            {user.phone && <span> {user.phone}</span>}
                        </Extra>
                    )}
                </ProfileInfo>
            </ProfileCard>
        );
    }

    return (
        <ListCard onClick={() => onClick && onClick(user.id)} variant={variant}>
            <Container>
            <Avatar
                src={DefaultAvatar || user.avatarUrl}
                alt={`${user.firstName} ${user.lastName}`}
                variant={variant}
            />
            <ListInfo variant={variant}>
                <Name variant={variant}>
                    {user.firstName} {user.lastName}
                    <Tag variant={variant}>{user.userTag}</Tag>
                </Name>
                <Department>{user.position}</Department>
            </ListInfo>
            </Container>
            {sortOption === "birthday" && user.nextBirthday && (
                <BirthdayBlock>
                    {`${user.nextBirthday.getDate()} ${user.nextBirthday.toLocaleString("default", { month: "short" }).replace('.', '')}`}
                </BirthdayBlock>
            )}
        </ListCard>
    );
};

export default UserCardUI;
