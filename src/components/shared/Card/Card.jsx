import React from 'react'
import { Icon } from "@mdi/react"
import styles from "./Card.module.scss"

const Card = ({
  children,
  cardTitleText,
  icon,
  iconProps
}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={`${styles.card}`}>
        <div className={styles.headingWrapper}>
          <Icon 
            path={icon}
            title={cardTitleText}
            {...iconProps}
            />
          <h1 className={styles.headingWrapper__heading_text}>{cardTitleText}</h1>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Card