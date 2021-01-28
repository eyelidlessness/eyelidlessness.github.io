import { withHydrate }       from 'microsite/hydrate';
import { ComponentChildren } from 'preact';
import { useState }          from 'preact/hooks';

interface HydrationCheckProps {
  readonly children?:     ComponentChildren;
  readonly currentCount?: number;
}

const HydrationCheck = (props: HydrationCheckProps) => {
  const {
    children,
    currentCount = 0,
  } = props;

  const [ count, setCount ] = useState(currentCount);

  const currentCountMessage = currentCount === 0
    ? ' '
    : `Initial count from props: ${currentCount} `;

    console.log('rendering HydrationCheck...')

  return (
    <p>
      HydrationCheck! { currentCountMessage }
      Count: { count } {' '}
      <button onClick={ () => setCount(count - 1) }>-</button> {' '}
      <button onClick={ () => setCount(count + 1) }>+</button>

      { children } { ' huh'}
    </p>
  );
};

export default withHydrate(HydrationCheck, {
  // method: 'visible',
});
