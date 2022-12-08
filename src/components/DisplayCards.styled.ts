import styled from "@emotion/styled";
import { colors, fontSizes } from "../../styles/variables";

const Wrapper = styled.div<{ gap?: number }>(({ gap }) => ({
  display: "flex",
  gap: gap ? gap : 30,
  overflowX: "scroll",
  paddingBottom: 20,
}));

const Title = styled.h2({
  color: colors.white,
  fontSize: fontSizes.subtitle,
  margin: 0,
  paddingBottom: 30,
});

// eslint-disable-next-line
export default {
  Title,
  Wrapper,
};
