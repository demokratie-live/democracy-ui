import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { DeputyListRenderItemProps } from './DeputyList';

export const DeputyList = styled(
  FlatList as new () => FlatList<DeputyListRenderItemProps>,
)``;

export const Touchable = styled.TouchableOpacity``;
