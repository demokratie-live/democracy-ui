import { SectionList } from 'react-native';
import styled from 'styled-components/native';
import { DeputyListRenderItemProps } from './DeputyList';

export const DeputyList = styled(
  SectionList as new () => SectionList<DeputyListRenderItemProps>,
)``;

export const Touchable = styled.TouchableOpacity``;
