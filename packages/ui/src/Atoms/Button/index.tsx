import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { DefaultTheme } from '../../theme';
import * as S from './Button.styled';

type Variants = 'primary' | 'secondary' | 'danger' | 'danger-secondary';
export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  variant: Variants;
  disabled?: boolean;
}

const getVariant = (variant: Variants, disabled: boolean, theme: DefaultTheme) => {
  const variants = {
    primary: {
      colors: {
        background: !disabled ? theme.colors.primary: theme.colors.text.seperator,
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
    'danger-secondary': {
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
  variant = 'primary',
  disabled = false,
  ...props
}) => {
  const theme = useTheme();

  const variantData = getVariant(variant, disabled, theme);

  return (
    <S.Button color={variantData.colors.background} disabled={disabled} {...props}>
      <S.Label color={variantData.colors.label}>{children}</S.Label>
    </S.Button>
  );
};
