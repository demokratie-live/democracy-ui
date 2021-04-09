import styled from 'styled-components/native';
import { ThumbUpIcon as ThumbUpCmp } from '../../Icons/icons/ThumbUp';
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
  width: 60,
  height: 60,
})``;
