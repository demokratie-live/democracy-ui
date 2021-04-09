import React from "react";
import * as S from "./Button.styled";

export interface ButtonProps {
  children: string;
  variant: "primary" | "secondary" | "danger" | "danger-secondary";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <S.Button variant={variant} {...props}>
      <S.Label variant={variant}>{children}</S.Label>
    </S.Button>
  );
};
