import Styled from "./DisplayCards.styled";

type DisplayMoviesProps = {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  gap?: number;
};

export const DisplayCards = (props: DisplayMoviesProps) => {
  const { children, gap, title } = props;

  return (
    <>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Wrapper gap={gap}>{children}</Styled.Wrapper>
    </>
  );
};
