import React, { Component } from 'react';
import App, { Container } from 'next/app';
import { Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import  { makeStore } from '../store';


export default withRedux(makeStore, {debug: true})(class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
            }
        };

    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={ store }>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </Provider>
        );
    }
});


