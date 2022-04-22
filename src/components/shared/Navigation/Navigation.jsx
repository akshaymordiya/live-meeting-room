import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navigation.module.scss"

//components
import BrandLogo from '../BrandLogo/BrandLogo'

const Navigation = () => {
  return (
    <nav className={`${styles.navbar} container`}>
      <Link to="/">
        <BrandLogo />
      </Link>
    </nav>
  )
}

export default Navigation