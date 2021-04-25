import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const VoteResultsWrapper = styled.View`
  align-items: center;
`;

export const VoteResultNumbers = styled.View`
  width: ${() => Dimensions.get('window').width - 18 * 2}px;
  max-width: 464px;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 18px;
  height: 40px;
`;

export const VoteResult = styled.View`
  justify-content: center;
  align-items: center;
`;

export const VoteResultCircleNumber = styled.View`
  flex-direction: row;
`;

export const VoteResultNumber = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 12px;
  padding-top: 1px;
`;
export const VoteResultLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 12px;
  padding-top: 6px;
`;

export const VoteResultCircle = styled.View<{ color: string }>`
  width: 11px;
  height: 11px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  margin-top: 3px;
  margin-right: 5px;
`;
