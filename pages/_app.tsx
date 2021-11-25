import type { AppProps } from 'next/app';
import Footer from '../src/components/Footer';
import Top from '../src/components/Top';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import GlobalStyle from '../styles/reset';
import 'semantic-ui-css/semantic.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ width: 1000, margin: '0 auto' }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Top />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
