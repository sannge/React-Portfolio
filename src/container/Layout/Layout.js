import React from 'react'
import dynamic from 'next/dynamic'
import Footer from '../../component/Footer/Footer'
import Navbar from '../../component/Navbar/Navbar'
import classes from './Layout.module.css'

const Chat = dynamic(() => import('../Chat/Chat'), { ssr: false })

function Layout(props) {
  return (
    <>
      <div className={classes.Layout}>
        <Navbar />
        <div className={classes.pages}>
          {props.children}
        </div>
        <Chat />
      </div>
      <Footer />
    </>
  )
}

export default Layout
