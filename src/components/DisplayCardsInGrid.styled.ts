import styled from "@emotion/styled";

const Wrapper = styled.div<{ gap?: number }>(({ gap }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: gap ? gap : 30,
  margin: "60px 0",
}));

// eslint-disable-next-line
export default {
  Wrapper,
};
