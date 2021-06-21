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
  constituencyDeputy?: string;
  favorizedDeputies?: string[];
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
  item: { onPress, ...item },
}) => {
  const handleOnPress = () => {
    onPress(item.id);
  };

  return (
    <S.Touchable onPress={handleOnPress}>
      <DeputyListItem {...item} editMode={editMode} />
    </S.Touchable>
  );
};

export const DeputyList: React.FC<DeputyListProps> = ({
  deputies,
  editMode = false,
  constituencyDeputy,
  favorizedDeputies = [],
  ...props
}) => {
  const sections = deputies.reduce<SectionDataProps>(
    (prev, deputy) => {
      if (constituencyDeputy === deputy.id) {
        return prev.map((section) =>
          section.title === 'Favoriten'
            ? {
                ...section,
                data: [{ ...deputy, state: 'checked' }, ...section.data],
              }
            : section,
        );
      }
      if (favorizedDeputies.includes(deputy.id)) {
        return prev.map((section) =>
          section.title === 'Favoriten'
            ? {
                ...section,
                data: [...section.data, { ...deputy, state: 'favorized' }],
              }
            : section,
        );
      }
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
    },
    favorizedDeputies.length > 0 || constituencyDeputy
      ? [{ title: 'Favoriten', data: [] }]
      : [],
  );

  return (
    <S.DeputyList
      sections={sections}
      renderItem={renderItem({ editMode })}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={() => <Seperator />}
      renderSectionHeader={({ section }) => <Section title={section.title} />}
      {...props}
    />
  );
};
