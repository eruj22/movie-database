import styled from "@emotion/styled";
import {
  transition,
  borderRadius,
  colors,
  fontSizes,
  lineHeight,
} from "../../styles/variables";

const Wrapper = styled.article({
  borderRadius: borderRadius.small,
  overflow: "hidden",
  transition: transition.short,
  minWidth: 220,
  border: `1px solid ${colors.background}`,
  maxWidth: 250,
  margin: "auto",

  "&:hover": {
    border: `1px solid ${colors.yellow}`,
  },
});

const NoImage = styled.div({
  width: "100%",
  height: 300,
  backgroundColor: colors.noImage,
  color: colors.white,
  padding: "0 5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Info = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 6,
  padding: 10,
});

const RatingWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

const Rating = styled.div({
  fontSize: 30,
  color: colors.yellow,
});

const PopcornIconWrapper = styled.div({
  position: "relative",
  width: 40,
  height: 40,
});

const Title = styled.span({
  color: colors.white,
  fontWeight: 600,
  fontSize: fontSizes.basic,
  lineHeight: lineHeight.basic,
});

const Date = styled.span({
  color: colors.white,
  fontSize: fontSizes.small,
  lineHeight: lineHeight.small,
});

// eslint-disable-next-line
export default {
  Date,
  Info,
  NoImage,
  PopcornIconWrapper,
  Rating,
  RatingWrapper,
  Title,
  Wrapper,
};
