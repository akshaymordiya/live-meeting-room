import React from 'react'
import styles from "./BrandLogo.module.scss"

const BrandLogo = () => {
  return (
    <span className={styles.logo}>
      Live 
      <span className={styles.logo__text_highlight}>
        Meetup
      </span>
    </span>
  )
}

export default BrandLogo