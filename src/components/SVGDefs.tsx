import { styled } from '../lib/styles/styles.js';
import { theme } from '../lib/styles/theme.js';

export const SVGDefs = styled('svg', {
	...theme.visiblyHidden,

	position: 'absolute',
});
