import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navigation.module.scss"
const BASE_CLASS = 'navbar'

const Navigation = () => {


  return (
    <nav className={`${styles[BASE_CLASS]} container`}>
      <Link to="/">
        <img src="" alt="" />
        <span>Live <span className={styles[`${BASE_CLASS}__text_highlight`]}>Meetup</span></span>
      </Link>
    </nav>
  )
}

export default Navigation