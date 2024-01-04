import '../src/styles/index.scss';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../src/state';
import React from 'react'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }: AppProps) => {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>  
  );
}

export default appWithTranslation(App);