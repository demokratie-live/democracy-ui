import React from 'react';
import { Meta } from '@storybook/react';
import { Text } from 'react-native';
import { Foldable, FoldableProps } from './Foldable';

export default {
  component: Foldable,
  title: 'Atoms/Foldable',
} as Meta;

export const Default = Foldable.bind({});

Default.args = {
  title: 'Default',
  opened: true,
  children: <Text>Test</Text>,
} as FoldableProps;
