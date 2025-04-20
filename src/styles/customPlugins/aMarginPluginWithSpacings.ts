import { PluginAPI } from 'tailwindcss/types/config';

export const aMarginPluginWithSpacings = ({
  addUtilities,
  theme,
}: PluginAPI) => {
  const margins: Record<string, Record<string, string>> = {};

  const marginValues = theme('margin') as Record<string, string | number>;

  for (let [key, value] of Object.entries(marginValues)) {
    const valueStr = typeof value === 'string' ? value : `${value}px`;

    margins[`.a-margin-${key}`] = {
      top: valueStr,
      left: valueStr,
      right: valueStr,
      bottom: valueStr,
    };
  }

  addUtilities(margins);
};
