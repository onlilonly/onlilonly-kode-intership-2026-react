import React from "react";
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
} from "./UserCardUI.styled";
import type { TUser } from "../../../types";
import DefaultAvatar from "../../../assets/default-avatar.png";

interface UserCardUIProps extends TUser {
    variant?: "list" | "profile";
    onClick?: (id: string) => void;
}

const UserCardUI: React.FC<UserCardUIProps> = ({
    id,
    firstName,
    lastName,
    userTag,
    avatarUrl,
    department,
    position,
    birthday,
    phone,
    variant = "list",
    onClick,
}) => {
    const isProfile = variant === "profile";

    if (isProfile) {
        return (
            <ProfileCard
                onClick={() => onClick && onClick(id)}
                variant={variant}
            >
                <Avatar
                    src={DefaultAvatar || avatarUrl}
                    alt={`${firstName} ${lastName}`}
                    variant={variant}
                    large
                />
                <ProfileInfo variant={variant}>
                    <Name variant={variant}>
                        {firstName} {lastName}
                    </Name>
                    <Tag variant={variant}>@{userTag}</Tag>
                    <Department>
                        {department} - {position}
                    </Department>
                    {(birthday || phone) && (
                        <Extra>
                            {birthday && <span> {birthday}</span>}
                            {phone && <span> {phone}</span>}
                        </Extra>
                    )}
                </ProfileInfo>
            </ProfileCard>
        );
    }

    return (
        <ListCard onClick={() => onClick && onClick(id)} variant={variant}>
            <Avatar
                src={DefaultAvatar || avatarUrl}
                alt={`${firstName} ${lastName}`}
                variant={variant}
            />
            <ListInfo variant={variant}>
                <Name variant={variant}>
                    {firstName} {lastName}
                    <Tag variant={variant}>{userTag}</Tag>
                </Name>
                <Department>{position}</Department>
            </ListInfo>
        </ListCard>
    );
};

export default UserCardUI;
