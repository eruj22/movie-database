import Head from "next/head";
import Link from "next/link";
import Styled from "../styles/pages/Custom404.styled";

const Custom404 = () => {
  return (
    <Styled.Main>
      <Head>
        <title>MDB - page not found</title>
      </Head>
      <Styled.Wrapper>
        <Styled.Title>Page not found</Styled.Title>
        <Link href="/">Go home</Link>
      </Styled.Wrapper>
    </Styled.Main>
  );
};

export default Custom404;
