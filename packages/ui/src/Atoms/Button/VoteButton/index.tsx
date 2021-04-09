import React from "react";
import * as S from "./VoteButton.styled";

export interface VoteButtonButtonProps extends S.VoteButtonProps {}

export const VoteButtonButton: React.FC<VoteButtonButtonProps> = ({
  color,
  size,
  children,
}) => <S.VoteButton {...{ color, size }}>{children}</S.VoteButton>;
