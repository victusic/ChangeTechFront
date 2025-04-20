import type { PluginAPI } from 'tailwindcss/types/config';

export const aMarginPluginWithPx = ({ matchUtilities }: PluginAPI) => {
  matchUtilities({
    'a-margin': (value) => {
      const values = value.split('-');
      const firstValue = values[0];
      let size;

      if (
        firstValue &&
        !firstValue.includes('px') &&
        !isNaN(Number(firstValue))
      ) {
        size = String(Number(firstValue) * 8) + 'px';
      }

      return {
        top: size || firstValue,
        left: size || firstValue,
        right: size || firstValue,
        bottom: size || firstValue,
      };
    },
  });
};
