import { seo }        from 'microsite/head';
import { definePage } from 'microsite/page';
import {
  BlogArt,
  BlogArtDefs,
} from '@/components/BlogArt';
import { Head }       from '@/components/Head';
import HydrationCheck from '@/components/HydrationCheck';
import { Main }       from '@/components/Main';
import { Topic }      from '@/lib/content';
import {
  css,
  styled,
} from '@/lib/styles';

interface WelpProps {
  readonly cssPath?: string;
  readonly styles?:  string;
}

const green95 = css({
  color:    'green',
  fontSize: '95px',
});

const Red = styled('div', {
  color: 'red',
});

const WelpPage = ({
  cssPath,
  styles,
}: WelpProps) => {
  return (
    <>
      <Head>
        <seo.title>WELP</seo.title>
      </Head>

      <Main>
        <BlogArtDefs />
        <BlogArt
          hash="cb544c93e5b363ba1198a8b9c2f5ab9b97065a1a"
          topics={[ Topic.LEMON, Topic.ARTS_CRAFTS ]}
        />
        <h1>Welcome to Microsite!</h1>
        <div class={ green95 }>Green 95</div>
        <Red>test</Red>
  <pre>{ JSON.stringify({ cssPath, styles, }, null, 2) }</pre>
        <p>
          Ready to build something amazing? <a href="https://github.com/natemoo-re/microsite">Read the docs</a> to get started.
        </p>

        <p><a href="/" rel="prefetch preload">Go to index page...</a></p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum massa, maximus ut turpis vitae, tempus finibus nunc. Pellentesque justo nisl, egestas ornare ligula at, aliquet dictum augue. Proin mollis, diam id congue sollicitudin, diam tortor dapibus erat, ut blandit ex odio eget quam. Morbi ullamcorper facilisis tellus ac iaculis. Proin pellentesque faucibus facilisis. Cras pretium nunc ut libero rhoncus lobortis. Curabitur ac massa mollis, pulvinar velit quis, egestas ante. Cras vestibulum placerat erat, et venenatis purus consequat at. Nullam imperdiet a massa consequat faucibus. Proin auctor dapibus lacus, vitae pretium ante ultrices id. Vestibulum feugiat porttitor nibh pellentesque rutrum. Maecenas sit amet tortor tempor, imperdiet nulla id, hendrerit diam. Aenean in fringilla augue. Nullam faucibus justo at risus dictum pharetra. Aenean accumsan odio vitae nunc iaculis, vel dignissim mi posuere.</p>

        <p>Proin sagittis eros quis lacus rhoncus porta. Nam ullamcorper lectus in blandit suscipit. Curabitur tincidunt lorem id arcu consequat, non iaculis diam consequat. Quisque sed nisi turpis. Pellentesque non accumsan ex. Nunc rhoncus luctus consectetur. Nunc aliquam quam vitae lectus congue, sit amet laoreet nisl suscipit. Vivamus nulla magna, vestibulum ac mollis sed, mollis eget leo. Phasellus et tortor eleifend, vestibulum risus at, volutpat eros. Donec dapibus, risus vitae vulputate malesuada, libero metus mattis ligula, quis blandit ex erat quis risus. Duis nec nisi tortor. Nunc tincidunt porttitor erat.</p>

        <p>Morbi eu pharetra nunc. Sed gravida erat id nunc porttitor, in dapibus eros aliquam. Phasellus at hendrerit magna. Sed dictum magna nec ultrices porta. Fusce condimentum ultricies est, ac suscipit tortor ornare eu. Pellentesque interdum, odio non ornare elementum, purus massa lobortis felis, vitae eleifend odio sapien at quam. Nulla eget felis maximus, scelerisque enim sed, placerat augue. Suspendisse vehicula pulvinar tellus, porta pharetra mauris varius ac. Aenean egestas mi porttitor feugiat consectetur.</p>

        <p>In condimentum sed purus ut dignissim. Proin et velit elit. In in purus facilisis libero fermentum venenatis tincidunt non leo. Proin orci ipsum, venenatis eget mauris at, tincidunt tincidunt velit. Nulla rhoncus nibh ut leo pharetra pretium. Curabitur tristique ligula vel lacus consequat sollicitudin. Nunc varius, nisl at feugiat venenatis, purus orci eleifend odio, vitae aliquet justo nulla ac lorem. Nulla facilisi. Nullam in ipsum a nunc consectetur sagittis. Nulla cursus arcu sit amet augue efficitur finibus. Aenean at consequat est, sed rutrum tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

        <p>Proin molestie tincidunt ex et imperdiet. Curabitur ac elementum ligula. Curabitur nisi tortor, egestas non facilisis congue, condimentum in sapien. Nullam pulvinar varius gravida. Mauris nec maximus nunc. Vestibulum in risus orci. Aenean accumsan dolor hendrerit, facilisis nisl eget, pellentesque erat.</p>

        <HydrationCheck currentCount={ 10 } />
      </Main>
    </>
  );
};

export default definePage(WelpPage);
