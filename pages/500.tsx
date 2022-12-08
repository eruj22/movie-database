import Head from "next/head";
import Link from "next/link";
import Styled from "../styles/pages/Custom404.styled";

const Custom500 = () => {
  return (
    <Styled.Main>
      <Head>
        <title>MDB - server error</title>
      </Head>
      <Styled.Wrapper>
        <Styled.Title>Server error</Styled.Title>
        <Link href="/">Go home</Link>
      </Styled.Wrapper>
    </Styled.Main>
  );
};

export default Custom500;
