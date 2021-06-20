import { SectionList } from 'react-native';
import styled from 'styled-components/native';
import { DeputyListRenderItemProps, SectionProps } from './DeputyList';

export const DeputyList = styled(
  SectionList as new () => SectionList<DeputyListRenderItemProps, SectionProps>,
)``;

export const Touchable = styled.TouchableOpacity``;
