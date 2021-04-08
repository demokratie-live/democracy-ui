import styled, { css } from "styled-components/native";

export type Variant = "primary" | "secondary" | "danger" | "danger-secondary";

export interface ButtonProps {
  variant: Variant;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: 40px;

  align-items: center;
  justify-content: center;
  ${({ theme, variant }) => {
    switch (variant) {
      case "secondary":
        return css`
          border-color: ${theme.colors.background.primary}CC;
          background-color: ${theme.colors.background.primary};
        `;
      case "danger":
        return css`
          border-color: ${theme.colors.text.danger}CC;
          background-color: ${theme.colors.text.danger};
        `;
      case "danger-secondary":
        return css`
          border-color: ${theme.colors.background.primary}CC;
          background-color: ${theme.colors.background.primary};
        `;

      case "primary":
      default:
        return css`
          border-color: ${theme.colors.primary}CC;
          background-color: ${theme.colors.primary};
        `;
    }
  }}
`;

export const Label = styled.Text<ButtonProps>`
  font-size: ${({ theme }) => theme.fontSizes.default};
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;

  ${({ theme, variant }) => {
    switch (variant) {
      case "secondary":
        return css`
          color: ${theme.colors.text.colored};
        `;
      case "danger":
        return css`
          color: ${theme.colors.text.secondary};
        `;
      case "danger-secondary":
        return css`
          color: ${theme.colors.text.danger};
        `;

      case "primary":
      default:
        return css`
          color: ${theme.colors.text.secondary};
        `;
    }
  }}
`;
