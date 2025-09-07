import { MouseEventHandler, ReactNode } from "react";

export interface CustomImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
}

export interface ContainerProps {
    children: ReactNode;
    className?: string;
    parentStyle?: string;
    ref?: React.Ref<HTMLDivElement>;
}

export interface CustomLinkProps {
    href?: string;
    className?: string;
    children: ReactNode;
    ariaLabel?: string;
    title?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export type ButtonProps = {
  label?: string;
  loadingLabel?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  tabIndex?: number;
  ariaLebel?: string;
  title?: string;
};

export interface IconProps {
  color?: string;
  className?: string;
}


export interface SectionTitleProps {
  label: string
  className?: string
}

export interface Service {
    title: string;
    description: string;
    logos: Array<React.ComponentType<React.SVGProps<SVGSVGElement>>>; 
}