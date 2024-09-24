import React from "react";

interface ButtonComponentProps {
    children: React.ReactNode;
    className?: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonComponent = ({ children, className = "", onClick }: ButtonComponentProps) => {
    return(
        <button 
        onClick={onClick}
        className={
        `text-2xl font-trade-winds text-white p-2 border rounded-full border-adihi-red border-1 bg-adihi-red 
        ${className}`
        }> 
            {children}
        </button>
    )
}