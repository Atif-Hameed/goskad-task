import { CustomLinkProps } from "@/app/types";
import Link from "next/link";
import React from "react";

const CustomLink: React.FC<CustomLinkProps> = ({
  href = "#",
  className = "",
  children,
  ariaLabel,
  title,
  target,
  onClick,
}) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      title={title}
      className={className}
      target={target}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
