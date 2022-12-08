import { useSession, signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import Styled from "../../../styles/pages/SignIn.styled";

const SignIn = () => {
  const { data: session, status } = useSession();
  const { push, asPath } = useRouter();

  if (status === "loading") {
    return (
      <main>
        <Head>
          <title>MDB: Sign in</title>
        </Head>
        <Styled.Wrapper>
          <Styled.Title>Checking authentication...</Styled.Title>
        </Styled.Wrapper>
      </main>
    );
  }

  if (session) {
    const getPreviousPath = asPath.split("=")[1];
    push(`/${getPreviousPath}`);

    return (
      <main>
        <Head>
          <title>MDB: Sign in</title>
        </Head>
        <Styled.Wrapper>
          <Styled.Title>You are signed in</Styled.Title>
        </Styled.Wrapper>
      </main>
    );
  }

  const handleOAuthSignIn = (provider: string) => () => signIn(provider);

  return (
    <main>
      <Head>
        <title>MDB: Sign in</title>
      </Head>
      <Styled.Wrapper>
        <Styled.Title>Sign in</Styled.Title>
        <Styled.Subtitle>
          By signing in you wil get more personalized experience on our website.
        </Styled.Subtitle>
        <Styled.Button onClick={handleOAuthSignIn("google")}>
          <Styled.IconWrapper>
            <Image src="/assets/google-logo.ico" alt="" fill />
          </Styled.IconWrapper>
          Sign in with Google
        </Styled.Button>
      </Styled.Wrapper>
    </main>
  );
};

export default SignIn;
