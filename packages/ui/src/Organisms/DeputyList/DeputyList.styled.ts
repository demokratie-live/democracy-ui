import { SectionList } from 'react-native';
import styled from 'styled-components/native';
import {
  DeputyListRenderItemProps,
  DeputyListSectionProps,
} from './DeputyList';

export const DeputyList = styled(
  SectionList as new () => SectionList<
    DeputyListRenderItemProps,
    DeputyListSectionProps
  >,
)``;

export const Touchable = styled.TouchableOpacity``;
