import React from 'react'
import Link from 'next/link'
import classes from './Logo.module.css'

function Logo() {
  return (
    <div className={classes.Logo}>
      <Link href='/' className={classes.link}>
        <h1>San</h1>
      </Link>
    </div>
  )
}

export default Logo
