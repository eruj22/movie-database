import styled from "@emotion/styled";

import { colors, fontSizes } from "../variables";

const Hero = styled.section({
  backgroundImage: "url(/assets/hero.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "90vh",
  maxHeight: "800px",
  paddingTop: "10px",
});

const Title = styled.h1({
  fontSize: fontSizes.heroTitle,
  color: colors.white,
});

const MoviesWrapper = styled.div({
  transform: "translateY(-20vh)",

  "h2:nth-of-type(2)": {
    marginTop: 200,
  },
});

// eslint-disable-next-line
export default {
  Hero,
  MoviesWrapper,
  Title,
};
