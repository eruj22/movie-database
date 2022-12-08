import styled from "@emotion/styled";
import { colors, fontSizes } from "../variables";

const Main = styled.main({
  a: {
    color: colors.yellow,
  },
});

const Title = styled.h1({
  margin: "20px 0px 70px",
});

const Subtitle = styled.span({
  display: "block",
  fontSize: fontSizes.basic,
  paddingBottom: 20,

  a: {
    display: "inline-block",
    color: colors.yellow,

    "&:hover": {
      cursor: "pointer",
      transform: "translateY(-1px)",
      borderBottom: `1px solid ${colors.yellow}`,
    },
  },
});

const WatchlistWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 20,
});

// eslint-disable-next-line
export default {
  Main,
  Subtitle,
  Title,
  WatchlistWrapper,
};
