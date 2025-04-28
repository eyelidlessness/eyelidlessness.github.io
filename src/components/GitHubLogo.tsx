import {
  styled,
  theme,
} from '@/lib/styles';
import { SVGDefs } from './SVGDefs.jsx';

const baseSize        = 512;
const viewBox         = [ 0, 0, baseSize, baseSize ].join(' ');
const containerRadius = baseSize / 2;

const octocatPath = [
  'M335',
  '499c14',
  '0',
  '12',
  '17',
  '12',
  '17H165s-2-17',
  '12-17c13',
  '0',
  '16-6',
  '16-12l-1-50c-71',
  '16-86-28-86-28-12-30-28-37-28-37-24-16',
  '1-16',
  '1-16',
  '26',
  '2',
  '40',
  '26',
  '40',
  '26',
  '22',
  '39',
  '59',
  '28',
  '74',
  '22',
  '2-17',
  '9-28',
  '16-35-57-6-116-28-116-126',
  '0-28',
  '10-51',
  '26-69-3-6-11-32',
  '3-67',
  '0',
  '0',
  '21-7',
  '70',
  '26',
  '42-12',
  '86-12',
  '128',
  '0',
  '49-33',
  '70-26',
  '70-26',
  '14',
  '35',
  '6',
  '61',
  '3',
  '67',
  '16',
  '18',
  '26',
  '41',
  '26',
  '69',
  '0',
  '98-60',
  '120-117',
  '126',
  '10',
  '8',
  '18',
  '24',
  '18',
  '48l-1',
  '70c0',
  '6',
  '3',
  '12',
  '16',
  '12z',
].join(' ');

export const GitHubLogoDefs = () => (
  <SVGDefs
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    aria-label="GitHub"
    height="0"
    viewBox={ viewBox }
    width="0"
  >
    <defs>
      <mask id="octocat-knockout">
        <rect
          fill="#fff"
          height={ baseSize }
          mask="url(#octocat)"
          rx={ containerRadius }
          width={ baseSize }
        />
        <path d={ octocatPath } fill="#000" />
      </mask>
    </defs>
  </SVGDefs>
);

const BaseGitHubLogo = styled('rect', {
  ...theme.gitHubLogo,
});

interface GitHubLogoProps {
  readonly className?: string;
}

/**
 * This SVG is heavily derived from SuperTinyIcons.
 *
 * @see {@link https://github.com/edent/SuperTinyIcons}
 */
export const GitHubLogo = ({ className }: GitHubLogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="GitHub"
    className={ className }
    role="img"
    viewBox={ viewBox }
  >
    <title>GitHub</title>
    <BaseGitHubLogo
      height={ baseSize }
      mask="url(#octocat-knockout)"
      width={ baseSize }
    />
  </svg>
);
