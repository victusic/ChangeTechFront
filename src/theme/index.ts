import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { colorThemes, type ThemeName } from "./colorThemes";
import { breakpoints } from "./breakpoints";
import { TextStyles } from "./textStyles";

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
    fonts: {
      heading: `'Fira Sans', 'Inter', sans-serif`,
      body: `'Fira Sans', 'Inter', sans-serif`,
      mono: `'Rubik Mono One', monospace`,
      display: `'Russo One', sans-serif`,
    },
    textStyles: TextStyles,
    components: {
      Button: {
        variants: {
          solid: (props: any) => ({
            bg: props.colorScheme === "brand" ? "brand.500" : undefined,
            color: "white",
            _hover: {
              bg: props.colorScheme === "brand" ? "brand.600" : undefined,
            },
          }),
        },
        defaultProps: {
          colorScheme: "brand",
        },
      },
      Link: {
        baseStyle: {
          color: "brand.500",
          _hover: {
            color: "brand.600",
            textDecoration: "underline",
          },
        },
      },
    },
  });
};

const theme = createTheme("tablet");

export default theme;
