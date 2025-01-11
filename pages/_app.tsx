import '../src/styles/index.scss';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../src/state';
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Asia/Almaty"
      messages={pageProps.messages}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </NextIntlClientProvider>
  );
}

export default App;
