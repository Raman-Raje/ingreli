// /src/components/NamedAvatar.tsx
import React from "react";

const stringToColor = (string) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
};

const getInitials = (name) => {
    const parts = name.trim().split(" ");
    return parts.length > 1 ? `${parts[0][0]}${parts[1][0]}` : `${parts[0][0]}`;
};

const NamedAvatar = ({ fullName, size = "w-12 h-12" }) => {
    const bgColor = stringToColor(fullName);
    const initials = getInitials(fullName);

    return (
        <div
            className={`rounded-full flex items-center justify-center text-white font-medium uppercase ${size}`}
            style={{ backgroundColor: bgColor }}
        >
            {initials}
        </div>
    );
};

export default NamedAvatar;
