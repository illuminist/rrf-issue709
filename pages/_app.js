import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head'
import withReduxStore from '../withReduxStore'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

// import Layout from '../components/Layout.js'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    const rrfConfig = { userProfile: 'users' } // react-redux-firebase config

    const rrfProps = {
      firebase,
      config: rrfConfig,
      dispatch: reduxStore.dispatch,
      // createFirestoreInstance // <- needed if using firestore
    }

    return (
      <Container>
       <Provider store={reduxStore}>
         <ReactReduxFirebaseProvider {...rrfProps}>
          <Component {...pageProps} />
        </ReactReduxFirebaseProvider>
       </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp)