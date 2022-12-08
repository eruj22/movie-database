import Styled from "./DisplayCardsInGrid.styled";

type DisplayMoviesProps = {
  children: React.ReactNode | React.ReactNode[];
  gap?: number;
};

export const DisplayCardsInGrid = (props: DisplayMoviesProps) => {
  const { children, gap } = props;

  return <Styled.Wrapper gap={gap}>{children}</Styled.Wrapper>;
};
