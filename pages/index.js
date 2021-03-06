import React from 'react'
import {connect} from 'react-redux'
import Products from '../components/products'
import Head from 'next/head'

class Index extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <link href="/static/main.css" rel="stylesheet" />
          <meta name="title" content="Spa store template" />
          <meta name="description" content='Here you can find a template spa store'  />
        </Head>

        <Products {...this.props}/>

      </div>
    )
  }
}

const mapStateToProps = (state) => 
    ({products: state.products})

export default connect(mapStateToProps)(Index)