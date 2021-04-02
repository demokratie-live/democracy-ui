/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./Colors.styled";

interface Color {
  title: string;
  color: string;
}

interface ColorGroup {
  title: string;
  colors: Color[];
}

export const Colors: React.FC = () => {
  const theme = useTheme();

  if (!theme) {
    return <div>no theme</div>;
  }

  const colorGroups = Object.keys(theme.colors).reduce<ColorGroup[]>(
    (prev, color) => {
      if (typeof (theme.colors as any)[color] === "string") {
        const main: ColorGroup = prev.find(({ title }) => title === "main") || {
          title: "main",
          colors: [],
        };

        const restColors = prev.filter(({ title }) => title !== "main");
        return [
          ...restColors,

          {
            ...main,
            colors: [
              ...main.colors,
              { title: color, color: (theme.colors as any)[color] },
            ],
          },
        ];
      }
      return [
        ...prev,
        {
          title: color,
          colors: Object.keys((theme.colors as any)[color]).map((title) => ({
            title,
            color: (theme.colors as any)[color][title],
          })),
        },
      ];
    },
    [] as ColorGroup[]
  );

  return (
    <ScrollView horizontal>
      <ScrollView>
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
      </ScrollView>
    </ScrollView>
  );
};
