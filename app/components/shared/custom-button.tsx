"use client";
import { ButtonProps } from "@/app/types";
import { Loader2 } from "lucide-react";
import React from "react";

const Button: React.FC<ButtonProps> = ({
    label = "Button",
    ariaLebel,
    onClick,
    className = "",
    type = "button",
    loadingLabel = "Loading...",
    disabled = false,
    loading = false,
    icon,
    tabIndex,
    iconPosition = "right",
    title,
}) => {
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
    ) => {
        if (onClick) {
            e.preventDefault(); // Prevent default behavior for forms when using "submit"
            onClick(e);
        }
    };

    return (
        <div className="font-alice">
            <button
                className={`py-2 font-alice btn cursor-pointer px-5 lg:text-base text-sm  font-medium w-fit justify-center  text-white  flex items-center hover:text-white duration-300 transition-all ${disabled ? "bg-opacity-50 cursor-not-allowed" : ""
                    } ${className}`}
                onClick={handleClick}
                disabled={disabled || loading}
                type={type}
                aria-busy={loading}
                tabIndex={tabIndex}
                aria-label={ariaLebel}
                title={title}
            >
                {loading ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin mr-2" />
                        <span>{loadingLabel}</span>
                    </>
                ) : (
                    <>
                        {icon && iconPosition === "left" && icon}
                        {label}
                        {icon && iconPosition === "right" && icon}
                    </>
                )}
            </button>
        </div>
    );
};

export default Button;
