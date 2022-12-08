import styled from "@emotion/styled";
import { borderRadius, colors } from "../../styles/variables";

const ActionsWrapper = styled.div({
  gridArea: "action",
  position: "relative",

  "&:hover > div": {
    display: "block",
  },

  "@media (max-width: 1024px)": {
    marginTop: 70,
  },

  "@media (max-width: 650px)": {
    marginTop: 50,
  },
});

const Flyout = styled.div({
  display: "none",
  position: "absolute",
  top: 50,
  right: -90,
  width: 230,
  backgroundColor: colors.backgroundLighter,
  borderRadius: borderRadius.small,
  padding: "10px",
  textAlign: "center",
  zIndex: 3,
});

const Action = styled.button<{ selected: boolean }>(({ selected }) => ({
  all: "unset",
  cursor: "pointer",
  backgroundColor: selected ? colors.yellow : colors.darkerRed,
  color: selected ? colors.background : colors.white,
  padding: "6px",
  borderRadius: "50%",
  width: 30,
  height: 30,
}));

// eslint-disable-next-line
export default {
  Action,
  ActionsWrapper,
  Flyout,
};
