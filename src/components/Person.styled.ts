import styled from "@emotion/styled";
import { borderRadius, colors, fontSizes } from "../../styles/variables";

const Wrapper = styled.article({
  color: colors.white,
  display: "flex",
  gap: 20,
});

const Name = styled.span({
  fontWeight: 500,
  fontSize: fontSizes.basic,
});

const Role = styled.span({
  color: colors.grey,
});

const Image = styled.div({
  position: "relative",
  width: 80,
  height: 120,
  borderRadius: borderRadius.small,
  overflow: "hidden",
  flexShrink: 0,
});

const NoImage = styled.div({
  display: "flex",
  alignItems: "center",
  padding: "0 5px",
  width: 80,
  height: 120,
  backgroundColor: colors.noImage,
  color: colors.white,
  borderRadius: borderRadius.small,
});

const Info = styled.div({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: 6,
});

// eslint-disable-next-line
export default {
  Info,
  Image,
  Name,
  NoImage,
  Role,
  Wrapper,
};
