import styled from "@emotion/styled";

import { colors, fontSizes } from "../../styles/variables";

const Header = styled.div({
  backgroundColor: colors.redHeader,
  padding: "12px 0",
});

const Container = styled.div({
  maxWidth: "1600px",
  width: "90%",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Logo = styled.span({
  margin: "0 10px 0 0",
  fontSize: 30,

  a: {
    color: colors.white,
  },
});

const Nav = styled.nav({
  display: "flex",
  alignItems: "center",
  gap: 10,
  width: "100%",
  justifyContent: "end",
});

const NavMenu = styled.ul<{ isOpen: boolean }>(({ isOpen }) => ({
  display: "flex",
  alignItems: "center",
  gap: 30,
  margin: 0,

  "@media (max-width: 768px)": {
    display: isOpen ? "flex" : "none",
    opacity: isOpen ? 1 : 0,
    position: "fixed",
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
    zIndex: 1,
  },
}));

const NavItem = styled.li({
  whiteSpace: "nowrap",
  fontSize: fontSizes.basic,
  cursor: "pointer",
  color: colors.yellow,

  a: {
    color: colors.yellow,
  },

  "&:hover": {
    cursor: "pointer",
    borderBottom: `1px solid ${colors.yellow}`,
  },

  "@media (max-width: 768px)": {
    fontSize: fontSizes.button,

    a: {
      fontSize: fontSizes.button,
    },
  },
});

const NavProfileIcon = styled.li({
  position: "relative",
});

const ButtonReset = styled.button({
  all: "unset",
  cursor: "pointer",
});

const ProfileButton = styled(ButtonReset)<{ noImage?: boolean }>(
  ({ noImage }) => ({
    position: "relative",
    width: 30,
    height: 30,
    backgroundColor: noImage ? colors.noImage : "transparent",

    img: {
      borderRadius: "50%",
    },
  })
);

const MobileMenuButton = styled.button({
  all: "unset",
  cursor: "pointer",
  width: 30,
  height: 30,
  color: colors.white,

  "@media (min-width: 769px)": {
    display: "none",
  },
});

// eslint-disable-next-line
export default {
  Container,
  Header,
  Logo,
  MobileMenuButton,
  Nav,
  NavItem,
  NavMenu,
  NavProfileIcon,
  ProfileButton,
};
