import React from 'react'
import Head from 'next/head'
import Header from '../includes/header'

const MainLayout = (props: any) => {
  return (
    <>
      <Head>
        <title>Mycontent Next Js</title>
        <link
          href="https://fonts.googleapis.com/css?family=Kanit&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link href="/static/css/styles.css" rel="stylesheet" />
      </Head>
      <div className="mainLayout_container">
        <Header />
        <div className="container">{props.children}</div>
      </div>
    </>
  )
}
export default MainLayout
