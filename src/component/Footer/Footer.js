import React from 'react'
import Link from 'next/link'
import classes from './Footer.module.css'

function Footer() {
  return (
    <div className={classes.Footer}>
      <Link href='/' className={classes.Link}>
        <h1>San</h1>
      </Link>
      <div className={classes.social}>
        <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/sam.nge.507'>
          <i className='fab fa-facebook'></i>
        </a>
        <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/san-nge-695b16180'>
          <i className='fab fa-linkedin'></i>
        </a>
        <a target='_blank' rel='noopener noreferrer' href='https://www.github.com/sannge'>
          <i className='fab fa-github'></i>
        </a>
      </div>
      <small>&copy; 2022 Copyright</small>
    </div>
  )
}

export default Footer
