import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { colorThemes, type ThemeName } from "./colorThemes";
import { breakpoints } from "./breakpoints";
import { TextStyles } from "./textStyles";
import { components } from "./components";
import { size } from "./sizes";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export { colorThemes, type ThemeName, TextStyles };

export const createTheme = (themeName: ThemeName) => {
  const selectedTheme = colorThemes[themeName] || colorThemes.tablet;

  return extendTheme({
    config,
    breakpoints,
    colors: selectedTheme.colors,
    ...size,
    fonts: {
      heading: `'Fira Sans', 'Inter', sans-serif`,
      body: `'Fira Sans', 'Inter', sans-serif`,
      mono: `'Rubik Mono One', monospace`,
      display: `'Russo One', sans-serif`,
    },
    textStyles: TextStyles,
    components,
  });
};

const theme = createTheme("tablet");

export default theme;
