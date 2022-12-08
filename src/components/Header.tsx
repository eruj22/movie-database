import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Image from "next/image";

import Styled from "./Header.styled";
import { DropdownLink, DropdownMenu, DropdownSignOut } from "./Dropdown";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { SearchInputInHeader } from "./SearchInputInHeader";
import { HamburgerIcon } from "../icons/HamburgerIcon";
import { CloseIcon } from "../icons/CloseIcon";

export const Header = () => {
  const { data } = useSession();
  const { push, asPath, pathname } = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useOnClickOutside(menuRef, () => setIsDropdownOpen(false));

  const handleSignOut = () => signOut();
  const closeMobileDropdown = () => {
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 300);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
    closeMobileDropdown();
  };

  const handleSignIn = () => {
    closeMobileDropdown();

    if (!pathname.includes("/auth/signin")) {
      push(`/auth/signin?callback=${asPath}`);
    }
  };

  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.Logo>
          <Link href="/">MDB</Link>
        </Styled.Logo>

        <Styled.Nav>
          <SearchInputInHeader />
          <Styled.MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </Styled.MobileMenuButton>
          <Styled.NavMenu isOpen={isMobileMenuOpen}>
            <Styled.NavItem onClick={closeMobileDropdown}>
              <Link href="/movie">All Movies</Link>
            </Styled.NavItem>

            {data ? (
              <Styled.NavProfileIcon ref={menuRef}>
                <Styled.ProfileButton
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  noImage={!data.user?.image}
                >
                  {data.user?.image && (
                    <Image
                      src={data.user?.image}
                      alt={data.user?.name ?? ""}
                      fill
                    />
                  )}
                </Styled.ProfileButton>
                <DropdownMenu
                  isOpen={isDropdownOpen}
                  name={data.user?.name ?? undefined}
                >
                  <DropdownLink href="/profile" onClick={closeDropdown}>
                    Go to Profile
                  </DropdownLink>
                  <DropdownSignOut
                    onClick={() => {
                      closeDropdown();
                      handleSignOut();
                    }}
                  >
                    Sign Out
                  </DropdownSignOut>
                </DropdownMenu>
              </Styled.NavProfileIcon>
            ) : (
              <Styled.NavItem onClick={handleSignIn}>Login</Styled.NavItem>
            )}
          </Styled.NavMenu>
        </Styled.Nav>
      </Styled.Container>
    </Styled.Header>
  );
};
