import { NextPage } from 'next';
import Head from 'next/head';
import ListLeague from '../components/list-league/list-league';
import Navbar from '../components/navbar/navbar';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>YeScore | Home</title>
        <meta name="description" content="Football app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <ListLeague />
      </main>
    </>
  );
};

export default Index;
