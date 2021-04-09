import React from "react";
import { ButtonProps, Button } from ".";

export const ButtonStory: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
