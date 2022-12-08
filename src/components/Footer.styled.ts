import styled from "@emotion/styled";
import { colors } from "../../styles/variables";

const Wrapper = styled.footer({
  backgroundColor: colors.background,
  color: colors.white,
  padding: "40px 10px",

  a: {
    display: "inline-block",
    color: colors.yellow,

    "&:hover": {
      cursor: "pointer",
      transform: "translateY(-1px)",
      borderBottom: `1px solid ${colors.yellow}`,
    },
  },
});

const Content = styled.div({
  width: "90%",
  maxWidth: "fit-content",
  margin: "auto",
});

// eslint-disable-next-line
export default {
  Content,
  Wrapper,
};
