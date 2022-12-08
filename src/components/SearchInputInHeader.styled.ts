import styled from "@emotion/styled";
import Link from "next/link";
import { borderRadius, colors, transition } from "../../styles/variables";

const Wrapper = styled.form({
  position: "relative",
  color: colors.background,
  width: "35%",
  minWidth: "270px",
  height: 36,
  display: "flex",
  flexDirection: "row-reverse",

  "@media (max-width: 450px)": {
    width: "100%",
    minWidth: "160px",
  },
});

const Input = styled.input<{ isShown: boolean }>(({ isShown }) => ({
  visibility: isShown ? "visible" : "hidden",
  transition: transition.short,
  width: isShown ? "100%" : "0%",
  padding: "10px 40px 10px 20px",
  backgroundColor: isShown ? colors.white : "transparent",
  borderRadius: borderRadius.medium,
  border: "none",
}));

const IconButton = styled.button<{ isShown: boolean }>(({ isShown }) => ({
  all: "unset",
  cursor: "pointer",
  position: "absolute",
  top: 2,
  right: 6,
  width: 24,
  height: 24,
  color: isShown ? colors.background : colors.yellow,
  borderRadius: "50%",
  padding: 4,
}));

const AutocompleteMenu = styled.ul<{ show: boolean }>(({ show }) => ({
  position: "absolute",
  top: 26,
  width: "100%",
  display: show ? "flex" : "none",
  flexDirection: "column",
  gap: 4,
  backgroundColor: colors.white,
  color: colors.background,
  padding: "2px 0",
  borderRadius: borderRadius.small,
  zIndex: 2,
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
  padding: 6,
});

// eslint-disable-next-line
export default {
  AutocompleteItem,
  AutocompleteLink,
  AutocompleteMenu,
  IconButton,
  Input,
  Wrapper,
};
