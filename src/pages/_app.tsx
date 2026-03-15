import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import { createTheme } from "@/theme";
import { ThemeProvider, useThemeContext } from "@/shared/context/ThemeContext";
import "@/assets/fonts/fonts.css";

function AppContent({ Component, pageProps }: AppProps) {
  const { currentTheme } = useThemeContext();
  const theme = createTheme(currentTheme);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

function App(props: AppProps) {
  return (
    <ThemeProvider>
      <AppContent {...props} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
