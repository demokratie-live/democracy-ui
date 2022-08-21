import styled from 'styled-components/native';

export type Variant = 'primary' | 'secondary' | 'danger' | 'danger-secondary';

export interface ButtonProps {
  color: string;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  align-self: stretch;
  align-items: center;
  justify-content: center;
  border-color: ${({ color }) => `${color}CC`};
  background-color: ${({ color }) => `${color}`};
  padding-vertical: ${({ theme }) => theme.spaces.default};
`;

export const Label = styled.Text<ButtonProps>`
  font-size: ${({ theme }) => theme.fontSizes.default};
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${({ color }) => `${color}`};
`;
