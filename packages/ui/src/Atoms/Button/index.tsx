import React from "react";
import { useTheme } from "styled-components/native";
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
  const theme = useTheme();
  console.log("theme", theme);
  return (
    <S.Button variant={variant} {...props}>
      <S.Label variant={variant}>{children}</S.Label>
    </S.Button>
  );
};
