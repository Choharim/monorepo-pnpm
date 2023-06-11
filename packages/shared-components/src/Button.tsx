import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface Props extends React.ComponentProps<"button"> {
  variant: "primary" | "secondary";
}
const Button = ({ variant, children, ...attributes }: Props) => {
  return (
    <StyledButton {...attributes} variant={variant}>
      {variant} Button
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<Pick<Props, "variant">>`
  ${({ variant }) =>
    variant === "primary"
      ? css`
          border: 1px solid red;
        `
      : css`
          border: 1px solid blue;
        `}
`;
