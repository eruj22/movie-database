import Link from "next/link";
import Styled from "./Footer.styled";

const Footer = () => {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        Made by{" "}
        <Link href="https://github.com/eruj22" target="_blank">
          eruj22
        </Link>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Footer;
