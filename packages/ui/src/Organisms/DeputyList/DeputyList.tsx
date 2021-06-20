import React from 'react';
import * as S from './DeputyList.styled';
import {
  DeputyListItem,
  DeputyListItemProps,
} from '../../Molecules/DeputyListItem';
import { ListRenderItem, SectionListData } from 'react-native';
import { Seperator } from '../../Atoms/ListItem/Seperator';
import { Section } from '../../Atoms/ListItem/Section';

export interface DeputyListRenderItemProps extends DeputyListItemProps {
  id: string;
  onPress: (id: string) => void;
}

export interface DeputyListProps {
  deputies: DeputyListRenderItemProps[];
  editMode?: boolean;
}

export interface DeputyListSectionProps {
  title: string;
}

export type SectionDataProps = SectionListData<
  DeputyListRenderItemProps,
  DeputyListSectionProps
>[];

const renderItem: ({
  editMode,
}: {
  editMode?: boolean;
}) => ListRenderItem<DeputyListRenderItemProps> = ({ editMode = false }) => ({
  item,
}) => {
  const onPress = () => {
    console.log('onPress', item.id);
    item.onPress(item.id);
  };

  return (
    <S.Touchable onPress={onPress}>
      <DeputyListItem {...item} editMode={editMode} />
    </S.Touchable>
  );
};

export const DeputyList: React.FC<DeputyListProps> = ({
  deputies,
  editMode = false,
  ...props
}) => {
  const sections = deputies.reduce<SectionDataProps>((prev, deputy) => {
    const sectionTitle = deputy.title.slice(0, 1);
    const sectionExists = prev.some(({ title }) => title === sectionTitle);
    if (sectionExists) {
      return prev.map((section) =>
        section.title === sectionTitle
          ? { ...section, data: [...section.data, deputy] }
          : section,
      );
    }
    return [
      ...prev,
      {
        title: sectionTitle,
        data: [deputy],
      },
    ];
  }, []);

  return (
    <S.DeputyList
      sections={sections}
      // data={deputies}
      renderItem={renderItem({ editMode })}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={() => <Seperator />}
      renderSectionHeader={({ section }) => <Section title={section.title} />}
      {...props}
    />
  );
};
