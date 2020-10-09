import Blink from '../components/Blink';

const title = `This one\'s for u Lee`;

const Index = () => (
  <div>
    <Blink>
      <marquee title={ title }>
        underconstruction.gif
      </marquee>
    </Blink>


    <marquee title={ 'hey' + title }>
      { /* <Blink> */ }
        underconstruction.gif
      { /* </Blink> */ }
    </marquee>
  </div>
);

export default Index;
