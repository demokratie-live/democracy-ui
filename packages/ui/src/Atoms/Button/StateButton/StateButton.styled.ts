import { SvgProps, Svg } from 'react-native-svg';
import styled from 'styled-components/native';
import { CircleButton as CircleButtonCmp } from '../Circle';

export const CircleButton = styled(CircleButtonCmp)`
  justify-content: center;
  align-items: center;
`;
export interface StateButtonProps {
  size: number;
  color: string;
}

interface IconProps extends SvgProps {
  size: number;
  color: string;
  as: React.ReactNode;
}

type IconCmp = React.FC<IconProps>;

export const Icon = styled(Svg as Svg & IconCmp).attrs(
  ({ size, color, as }: IconProps) => ({
    as,
    width: size,
    height: size,
    fill: color,
  }),
)<IconProps>`` as IconCmp;
