import styled from "@emotion/styled";
import { colors, fontSizes } from "../variables";

const Title = styled.h1({
  marginBottom: 70,
});

const NoMoviesFound = styled.div({
  marginTop: 70,
  fontSize: fontSizes.basic,
});

// eslint-disable-next-line
export default {
  NoMoviesFound,
  Title,
};
