import styled from "@emotion/styled";
import Link from "next/link";
import { borderRadius, colors, fontSizes } from "../variables";

const FlexWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 14,
});

const RatingWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 6,
});

const Rating = styled.span({
  color: colors.yellow,
  fontSize: fontSizes.subtitle,
});

const RatingTotal = styled.span({
  fontSize: fontSizes.button,
  opacity: 0.8,
});

const PopcornIconWrapper = styled.div({
  position: "relative",
  width: 50,
  height: 50,
});

const Title = styled.h1({
  fontSize: fontSizes.title,
});

const GridArea = styled.div({
  marginTop: 70,
  display: "grid",
  gridTemplateColumns: "1fr .9fr .9fr",
  gridTemplateAreas: `"info info info"
  "genres genres genres"
  "poster video video"`,

  "@media (max-width: 1024px)": {
    gridTemplateColumns: "340px 1fr",
    gridTemplateRows: "130px auto",
    gridTemplateAreas: `"poster info"
  "poster genres"
  "poster action"
  "video video"`,
  },

  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
  },

  "@media (max-width: 650px)": {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto",
    gap: 0,
    gridTemplateAreas: `"poster"
  "info"
  "genres"
  "action"
  "video"`,
  },
});

const Flex = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media (max-width: 1024px)": {
    flexDirection: "column",
    alignItems: "start",
    margin: "unset",
  },
});

const FlexBasicInfo = styled(Flex)({
  gridArea: "info",

  "@media (max-width: 650px)": {
    gap: 30,
  },
});

const FlexGenres = styled(Flex)({
  gridArea: "genres",
  margin: "20px 0 40px",

  "@media (max-width: 1024px)": {
    marginTop: 60,
  },

  "@media (max-width: 650px)": {
    marginTop: 30,
  },
});

const PosterWrapper = styled.div({
  position: "relative",
  width: 300,
  height: 450,
  borderRadius: borderRadius.small,
  overflow: "hidden",
  marginBottom: 10,

  "@media (max-width: 768px)": {
    width: "100%",
  },

  "@media (max-width: 650px)": {
    maxWidth: 350,
    height: 500,
    margin: "0 auto 10px",
  },
});

const PosterWithHeadline = styled.div({
  gridArea: "poster",

  "@media (max-width: 1024px)": {
    marginBottom: 70,
  },
});

const VideoWrapper = styled.div({
  gridArea: "video",
  width: "100%",
  maxWidth: 840,
  alignSelf: "center",

  "@media (max-width: 1024px)": {
    width: "100%",
    maxWidth: 600,
    marginTop: 100,
  },
});

const Genre = styled.span({
  border: `1px solid ${colors.white}`,
  borderRadius: borderRadius.medium,
  padding: "5px 12px",
  minWidth: "fit-content",
});

const Fact = styled.span({});

const Tagline = styled.span({
  fontSize: fontSizes.small,
  fontStyle: "italic",
  color: colors.grey,
});

const Overview = styled.div({
  paddingRight: "30%",
  minWidth: 450,

  p: {
    margin: 0,
  },

  "@media (max-width: 1024px)": {
    paddingRight: 0,
    maxWidth: 450,
    minWidth: "unset",
  },
});

const Subtitle = styled.div({
  fontSize: fontSizes.subtitle,
  marginBottom: 20,
});

const OverviewAndInfo = styled.div({
  marginTop: 150,
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",

  "@media (max-width: 1024px)": {
    display: "flex",
    flexDirection: "column",
    gap: 150,
  },
});

const CastWrapper = styled.div({
  marginTop: 150,
});

const CastFlex = styled.div({
  display: "flex",
  gap: 20,
  overflowX: "scroll",
  paddingBottom: 20,
  marginBottom: 20,
});

const Cast = styled.article({
  borderRadius: borderRadius.small,
  overflow: "hidden",
  minWidth: 140,
});

const CastName = styled.span({
  display: "block",
  margin: "10px 0 5px 0",
  fontSize: fontSizes.basic,
  fontWeight: 500,
});

const CastRole = styled.span({
  color: colors.grey,
});

const CastImage = styled.div({
  position: "relative",
  width: 140,
  height: 210,
});

const CastNoImage = styled.div({
  width: 140,
  height: 210,
  backgroundColor: colors.noImage,
  padding: "0 5px",
  color: colors.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CastAll = styled.div({
  display: "flex",
  alignItems: "center",
});

const GoToLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  gap: 6,
  minWidth: 80,
  width: "fit-content",
  color: colors.yellow,
  fontSize: fontSizes.basic,
  marginTop: 20,

  svg: {
    height: 20,
  },
});

const NoMovieWrapper = styled.main({
  fontSize: fontSizes.subtitle,
  textAlign: "center",
  paddingTop: "10vh",
});

// eslint-disable-next-line
export default {
  Cast,
  CastAll,
  CastFlex,
  CastImage,
  CastName,
  CastNoImage,
  CastRole,
  CastWrapper,
  Fact,
  FlexBasicInfo,
  FlexGenres,
  FlexWrapper,
  Genre,
  GoToLink,
  GridArea,
  NoMovieWrapper,
  Overview,
  OverviewAndInfo,
  PopcornIconWrapper,
  PosterWithHeadline,
  PosterWrapper,
  Rating,
  RatingTotal,
  RatingWrapper,
  Subtitle,
  Tagline,
  Title,
  VideoWrapper,
};
