import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import { theme } from 'src/styles/theme';
import GlobalStyles from 'src/styles/GlobalStyles';
import MainTemplate from '@components/containers/MainTemplate/MainTemplate';

const MyApp = ({ 
  Component, 
  pageProps 
}: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MainTemplate>
        <GlobalStyles />
        <Component {...pageProps} />
      </MainTemplate>
    </ThemeProvider>
  )
}

export default MyApp
