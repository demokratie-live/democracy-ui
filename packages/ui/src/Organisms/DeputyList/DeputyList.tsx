import React from 'react';
import * as S from './DeputyList.styled';
import {
  DeputyListItem,
  DeputyListItemProps,
} from '../../Molecules/DeputyListItem';
import { FlatList, ListRenderItem } from 'react-native';
import { Seperator } from '../../Atoms/ListItem/Seperator';

export interface DeputyListRenderItemProps extends DeputyListItemProps {
  id: string;
  onPress: (id: string) => void;
}

export interface DeputyListProps extends FlatList<DeputyListRenderItemProps> {
  deputies: DeputyListRenderItemProps[];
}

const renderItem: ListRenderItem<DeputyListRenderItemProps> = ({ item }) => {
  const onPress = () => {
    console.log('onPress', item.id);
    item.onPress(item.id);
  };

  return (
    <S.Touchable onPress={onPress}>
      <DeputyListItem {...item} />
    </S.Touchable>
  );
};

export const DeputyList: React.FC<DeputyListProps> = ({
  deputies,
  ...props
}) => {
  return (
    <S.DeputyList
      data={deputies}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={() => <Seperator />}
      {...props}
    />
  );
};
