import React from "react";
import { useTheme } from "styled-components/native";
import { DefaultTheme } from "../../theme";
import * as S from "./Button.styled";

type Variants = "primary" | "secondary" | "danger" | "danger-secondary";
export interface ButtonProps {
  children: string;
  variant: Variants;
}

const getVariant = (variant: Variants, theme: DefaultTheme) => {
  const variants = {
    primary: {
      colors: {
        background: theme.colors.primary,
        label: theme.colors.text.secondary,
      },
    },
    secondary: {
      colors: {
        background: theme.colors.background.primary,
        label: theme.colors.text.colored,
      },
    },
    danger: {
      colors: {
        background: theme.colors.text.danger,
        label: theme.colors.text.secondary,
      },
    },
    "danger-secondary": {
      colors: {
        background: theme.colors.background.primary,
        label: theme.colors.text.danger,
      },
    },
  } as const;

  return variants[variant];
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const theme = useTheme();

  const variantData = getVariant(variant, theme);

  return (
    <S.Button color={variantData.colors.background} {...props}>
      <S.Label color={variantData.colors.label}>{children}</S.Label>
    </S.Button>
  );
};
