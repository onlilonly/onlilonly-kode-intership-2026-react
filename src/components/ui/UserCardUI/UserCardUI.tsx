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
    BirthdayBlock,
    Container,
    BirthdayBlockProfile,
    Birthday,
    UserAge,
    Phone,
} from "./UserCardUI.styled";
import type { TUser } from "../../../types";
import DefaultAvatar from "../../../assets/default-avatar.png";

interface UserCardUIProps {
    user: TUser & { nextBirthday?: Date; age?: number };
    variant?: "list" | "profile";
    onClick?: (id: string) => void;
    sortOption?: string;
}

const UserCardUI: React.FC<UserCardUIProps> = ({
    user,
    variant = "list",
    onClick,
    sortOption,
}) => {
    const isProfile = variant === "profile";

    //TODO: Перенести функции форматирования в утилиты
    const date = new Date(user.birthday);
    const formattedDate = date.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
    });
    const formattedPhone = (phone: string) => {
        const digits = phone.replace(/\D/g, "");
        return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)} ${digits.slice(7, 9)} ${digits.slice(9, 11)}`;
    };
    const formattedAge = (age: number) => {
        if (!age && age !== 0) return "Младенец";
        const lastDigit = age % 10;
        const lastTwoDigits = age % 100;

        if (lastDigit === 1 && lastTwoDigits !== 11) return `${age} год`;
        if (
            [2, 3, 4].includes(lastDigit) &&
            ![12, 13, 14].includes(lastTwoDigits)
        )
            return `${age} года`;
        return `${age} лет`;
    };

    if (isProfile) {
        return (
            <>
                <ProfileCard
                    onClick={() => onClick && onClick(user.id)}
                    variant={variant}
                >
                    <Avatar
                        src={DefaultAvatar || user.avatarUrl}
                        alt={`${user.firstName} ${user.lastName}`}
                        variant={variant}
                    />
                    <ProfileInfo variant={variant}>
                        <Name variant={variant}>
                            {user.firstName} {user.lastName}
                            <Tag variant={variant}>{user.userTag}</Tag>
                        </Name>
                        <Department>{user.position}</Department>
                    </ProfileInfo>
                </ProfileCard>

                <Extra>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        fill="none"
                        viewBox="0 0 21 20"
                    >
                        <path
                            fill="#050510"
                            d="M19.994 7.234a1 1 0 0 0-.86-.67l-5.69-.83-2.55-5.17a1 1 0 0 0-1.8 0l-2.55 5.16-5.69.84a1 1 0 0 0-.81.68 1 1 0 0 0 .25 1l4.13 4-1 5.68a1 1 0 0 0 1.47 1.08l5.1-2.67 5.1 2.67c.14.08.299.12.46.12a1 1 0 0 0 .59-.19 1 1 0 0 0 .4-1l-1-5.68 4.13-4a1 1 0 0 0 .32-1.02m-6.15 4a1 1 0 0 0-.29.88l.72 4.2-3.76-2a1.06 1.06 0 0 0-.94 0l-3.76 2 .72-4.2a1 1 0 0 0-.29-.88l-3-3 4.21-.61a1 1 0 0 0 .76-.55l1.78-3.81 1.88 3.82a1 1 0 0 0 .76.55l4.21.61z"
                        />
                    </svg>
                    <BirthdayBlockProfile>
                        <Birthday>
                            {formattedDate} {date.getFullYear()}
                        </Birthday>
                        {user.age && (
                            <UserAge>{formattedAge(user.age)}</UserAge>
                        )}
                    </BirthdayBlockProfile>
                </Extra>

                <Extra>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill="#050510"
                            d="M17.458 10.96c-.22 0-.45-.07-.67-.12a9.4 9.4 0 0 1-1.31-.39 2 2 0 0 0-2.48 1l-.22.45a12.2 12.2 0 0 1-2.66-2 12.2 12.2 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48q-.239-.641-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41 19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2.742-1.777 3 3 0 0 0 .258-1.233v-3a3 3 0 0 0-2.47-2.9m.5 6a1 1 0 0 1-.723.962 1.1 1.1 0 0 1-.437.038A17 17 0 0 1 2.088 3.18a1.1 1.1 0 0 1 .25-.82 1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79q.06.411.15.81.174.791.46 1.55l-1.4.65a1 1 0 0 0-.49 1.33 14.5 14.5 0 0 0 7 7 1 1 0 0 0 .76 0 1 1 0 0 0 .57-.52l.62-1.4a14 14 0 0 0 1.58.46q.4.09.81.15a1 1 0 0 1 .79 1z"
                        />
                    </svg>
                    <Phone href={`tel:${user.phone}`}>{formattedPhone(user.phone)}</Phone>
                </Extra>
            </>
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
                    {`${user.nextBirthday.getDate()} ${user.nextBirthday.toLocaleString("default", { month: "short" }).replace(".", "")}`}
                </BirthdayBlock>
            )}
        </ListCard>
    );
};

export default UserCardUI;
