import styled from "@emotion/styled";
import Link from "next/link";
import { colors, fontSizes } from "../variables";

const Back = styled(Link)({
  display: "flex",
  alignItems: "center",
  gap: 6,
  color: colors.yellow,
  width: "fit-content",
  padding: "8px 0",

  svg: {
    height: 20,
  },
});

const Title = styled.h1({
  color: colors.white,
  fontSize: fontSizes.title,
  margin: "20px 0 30px",
});

const Subtitle = styled.h2({
  color: colors.white,
  fontSize: fontSizes.subtitle,
});

const Flex = styled.div({
  display: "flex",
  justifyContent: "space-between",

  "@media(max-width: 1024px)": {
    flexDirection: "column",
    justifyContent: "unset",
  },
});

const CastWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 20,
});

const CrewWrapper = styled(CastWrapper)({
  marginRight: "10%",

  "@media(max-width: 1024px)": {
    marginRight: 0,
  },
});

// eslint-disable-next-line
export default {
  Back,
  CastWrapper,
  CrewWrapper,
  Flex,
  Subtitle,
  Title,
};
