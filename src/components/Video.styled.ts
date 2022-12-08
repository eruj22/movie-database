import styled from "@emotion/styled";

const Wrapper = styled.div({
  position: "relative",
  paddingBottom: "56.25%",
  height: 0,

  iframe: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
  },
});

// eslint-disable-next-line
export default {
  Wrapper,
};
