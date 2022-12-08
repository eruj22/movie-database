import styled from "@emotion/styled";
import { borderRadius, colors, fontSizes } from "../variables";

const Title = styled.h1({
  margin: "20px 0px 70px",
});

const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(6,1fr)",
  gap: 20,
});

const NoMoviesFound = styled.p({
  fontSize: fontSizes.basic,
});

const Button = styled.button<{ variant?: "primary" | "secondary" }>(
  ({ variant }) => ({
    all: "unset",
    cursor: "pointer",
    borderRadius: borderRadius.small,
    fontSize: fontSizes.button,
    padding: "6px 20px",
    backgroundColor: variant === "primary" ? colors.yellow : "transparent",
    color: variant === "primary" ? colors.background : colors.white,
    opacity: variant === "secondary" ? 0.5 : 1,
    display: "flex",
    alignItems: "center",
    gap: 6,
    border: "1px solid transparent",

    "&:hover": {
      border:
        variant !== "primary"
          ? `1px solid ${colors.backgroundLighterHover}`
          : "1px solid transparent",
      backgroundColor:
        variant === "primary" ? colors.yellowHover : "transparent",
    },

    "&:active, &:focus": {
      backgroundColor:
        variant === "primary" ? colors.yellowPressed : "transparent",
    },

    svg: {
      height: 20,
    },
  })
);

const NoData = styled.div({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginTop: 150,
  fontSize: fontSizes.button,
});

// eslint-disable-next-line
export default {
  Button,
  Grid,
  NoData,
  NoMoviesFound,
  Title,
};
