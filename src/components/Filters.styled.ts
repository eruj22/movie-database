import styled from "@emotion/styled";

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "@media(max-width: 1024px)": {
    flexDirection: "column",
    gap: 20,
  },
});

const Flex = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

const FlexFilters = styled(Flex)({
  "@media(max-width: 1024px)": {
    justifyContent: "space-between",
    width: "100%",
  },

  "@media(max-width: 768px)": {
    flexDirection: "column",
    alignItems: "start",
  },
});

const FlexSubmit = styled(Flex)({
  "@media(max-width: 1024px)": {
    justifyContent: "end",
    width: "100%",
  },
});

// eslint-disable-next-line
export default {
  FlexFilters,
  FlexSubmit,
  Wrapper,
};
