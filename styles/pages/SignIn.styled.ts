import styled from "@emotion/styled";
import { borderRadius, colors, fontSizes } from "../variables";

const Wrapper = styled.div({
  width: "fit-content",
  margin: "auto",
  maxWidth: "90%",
});

const Title = styled.h1({
  margin: "20px 0px 70px",
});

const Subtitle = styled.span({
  display: "block",
  fontSize: fontSizes.basic,
  maxWidth: 400,
  marginBottom: 80,
});

const Button = styled.button({
  all: "unset",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontSize: fontSizes.button,
  padding: "10px 26px",
  border: "1px solid transparent",
  borderRadius: borderRadius.small,

  "&:hover": {
    border: `1px solid ${colors.backgroundLighterHover}`,
  },
});

const IconWrapper = styled.div({
  position: "relative",
  width: 20,
  height: 20,
});

// eslint-disable-next-line
export default {
  Button,
  IconWrapper,
  Title,
  Subtitle,
  Wrapper,
};
