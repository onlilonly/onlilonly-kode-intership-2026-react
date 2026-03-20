import React from "react";
import { List, YearSeparator } from "./UserListUI.styled";
import type { TUser } from "../../../types";
import UserCard from "../../UserCard/UserCard";

interface UserListUIProps {
    users: (TUser & { nextBirthday?: Date, age?: number })[];
    variant?: "list" | "profile";
    sortOption?: string;
}

const UserListUI: React.FC<UserListUIProps> = ({
    users,
    sortOption,
    variant = "list",
}) => {
    if (sortOption !== "birthday") {
        return (
            <List>
                {users.map((user) => (
                    <UserCard
                        key={user.id}
                        user={user}
                        variant={variant}
                        sortOption={sortOption}
                    />
                ))}
            </List>
        );
    }

    const today = new Date();
    const thisYearUsers = users.filter(
        (user) =>
            user.nextBirthday &&
            user.nextBirthday.getFullYear() === today.getFullYear(),
    );
    const nextYearUsers = users.filter(
        (user) =>
            user.nextBirthday &&
            user.nextBirthday.getFullYear() === today.getFullYear() + 1,
    );

    return (
    <List>
      {thisYearUsers.map((user) => (
        <UserCard key={user.id} user={user} variant={variant} sortOption={sortOption} />
      ))}

      {nextYearUsers.length > 0 && (
        <YearSeparator>{today.getFullYear() + 1}</YearSeparator>
      )}

      {nextYearUsers.map((user) => (
        <UserCard key={user.id} user={user} variant={variant} sortOption={sortOption} />
      ))}
    </List>
  );
};

export default UserListUI;
