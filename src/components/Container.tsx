import React from "react";
import Styled from "./Container.styled";

export const Container = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
