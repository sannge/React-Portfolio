import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classes from './Menu.module.css'

function Menu(props) {
  const router = useRouter()

  let CLASS = [classes.Menu]
  if (props.openMenu) {
    CLASS.push(classes.active)
  }

  const navItems = [
    { href: '/', icon: 'fas fa-home', label: 'Home' },
    { href: '/experience', icon: 'fas fa-briefcase', label: 'Experience' },
    { href: '/projects', icon: 'fas fa-folder-open', label: 'Projects' },
    { href: '/contact', icon: 'fas fa-address-book', label: 'Contact Info' },
  ]

  return (
    <div className={CLASS.join(' ')}>
      <div className={classes.itemsContainer}>
        <ul>
          {navItems.map(({ href, icon, label }) => {
            const isActive = router.pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={props.clickHandler}
                  className={[classes.link, isActive ? classes.active : ''].join(' ')}
                >
                  <i className={icon}></i>
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Menu
