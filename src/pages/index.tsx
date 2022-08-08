import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Head from 'next/head';

const Feed: NextPage = () => {
  return (
    <Styled.Page>
      <Head>
        <title>SOPTstagram</title>
        <meta name="description" content="SOPTstagram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      메인입니다
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
