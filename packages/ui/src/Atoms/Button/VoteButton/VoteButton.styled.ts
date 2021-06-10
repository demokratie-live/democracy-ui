import styled from 'styled-components/native';
import ThumbUpCmp from '../../Icons/icon/ThumbUp';
import { CircleButton as CircleButtonCmp } from '../Circle';

export const CircleButton = styled(CircleButtonCmp)`
  justify-content: center;
  align-items: center;
`;
export interface VoteButtonProps {
  size: number;
  color: string;
}

export const ThumbUp = styled(ThumbUpCmp).attrs({
  width: 45,
  height: 45,
})<{ rotation: number }>`
  transform: ${({ rotation }) => `rotate(${String(rotation)}deg)`};
`;
