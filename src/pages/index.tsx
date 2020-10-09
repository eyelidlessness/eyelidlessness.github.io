import Head from 'next/head';
import Blink from '../components/Blink';

const title = `This one\'s for u Lee`;

const Index = () => (
  <>
    <Head>
      <title>Hey okay be patient...</title>
    </Head>
    <p>
      <Blink>
        <marquee title={ title }>
          ⚛️ underconstruction.gif
        </marquee>
      </Blink>
    </p>
  </>
);

export default Index;
