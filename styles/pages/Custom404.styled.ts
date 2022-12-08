import styled from "@emotion/styled";
import { colors, fontSizes } from "../variables";

const Main = styled.main({
  a: {
    color: colors.yellow,
    fontSize: fontSizes.basic,
  },
});

const Wrapper = styled.div({
  width: "fit-content",
  margin: "auto",
});

const Title = styled.h1({
  margin: "20px 0px 70px",
});

// eslint-disable-next-line
export default {
  Main,
  Title,
  Wrapper,
};
