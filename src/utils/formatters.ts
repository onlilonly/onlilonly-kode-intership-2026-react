export const formattedDate = (date: Date, locale = "ru-RU") =>
    date.toLocaleDateString(locale, { day: "numeric", month: "long" });

export const formattedPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, "");
    return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)} ${digits.slice(7, 9)} ${digits.slice(9, 11)}`;
};

export const formattedAge = (age: number) => {
    if (!age && age !== 0) return "Младенец";
    const lastDigit = age % 10;
    const lastTwoDigits = age % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) return `${age} год`;
    if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits))
        return `${age} года`;
    return `${age} лет`;
};
