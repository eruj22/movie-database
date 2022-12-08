import styled from "@emotion/styled";
import {
  borderRadius,
  colors,
  fontSizes,
  transition,
} from "../../styles/variables";

const Wrapper = styled.div({
  position: "relative",
  minWidth: 260,

  "@media(max-width: 1024px)": {
    minWidth: "fit-content",
  },
});

const Menu = styled.ul<{ isOpen: boolean }>(({ isOpen }) => ({
  visibility: isOpen ? "visible" : "hidden",
  opacity: isOpen ? 1 : 0,
  transition: transition.short,
  position: "absolute",
  top: 38,
  zIndex: 3,
  backgroundColor: colors.backgroundLighter,
  borderRadius: borderRadius.small,
  padding: "4px 0",
}));

const Item = styled.li<{ selected: boolean }>(({ selected }) => ({
  display: "flex",
  alignItems: "center",
  gap: 6,
  padding: "4px",
  cursor: "pointer",
  fontSize: fontSizes.basic,

  "&:hover": {
    backgroundColor: colors.backgroundLighterHover,
  },

  svg: {
    width: 18,
    visibility: selected ? "visible" : "hidden",
  },
}));

// eslint-disable-next-line
export default {
  Item,
  Menu,
  Wrapper,
};
