import styled from "@emotion/styled";
import Link from "next/link";
import {
  transition,
  borderRadius,
  colors,
  fontSizes,
  lineHeight,
} from "../../styles/variables";

const Wrapper = styled.form({
  position: "relative",
  color: colors.background,
});

const Input = styled.input({
  width: "100%",
  padding: "10px 140px 10px 44px",
  fontSize: fontSizes.basic,
  lineHeight: lineHeight.basic,
  backgroundColor: colors.white,
  borderRadius: borderRadius.medium,
  border: "none",
  transition: transition.short,

  "&:focus": {
    transform: "scale(1.01)",
  },

  "&:focus + div": {
    transform: "translateX(-6px)",
  },

  "&:focus ~ button": {
    transform: "translateX(6px)",
  },

  "@media (max-width: 769px)": {
    fontSize: "1rem",
    lineHeight: "1.125rem",
    padding: `10px 95px 10px 44px`,

    "&:focus + div": {
      transform: "translateX(-3px)",
    },

    "&:focus ~ button": {
      transform: "translateX(3px)",
    },
  },
});

const Button = styled.button({
  all: "unset",
  position: "absolute",
  right: 0,
  fontSize: fontSizes.button,
  lineHeight: "26px",
  borderRadius: borderRadius.medium,
  padding: "9px 26px",
  backgroundColor: colors.yellow,
  cursor: "pointer",
  transition: transition.short,

  "&:hover": {
    backgroundColor: colors.yellowHover,
  },

  "&:active, &:focus": {
    backgroundColor: colors.yellowPressed,
  },

  "&:focus": {
    transform: "translateX(6px)",
  },

  "@media (max-width: 769px)": {
    padding: "6px 14px",
  },
});

const IconWrapper = styled.div({
  position: "absolute",
  top: 10,
  left: 10,
  width: 24,
  height: 24,
  pointerEvents: "none",
  transition: transition.short,

  "@media (max-width: 769px)": {
    top: 7,
  },
});

const AutocompleteMenu = styled.ul<{ show: boolean }>(({ show }) => ({
  position: "absolute",
  top: 30,
  width: "100%",
  display: show ? "flex" : "none",
  flexDirection: "column",
  gap: 4,
  backgroundColor: colors.white,
  color: colors.background,
  padding: "2px 0",
  borderRadius: borderRadius.small,
  zIndex: 2,
  fontSize: fontSizes.basic,
}));

const AutocompleteItem = styled.li({
  cursor: "pointer",

  "&:hover": {
    backgroundColor: colors.whiteHover,
  },

  "&:active": {
    backgroundColor: colors.whitePressed,
  },
});

const AutocompleteLink = styled(Link)({
  display: "block",
  padding: 10,
});

// eslint-disable-next-line
export default {
  AutocompleteItem,
  AutocompleteLink,
  AutocompleteMenu,
  Button,
  IconWrapper,
  Input,
  Wrapper,
};
