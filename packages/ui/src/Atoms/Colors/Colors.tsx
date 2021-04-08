/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./Colors.styled";

export const Colors: React.FC = () => {
  const theme = useTheme();

  if (!theme) {
    return <div>no theme</div>;
  }

  const renderColorGroup = (colorGroup: any): React.ReactNodeArray => {
    return Object.keys(colorGroup).map((key) => {
      const colorItem = colorGroup[key];
      const color = typeof colorItem === "string" ? colorItem : undefined;
      if (color) {
        return (
          <>
            <S.ColorItemColor color={color} />
            <S.Text>{key}</S.Text>
            <S.Text>{color}</S.Text>
          </>
        );
      }
      return [
        <S.ColorGroupContainer key={key}>
          <S.GroupTitle>{key}</S.GroupTitle>{" "}
          <S.Group>{renderColorGroup(colorItem)}</S.Group>
        </S.ColorGroupContainer>,
      ];
    });
  };

  const renderColors = () => {
    const themeColors = theme.colors;
    return renderColorGroup(themeColors);
  };

  return (
    <ScrollView horizontal>
      <ScrollView>{renderColors()}</ScrollView>
      {/* <ScrollView>
        {colorGroups.map(({ title, colors }) => (
          <S.ColorGroupContainer key={title}>
            <S.GroupTitle>{title}</S.GroupTitle>
            <S.Group>
              {colors.map(({ title: colorTitle, color }) => (
                <S.ColorItem key={colorTitle}>
                  <S.ColorItemColor color={color} />
                  <S.Text>{colorTitle}</S.Text>
                  <S.Text>{color}</S.Text>
                </S.ColorItem>
              ))}
            </S.Group>
          </S.ColorGroupContainer>
        ))}
      </ScrollView> */}
    </ScrollView>
  );
};
