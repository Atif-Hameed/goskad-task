"use client";
import { ButtonProps } from "@/app/types";
import { ArrowRight, ChevronRight, Loader2 } from "lucide-react";
import React from "react";

const NavigateButton: React.FC<ButtonProps> = ({
    label = "Button",
    ariaLebel,
    onClick,
    className = "",
    type = "button",
    loadingLabel = "Loading...",
    disabled = false,
    loading = false,
    tabIndex,
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
        <div className="font-helveticaNeue gap-1">
            <button
                className={`group relative py-2 font-helveticaNeue gap-1 btn cursor-pointer px-5 lg:text-base text-sm  w-fit justify-center  flex items-center  duration-300 transition-all ${disabled ? "bg-opacity-50 cursor-not-allowed" : ""
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
                        <span className="">{label}</span>

                        {/* Chevron (default) */}
                        <ChevronRight
                            className="h-4 w-4 transform transition-all  opacity-100 translate-x-0 group-hover:opacity-0 "
                        />

                        {/* Arrow (on hover) */}
                        <ArrowRight
                            className="h-4 w-4 absolute right-5 transform transition-all  opacity-0 translate-x-0 group-hover:opacity-100 "
                        />
                    </>
                )}
            </button>
        </div>
    );
};

export default NavigateButton;
