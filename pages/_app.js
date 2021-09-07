
import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import Head from 'next/head'
import Caroussel from '../components/caroussel'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Testimonial from '../components/testimonial'

class MyApp extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props

    return (
      <Container>
        <Provider store={reduxStore}>
          <div id="main">
            <Head>
                  <script  src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
                  <script  src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="YjdiNWIyOTUtZTIyMy00MWMwLTkwNDUtMzI1M2M2NTgxYjE0"  id="snipcart"></script>
                  <link  href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet"  type="text/css" />
                  <link href="/static/main.css" rel="stylesheet" />
                  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" integrity="sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK" crossorigin="anonymous"></link>
            </Head>
            <Navigation />
            <Caroussel />
            <Component {...pageProps} />
            <Testimonial />
            <Footer />
          </div>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)