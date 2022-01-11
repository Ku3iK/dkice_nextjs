import { generateMedia } from 'styled-media-query';
import tailwindConfig from 'tailwind.config';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export const theme = {
  ...tailwindConfig.theme,
};

export const mediaQueries = generateMedia(theme.screens);