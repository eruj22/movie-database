import Link from "next/link";
import Styled from "./Dropdown.styled";

type DropdownButtonProps = {
  onClick: () => void;
  children: string;
};

export const DropdownSignIn = (props: DropdownButtonProps) => {
  const { children, onClick } = props;

  return <Styled.SignIn onClick={onClick}>{children}</Styled.SignIn>;
};

export const DropdownSignOut = (props: DropdownButtonProps) => {
  const { children, onClick } = props;

  return <Styled.SignOut onClick={onClick}>{children}</Styled.SignOut>;
};

type DropdownLinkProps = {
  children: string;
  href: string;
  onClick?: () => void;
};

export const DropdownLink = (props: DropdownLinkProps) => {
  const { children, onClick, href } = props;
  return (
    <Styled.LinkWrapper onClick={onClick}>
      <Link href={href}>{children}</Link>
    </Styled.LinkWrapper>
  );
};

type DropdownMenuProps = {
  children: React.ReactNode | React.ReactNode[];
  isOpen: boolean;
  name?: string;
};

export const DropdownMenu = (props: DropdownMenuProps) => {
  const { children, isOpen, name } = props;
  const getFirstName = name?.split(" ")[0];

  return (
    <Styled.Wrapper isOpen={isOpen}>
      <Styled.Name>Hello, {name ? getFirstName : "Unknown"}</Styled.Name>
      {children}
    </Styled.Wrapper>
  );
};
