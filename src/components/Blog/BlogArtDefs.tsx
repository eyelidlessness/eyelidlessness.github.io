export const BlogArtStaticDefs = () => (
  <>
    <linearGradient id="horizontalMidFadeGradient" y2="0" x2="1">
      <stop offset="0"      stop-color="white" stop-opacity="0.25" />
      <stop offset="0.0125" stop-color="white" stop-opacity="0.25" />
      <stop offset="0.075"  stop-color="white" stop-opacity=".5" />
      <stop offset="0.5"    stop-color="white" stop-opacity="1" />
      <stop offset="0.925"  stop-color="white" stop-opacity=".5" />
      <stop offset="0.9875" stop-color="white" stop-opacity="0.25" />
      <stop offset="1"      stop-color="white" stop-opacity="0.25" />
    </linearGradient>

    <mask id="horizontalMidFade" maskContentUnits="objectBoundingBox">
      <rect fill="url(#softVerticalFadeGradient)" height="1" width="1" />
    </mask>

    <linearGradient id="softVerticalFadeGradient" y2="1" x2="0">
      <stop offset="0"    stop-color="white" stop-opacity="1" />
      <stop offset="0.25" stop-color="white" stop-opacity=".75" />
      <stop offset="1"    stop-color="white" stop-opacity="0.35" />
    </linearGradient>

    <mask id="softVerticalFade" maskContentUnits="objectBoundingBox">
      <rect fill="url(#softVerticalFadeGradient)" height="1" width="1" />
    </mask>
  </>
);

export const BlogArtDefs = () => (
  <svg
    aria-hidden="true"
    height="0"
    width="0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1 1"
  >
    <defs><BlogArtStaticDefs /></defs>
  </svg>
);
