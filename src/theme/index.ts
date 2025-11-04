import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// Определение цветовых тем
export const colorThemes = {
  blue: {
    name: 'Синяя',
    colors: {
      primary: {
        50: '#e3f2fd',
        100: '#bbdefb',
        200: '#90caf9',
        300: '#64b5f6',
        400: '#42a5f5',
        500: '#2196f3',
        600: '#1e88e5',
        700: '#1976d2',
        800: '#1565c0',
        900: '#0d47a1',
      },
      accent: {
        50: '#e1f5fe',
        100: '#b3e5fc',
        200: '#81d4fa',
        300: '#4fc3f7',
        400: '#29b6f6',
        500: '#03a9f4',
        600: '#039be5',
        700: '#0288d1',
        800: '#0277bd',
        900: '#01579b',
      },
    },
  },
  green: {
    name: 'Зелёная',
    colors: {
      primary: {
        50: '#e8f5e9',
        100: '#c8e6c9',
        200: '#a5d6a7',
        300: '#81c784',
        400: '#66bb6a',
        500: '#4caf50',
        600: '#43a047',
        700: '#388e3c',
        800: '#2e7d32',
        900: '#1b5e20',
      },
      accent: {
        50: '#f1f8e9',
        100: '#dcedc8',
        200: '#c5e1a5',
        300: '#aed581',
        400: '#9ccc65',
        500: '#8bc34a',
        600: '#7cb342',
        700: '#689f38',
        800: '#558b2f',
        900: '#33691e',
      },
    },
  },
  purple: {
    name: 'Фиолетовая',
    colors: {
      primary: {
        50: '#f3e5f5',
        100: '#e1bee7',
        200: '#ce93d8',
        300: '#ba68c8',
        400: '#ab47bc',
        500: '#9c27b0',
        600: '#8e24aa',
        700: '#7b1fa2',
        800: '#6a1b9a',
        900: '#4a148c',
      },
      accent: {
        50: '#ede7f6',
        100: '#d1c4e9',
        200: '#b39ddb',
        300: '#9575cd',
        400: '#7e57c2',
        500: '#673ab7',
        600: '#5e35b1',
        700: '#512da8',
        800: '#4527a0',
        900: '#311b92',
      },
    },
  },
  orange: {
    name: 'Оранжевая',
    colors: {
      primary: {
        50: '#fff3e0',
        100: '#ffe0b2',
        200: '#ffcc80',
        300: '#ffb74d',
        400: '#ffa726',
        500: '#ff9800',
        600: '#fb8c00',
        700: '#f57c00',
        800: '#ef6c00',
        900: '#e65100',
      },
      accent: {
        50: '#fbe9e7',
        100: '#ffccbc',
        200: '#ffab91',
        300: '#ff8a65',
        400: '#ff7043',
        500: '#ff5722',
        600: '#f4511e',
        700: '#e64a19',
        800: '#d84315',
        900: '#bf360c',
      },
    },
  },
  teal: {
    name: 'Бирюзовая',
    colors: {
      primary: {
        50: '#e0f2f1',
        100: '#b2dfdb',
        200: '#80cbc4',
        300: '#4db6ac',
        400: '#26a69a',
        500: '#009688',
        600: '#00897b',
        700: '#00796b',
        800: '#00695c',
        900: '#004d40',
      },
      accent: {
        50: '#e0f7fa',
        100: '#b2ebf2',
        200: '#80deea',
        300: '#4dd0e1',
        400: '#26c6da',
        500: '#00bcd4',
        600: '#00acc1',
        700: '#0097a7',
        800: '#00838f',
        900: '#006064',
      },
    },
  },
};

export type ThemeName = keyof typeof colorThemes;

// Функция для создания темы с заданными цветами
export const createTheme = (themeName: ThemeName) => {
  const selectedTheme = colorThemes[themeName];
  
  return extendTheme({
    config,
    colors: {
      brand: selectedTheme.colors.primary,
      accent: selectedTheme.colors.accent,
    },
    fonts: {
      heading: `'Inter', sans-serif`,
      body: `'Inter', sans-serif`,
    },
    components: {
      Button: {
        variants: {
          solid: (props: any) => ({
            bg: props.colorScheme === 'brand' ? 'brand.500' : undefined,
            color: 'white',
            _hover: {
              bg: props.colorScheme === 'brand' ? 'brand.600' : undefined,
            },
          }),
        },
        defaultProps: {
          colorScheme: 'brand',
        },
      },
      Link: {
        baseStyle: {
          color: 'brand.500',
          _hover: {
            color: 'brand.600',
            textDecoration: 'underline',
          },
        },
      },
    },
  });
};

const theme = createTheme('blue');

export default theme;
