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
          ⚛️
          <span style={ {
            display: 'inline-block',
            width: '0.5em',
          } } />
          underconstruction.gif
          🎉
        </marquee>
      </Blink>
    </p>
  </>
);

export default Index;
