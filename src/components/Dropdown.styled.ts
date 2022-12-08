import styled from "@emotion/styled";
import {
  borderRadius,
  colors,
  fontSizes,
  transition,
} from "../../styles/variables";

const Wrapper = styled.div<{ isOpen: boolean }>(({ isOpen }) => ({
  visibility: isOpen ? "visible" : "hidden",
  opacity: isOpen ? 1 : 0,
  position: "absolute",
  top: 40,
  right: 0,
  width: "max-content",
  backgroundColor: colors.backgroundLighter,
  borderRadius: borderRadius.small,
  textAlign: "center",
  color: colors.white,
  fontSize: fontSizes.basic,
  transition: transition.short,
}));

const Name = styled.div({
  padding: "20px",
  marginBottom: 4,
  borderBottom: `1px solid ${colors.grey}`,
});

const ButtonReset = styled.button({
  all: "unset",
  cursor: "pointer",
});

const SignIn = styled(ButtonReset)({});

const SignOut = styled(ButtonReset)({
  width: "100%",
  padding: "6px 0",
  borderTop: `1px solid ${colors.grey}`,
  margin: "4px 0",
  borderBottomLeftRadius: borderRadius.small,
  borderBottomRightRadius: borderRadius.small,

  "&:hover": {
    backgroundColor: colors.backgroundLighterHover,
  },
});

const LinkWrapper = styled.div({
  "&& a": {
    display: "block",
    padding: "6px",
    color: colors.white,
    borderRadius: borderRadius.small,

    "&:hover": {
      backgroundColor: colors.backgroundLighterHover,
    },
  },
});

// eslint-disable-next-line
export default {
  LinkWrapper,
  Name,
  SignIn,
  SignOut,
  Wrapper,
};
