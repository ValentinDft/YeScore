import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar/navbar';

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>YeScore | Home</title>
        <meta name="description" content="Football app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </div>
  );
};

export default Index;
