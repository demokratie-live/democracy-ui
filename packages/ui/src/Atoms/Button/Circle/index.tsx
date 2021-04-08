import React from "react";
import * as S from "./Circle.styled";

export interface CircleButtonProps extends S.CircleProps {}

export const CircleButton: React.FC<CircleButtonProps> = ({
  color,
  size,
  children,
}) => <S.Circle {...{ color, size }}>{children}</S.Circle>;
