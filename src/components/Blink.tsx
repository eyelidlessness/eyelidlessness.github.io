/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const blinkKeyframes = css(keyframes({
  '0%': {
    color: '#000',
  },
  '49%': {
    color: '#000',
  },
  '50%': {
    color: 'transparent',
  },
  '99%': {
    color: 'transparent',
  },
  '100%': {
    color: '#000',
  },
}));

const Blink = styled.span({
  animation: `${blinkKeyframes} 1s infinite`,
});

export default Blink;
