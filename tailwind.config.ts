import type { Config } from 'tailwindcss';

import { screens } from './src/styles/screens';
import { fonts } from './src/styles/fonts';
import { colors } from './src/styles/colors';
import { spacing } from './src/styles/spacing';
import {
  aMarginPluginWithPx,
  aMarginPluginWithSpacings,
} from './src/styles/customPlugins';
import forms from '@tailwindcss/forms';

export default {
  content: [
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    extend: {
      screens,
      fontFamily: fonts,
      spacing,
    },
  },
  plugins: [forms, aMarginPluginWithSpacings, aMarginPluginWithPx],
  corePlugins: {},
} satisfies Config;

