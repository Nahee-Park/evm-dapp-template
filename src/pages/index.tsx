import styled from '@emotion/styled';
import { connectMetamask } from '@src/utils/connectWallet';
import type { NextPage } from 'next';
import Head from 'next/head';

const Feed: NextPage = () => {
  const handleWalletClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (e.currentTarget.id) {
      case 'metamask':
        console.log(await connectMetamask());
        break;
      default:
        break;
    }
  };

  return (
    <Styled.Page>
      <Head>
        <title>Scam Scan</title>
        <meta name="description" content="Scan Scab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        className="btn btn-outline btn-success"
        onClick={handleWalletClick}
        type="button"
        id="metamask"
      >
        Connect Metamask Wallet
      </button>
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
