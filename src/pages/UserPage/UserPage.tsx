import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import UserPageUI from "../../components/ui/pages/UserPageUI/UserPageUI";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getUsers } from "../../store/usersSlice";

export const UserPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    const { users, isLoading, error } = useAppSelector((state) => state.users);

    useEffect(() => {
        if (!users.length) {
            dispatch(getUsers());
        }
    }, [dispatch, users.length]);

    const user = users.find((u) => u.id === id);

    const userWithAge = useMemo(() => {
        if (!user) return null;

        const today = new Date();
        const birthDate = new Date(user.birthday);

        let age = today.getFullYear() - birthDate.getFullYear();

        if (
            today.getMonth() < birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() &&
                today.getDate() < birthDate.getDate())
        ) {
            age--;
        }

        return { ...user, age };
    }, [user]);

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка</div>;
    if (!userWithAge) return <div>Пользователь не найден</div>;

    return <UserPageUI user={userWithAge} />;
};
