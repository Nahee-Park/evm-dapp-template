import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Head from 'next/head';

const Feed: NextPage = () => {
  return (
    <Styled.Page>
      <Head>
        <title>Scam Scan</title>
        <meta name="description" content="Scan Scab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Styled.Page>
  );
};

export default Feed;

const Styled = {
  Page: styled.div`
    width: 100vw;
    & > * {
      width: 100%;
    }
  `,
};
