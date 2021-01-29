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

  const currentCountMessage = currentCount === 0
    ? ' '
    : `Initial count from props: ${currentCount} `;

  const [ count, setCount ] = useState(currentCount);

  if (typeof window === 'undefined') {
    console.log('rendering server...');

    return (
      <p>
        HydrationCheck! { currentCountMessage }
        Count: { count } {' '}
        <button>-</button> {' '}
        <button>+</button>

        { children } { ' huh '}
      </p>
    );
  }

  return (
    <p>
      HydrationCheck! { currentCountMessage }
      Count: { count } {' '}
      <button onClick={ () => setCount(count - 1) }>-</button> {' '}
      <button onClick={ () => setCount(count + 1) }>+</button>

      { children } { ' huh '}
    </p>
  );
};

export default withHydrate(HydrationCheck, {
  method: 'visible',
});
