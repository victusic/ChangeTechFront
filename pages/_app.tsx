import '../src/styles/index.scss';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../src/state';
import React from 'react';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
